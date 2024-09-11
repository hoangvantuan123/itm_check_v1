import { useState, useCallback, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import {
  setWorkflowData,
  selectWorkflowData,
} from '../../features/workflow/slice/workflowIdSlice'
import { Handle, Position } from 'reactflow'
import { useParams } from 'react-router-dom'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow'
import TemplatePanel from '../components/template/templatePanel'
import 'reactflow/dist/style.css'
import '../components/workflows/style.css'
import HeaderItem from '../components/workflows/header-item'
import Tools from '../components/workflows/tools'
import RunHistory from '../components/workflows/run-history'
import AddNode from '../components/workflows/tools/add-node'
import ShowActionApp from '../components/workflows/tools/show-action-app'
import SearchWorkflow from '../components/workflows/tools/search-workflow'
import ListWorkflow from '../components/workflows/tools/list-workflow'
import FunctionWorkflow from '../components/workflows/tools/function-workflow'
import TriggerWorkflow from '../components/workflows/tools/trigger-workflow'
import TemplateTrigger from '../components/template/trigger-node'
import '../components/template/styles/index.css'
import EditTrigger from '../components/workflows/view-edit/trigger'
import TemplateFilter from '../components/template/filter-node'
import TemplateFunction from '../components/template/function-node'
import TemplateQuery from '../components/template/query-node'
import TemplateBranch from '../components/template/branch-node'
import TemplateLoop from '../components/template/loop-node'
import { fetchIDWorkflows } from '../../features/workflow/fetch-id-workflows'
import { createNodes } from '../../features/workflow/create-nodes'
import { fetchNodes } from '../../features/workflow/fetch-id-nodes'
import {
  fetchNodesAsync,
  createNodesAsync,
  setNodesData,
} from '../../features/workflow/slice/nodesSlice'
import {
  fetchEdgesAsync,
  setEdgesData,
  createEdgesAsync,
} from '../../features/workflow/slice/edgesSlice'
import { fetchRunWorkflowAsync } from '../../features/code-runner/fetch-id-run-workflow'
import { setRunWorkflow } from '../../features/code-runner/slice/runWorkflowSlice'
import { createEdges } from '../../features/workflow/create-edges'
import { updateNodesId } from '../../features/workflow/update-nodes'
import { deleteEdgesAsync } from '../../features/workflow/delete-edges'
import { fetchSynIdWorkflowUser } from '../../features/syn/fetch-id-syn'
import { setSynWorkflow } from '../../features/syn/slice/synSlice'
import { v4 as uuidv4 } from 'uuid'
import TemplateWebHook from '../components/template/webhook-node'
import TemplateChart from '../components/template/chart-node'
import TemplateSlackGroup from '../components/template/slack-group'
import TemplateEmails from '../components/template/email'
import TemplateVnua from '../components/template/vnua'
import TemplateSlackVnua from '../components/template/slack-vnua'
const nodeTypes = {
  trigger: TemplateTrigger,
  filter: TemplateFilter,
  function: TemplateFunction,
  query: TemplateQuery,
  branch: TemplateBranch,
  loop: TemplateLoop,
  webhook: TemplateWebHook,
  chart: TemplateChart,
  slack: TemplateSlackGroup,
  emails: TemplateEmails,
  vnua: TemplateVnua,
  slack_vnua : TemplateSlackVnua
}

export default function WorkflowSyn() {
  const { t } = useTranslation()
  const { id } = useParams()
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const dispatch = useDispatch()
  const workflowData = useSelector(selectWorkflowData)
  const userId = userFromLocalStorage.id
  const [showRunHistory, setShowRunHistory] = React.useState(false)
  const [isAddNodeOpen, setAddNodeOpen] = React.useState(false)
  const [isShowActionApp, setIsShowActionApp] = React.useState(false)
  const [isSearchWorkFlow, setIsSearchWorkFlow] = React.useState(false)
  const [isListWorkFlow, setIsListWorkFlow] = React.useState(false)
  const [isFunctionWorkFlow, setIsFunctionWorkFlow] = React.useState(false)
  const [isTriggerWorkFlow, setIsTriggerWorkFlow] = React.useState(false)
  const synWorkflowData = useSelector((state) => state.synWorkflow.userData)

  const [confirmDeleteEdge, setConfirmDeleteEdge] = useState(false)
  const [edgeToDelete, setEdgeToDelete] = useState(null)

  const fetchSynWorkflowData = async () => {
    try {
      const response = await dispatch(fetchSynIdWorkflowUser(id))
      dispatch(setSynWorkflow(response.payload))
    } catch (error) {
      console.error('Error fetching nodes:', error)
    }
  }

  const fetchRunWorkflowData = async () => {
    try {
      const response = await dispatch(fetchRunWorkflowAsync(id))
      dispatch(setRunWorkflow(response.payload))
    } catch (error) {
      console.error('Error fetching nodes:', error)
    }
  }
  useEffect(() => {
    fetchSynWorkflowData()
    fetchRunWorkflowData()
  }, [dispatch, id, userId])

  useEffect(() => {
    setNodes(synWorkflowData[0]?.nodes)
    setEdges(synWorkflowData[0]?.edges)
  }, [synWorkflowData])

  const [nodes, setNodes, onNodesChange] = useNodesState()

  const [edges, setEdges, onEdgesChange] = useEdgesState()
  const addEdgesToDatabase = async (edgesData) => {
    try {
      await createEdges(edgesData)
      fetchEdgesData()
    } catch (error) {
      console.error('Error adding nodes to the database:', error.message)
      throw error
    }
  }
  const onConnect = (params) => {
    const newEdges = {
      sourceNode: {
        id: params.source,
      },
      targetNode: {
        id: params.target,
      },
      workflow: {
        id: workflowData?.data?.id,
      },
    }
    const newEdge = {
      id: uuidv4(),
      source: params.source,
      target: params.target,
    }

    setEdges((prevEdges) => [...prevEdges, newEdge])
    onEdgesChange([...edges, newEdge])
    addEdgesToDatabase(newEdges)
  }
  const handleNodeClick = (project_id) => {
    const projectNodes = nodes.filter((node) => node.project_id === project_id)
  }
  const handleEdgeClick = (event, edge) => {
    dispatch(deleteEdgesAsync(edge.id))
  }
  const [draggingTemplate, setDraggingTemplate] = useState(false)
  const addNodeToDatabase = async (nodeData) => {
    try {
      const response = await createNodes(nodeData)

      const newNode = response
      setNodes((prevNodes) => [...prevNodes, newNode])
      onNodesChange([...nodes, newNode])
      fetchNodesData()
      if (response.edges) {
        const newEdges = response.edges
        setEdges((prevEdges) => [...prevEdges, ...newEdges])
        onEdgesChange([...edges, ...newEdges])
      }
    } catch (error) {
      console.error('Error adding nodes to the database:', error.message)
      throw error
    }
  }

  const handleDrop = (event) => {
    if (draggingTemplate) {
      const templateData = JSON.parse(
        event.dataTransfer.getData('application/reactflow'),
      )
      const newNode = {
        id: uuidv4(),
        type: templateData.type,
        position: {
          x: event.clientX - 200,
          y: event.clientY,
        },
        workflow: {
          id: workflowData?.data?.id,
        },
        data: templateData.data,
        details: templateData.details,
      }
      addNodeToDatabase(newNode)
    }
  }
  const handleNodeDragStop = (node) => {
    const updates = {
      position: {
        x: node.position.x,
        y: node.position.y,
      },
    }
    updateNodesId(node.id, updates)
  }

  const handleOnClickShowRuncode = () => {
    setShowRunHistory(!showRunHistory)
  }
  const openAddNode = () => {
    setAddNodeOpen(!isAddNodeOpen)
  }
  const openShowActionApp = () => {
    setIsShowActionApp(!isShowActionApp)
  }
  const openShowWorkFlow = () => {
    setIsSearchWorkFlow(!isSearchWorkFlow)
  }
  const openShowListWorkFlow = () => {
    setIsListWorkFlow(!isListWorkFlow)
  }
  const openShowFunctionsWorkFlow = () => {
    setIsFunctionWorkFlow(!isFunctionWorkFlow)
  }
  const openShowTriggersWorkFlow = () => {
    setIsTriggerWorkFlow(!isTriggerWorkFlow)
  }

  return (
    <>
      <Helmet>
        <title>Workflow Saas - Home</title>
      </Helmet>

      <div className="w-full h-screen flex flex-col ">
        <HeaderItem
          handleOnClickShowRuncode={handleOnClickShowRuncode}
          projectId={id}
        />
        <div className="flex w-full h-screen">
          <Tools
            openAddNode={openAddNode}
            isAddNodeOpen={isAddNodeOpen}
            openShowWorkFlow={openShowWorkFlow}
            openShowListWorkFlow={openShowListWorkFlow}
            openShowFunctionsWorkFlow={openShowFunctionsWorkFlow}
            openShowTriggersWorkFlow={openShowTriggersWorkFlow}
          />
          {isAddNodeOpen && (
            <div className="flex w-auto">
              <div className=" w-80 bg-white border-r">
                <AddNode
                  openAddNode={openAddNode}
                  openShowActionApp={openShowActionApp}
                  onDragStart={() => setDraggingTemplate(true)}
                />
              </div>
              {isShowActionApp && (
                <div className=" w-96 bg-white border-r">
                  <ShowActionApp openShowActionApp={openShowActionApp} />
                </div>
              )}
            </div>
          )}
          {isSearchWorkFlow && (
            <div className=" w-80 bg-white border-r">
              {' '}
              <SearchWorkflow openShowWorkFlow={openShowWorkFlow} />
            </div>
          )}
          {isListWorkFlow && (
            <div className=" w-80 bg-white border-r">
              {' '}
              <ListWorkflow openShowListWorkFlow={openShowListWorkFlow} />
            </div>
          )}
          {isFunctionWorkFlow && (
            <div className=" w-80 bg-white border-r">
              {' '}
              <FunctionWorkflow
                openShowFunctionsWorkFlow={openShowFunctionsWorkFlow}
              />
            </div>
          )}

          {isTriggerWorkFlow && (
            <div className=" w-80 bg-white border-r">
              {' '}
              <TriggerWorkflow
                openShowTriggersWorkFlow={openShowTriggersWorkFlow}
              />
            </div>
          )}

          <div
            className="w-full "
            onDrop={handleDrop}
            onDragOver={(event) => event.preventDefault()}
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              onEdgeClick={handleEdgeClick}
              onNodeDragStop={(event, node) => handleNodeDragStop(node)}
            >
              <Controls />
              <MiniMap />
              <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
          </div>
        </div>
        <RunHistory
          handleOnClickShowRuncode={handleOnClickShowRuncode}
          showRunHistory={showRunHistory}
        />
      </div>
    </>
  )
}
