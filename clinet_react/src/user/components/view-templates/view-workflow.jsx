import {
  Button,
  Modal,
  Menu,
  Input,
  Form,
  notification,
  Typography,
  message,
} from 'antd'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow'
import TemplateTrigger from '../template/trigger-node'
import TemplateFilter from '../template/filter-node'
import TemplateFunction from '../template/function-node'
import TemplateQuery from '../template/query-node'
import TemplateBranch from '../template/branch-node'
import TemplateLoop from '../template/loop-node'
import TemplateWebHook from '../template/webhook-node'
import TemplateChart from '../template/chart-node'
import { createSynCornWorkflowAsync } from '../../../features/syn/create-syn'
const { Title, Text } = Typography
const nodeTypes = {
  trigger: TemplateTrigger,
  filter: TemplateFilter,
  function: TemplateFunction,
  query: TemplateQuery,
  branch: TemplateBranch,
  loop: TemplateLoop,
  webhook: TemplateWebHook,
  chart: TemplateChart,
}
const AddNode = () => {
  return (
    <svg
      className="w-5 h-5 opacity-65 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16V8"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default function ViewTemplate({ record }) {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))

  const userId = userFromLocalStorage.id
  const dispatch = useDispatch()
  const { id } = useParams()
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const [nodes, setNodes, onNodesChange] = useNodesState()
  const [edges, setEdges, onEdgesChange] = useEdgesState()
  useEffect(() => {
    setNodes(record?.nodes)
    setEdges(record?.edges)
  }, [record])
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/api/google/login'
  }
  const handle = (url) => {
    window.location.href = url
  }
  const handleUpload = async () => {
    setIsLoading(true)
    try {
      const workflow = {
        owner_user_id: userId,
        user_id: record.user_id,
        user_name: record.user_name,
        name_workflow: record.name_workflow,
        categories: record.categories,
        description: record.description,
        nodes: record?.nodes,
        edges: record?.edges,
        type: 'syn',
        refreshToken: '',
      }
      setIsLoading(false)
      const result = await dispatch(createSynCornWorkflowAsync(workflow))
      message.success('Workflow uploaded successfully')
      /*  setTimeout(() => {
        handle(`/u/workflow/${result.payload.id}`)
      }, 3000) */
      handleCancel()
    } catch (error) {
      setIsLoading(false)
      message.error('Failed to upload file')
    }
  }
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <a
        onClick={showModal}
        className="flex items-center  justify-center gap-2 rounded-lg px-4 py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <span className="text-sm font-medium">Open</span>
      </a>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        centered
        onCancel={handleCancel}
        width={1200}
        footer={null}
      >
        <div className=" flex  gap-3  ">
          <div className=" w-[40%]">
            <Title
              level={3}
              style={{
                margin: 0,
              }}
            >
              {' '}
              {record.name_workflow}
            </Title>
            <div className="flex flex-col">
              <Text
                style={{
                  margin: 0,
                }}
                level={5}
              >
                {' '}
                {record.description}
              </Text>
              <button
                key="ok"
                type="primary"
                onClick={handleUpload}
                className=" py-1 mt-2 px-5 border rounded-lg text-white bg-cyan-800 hover:bg-cyan-900  font-medium"
              >
                OPEN
              </button>
            </div>
          </div>
          <div className="border rounded-lg h-[600px] w-full mt-4">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              nodeTypes={nodeTypes}
            >
              <Controls />
              <MiniMap />
              <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
          </div>
        </div>
      </Modal>
    </div>
  )
}
