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
  ReactFlowProvider,
  Panel,
  useReactFlow,
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
import TemplateWebHook from '../components/template/webhook-node'
import TemplateChart from '../components/template/chart-node'
import TemplateSlackGroup from '../components/template/slack-group'
import TemplateEmails from '../components/template/email'
import TemplateVnua from '../components/template/vnua'
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
import { v4 as uuidv4 } from 'uuid'
import SettingsPanel from '../components/workflows/settings/Settings'
import 'moment/locale/vi'
import * as htmlToImage from 'html-to-image'
import TemplateSlackVnua from '../components/template/slack-vnua'
import ELK from 'elkjs/lib/elk.bundled.js'

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
const SettingIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-80"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
export default function Workflow() {
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
  const nodesData = useSelector((state) => state.nodes)
  const edgesData = useSelector((state) => state.edges)
  const [confirmDeleteEdge, setConfirmDeleteEdge] = useState(false)
  const [edgeToDelete, setEdgeToDelete] = useState(null)
  const [showSettings, setShowSettings] = useState(false)
  const [settings, setSettings] = useState({
    background: 'dots',
    gap: 12,
    size: 1,
    showControls: true,
    showMiniMap: true,
  })

  const handleLayout = (layout) => {
    // Logic for layout change
  }
  const fetchData = async () => {
    try {
      const data = await fetchIDWorkflows(id, userId)
      dispatch(setWorkflowData(data))
    } catch (error) {
      console.error('Error fetching data:', error.message)
    }
  }
  const fetchNodesData = async () => {
    try {
      const response = await dispatch(fetchNodesAsync(id))
      dispatch(setNodesData(response.payload))
    } catch (error) {
      console.error('Error fetching nodes:', error)
    }
  }

  const fetchEdgesData = async () => {
    try {
      const response = await dispatch(fetchEdgesAsync(id))
      dispatch(setEdgesData(response.payload))
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
    fetchNodesData()
    fetchData()
    fetchEdgesData()
    fetchRunWorkflowData()
  }, [dispatch, id, userId])

  useEffect(() => {
    setNodes(nodesData?.data)
    setEdges(edgesData?.data)
  }, [nodesData, edgesData])

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
      animated: true,
      style: { stroke: '#fff' },
    }

    setEdges((prevEdges) => [...prevEdges, newEdge])
    onEdgesChange([...edges, newEdge])
    addEdgesToDatabase(newEdges)
  }
  const handleNodeClick = (project_id) => {
    const projectNodes = nodes.filter((node) => node.project_id === project_id)
  }
  const handleEdgeClick = (event, edge) => {
    /* const updatedEdges = edges.filter((e) => e.id !== edge.id)
    setEdges(updatedEdges)
    onEdgesChange(updatedEdges) */
    dispatch(deleteEdgesAsync(edge.id))
    /*  setEdgeToDelete(edge);
    setConfirmDeleteEdge(true); */
  }
  const [draggingTemplate, setDraggingTemplate] = useState(false)
  const addNodeToDatabase = async (nodeData) => {
    try {
      const response = await createNodes(nodeData)
      console.log(response)
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
  const handleDownloadImage = useCallback(() => {
    const element = document.querySelector('.react-flow')
    setShowSettings(false)
    htmlToImage.toPng(element).then((dataUrl) => {
      const link = document.createElement('a')
      link.download = 'reactflow.png'
      link.href = dataUrl
      link.click()
    })
  }, [])

  const handShowSetting = () => {
    setShowSettings(!showSettings)
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
              {settings.showControls && <Controls />}
              {settings.showMiniMap && <MiniMap />}

              {showSettings && (
                <SettingsPanel
                  settings={settings}
                  setSettings={setSettings}
                  onLayout={handleLayout}
                  handleDownloadImage={handleDownloadImage}
                  setShowSettings={showSettings}
                />
              )}
              <Panel
                position="top-right"
                className="   w-10 flex items-center  justify-center gap-2 rounded-lg px-3 py-2 border cursor-pointer text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                onClick={() => setShowSettings(!showSettings)}
              >
                {' '}
                <SettingIcon />
              </Panel>
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
