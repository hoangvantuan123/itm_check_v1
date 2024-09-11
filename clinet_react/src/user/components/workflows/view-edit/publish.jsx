import {
  Button,
  Modal,
  Menu,
  Input,
  Form,
  notification,
  message,
  Upload,
  Select,
} from 'antd'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { InboxOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWorkflowUserDeploy } from '../../../../features/deploy-workflow/fetch-user-workflow-deploy'
import { createTemplatesWorkflowAsync } from '../../../../features/templates/create-deploy'
const { Dragger } = Upload
const { Option } = Select
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
const categoriesData = [
  { key: '1', name: 'All Categories', field: 'All Categories' },
  { key: '2', name: 'Analytics', field: 'Analytics' },
  { key: '3', name: 'Building Blocks', field: 'Building Blocks' },
  { key: '4', name: 'Communication', field: 'Communication' },
  { key: '5', name: 'Core Nodes', field: 'Core Nodes' },
  {
    key: '6',
    name: 'Customer Service',
    field: 'Customer Service',
  },
  { key: '7', name: 'Cybersecurity', field: 'Cybersecurity' },
  { key: '8', name: 'Data & Storage', field: 'Data & Storage' },
  { key: '9', name: 'Data Science', field: 'Data Science' },
  { key: '10', name: 'DevOps & IT', field: 'DevOps & IT' },
  { key: '11', name: 'Development', field: 'Development' },
  {
    key: '12',
    name: 'Finance & Accounting',
    field: 'Finance & Accounting',
  },
  { key: '13', name: 'HR & People Ops', field: 'HR & People Ops' },
  { key: 'langchain', name: 'Langchain', field: 'Langchain' },
  {
    key: '14',
    name: 'Managed Service Providers',
    field: 'Managed Service Providers',
  },
  { key: '15', name: 'Marketing', field: 'Marketing' },
  {
    key: '16',
    name: 'Marketing & Growth',
    field: 'Marketing & Growth',
  },
  {
    key: '17',
    name: 'Miscellaneous',
    field: 'Miscellaneous',
  },
  {
    key: '18',
    name: 'Monitoring',
    field: 'Monitoring',
  },
  {
    key: '19',
    name: 'Product & Project Managemen',
    field: 'Product & Project Managemen',
  },
  {
    key: '20',
    name: 'Sales',
    field: 'Sales',
  },
  {
    key: '21',
    name: 'Utility',
    field: 'Utility',
  },
]
const options = categoriesData.map((category) => ({
  value: category.field,
  label: category.name,
}))
/* const props = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files)
  },
} */
export default function Publish() {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userId = userFromLocalStorage.id
  const userName =
    userFromLocalStorage.firstName + ' ' + userFromLocalStorage.lastName
  const dispatch = useDispatch()
  const { id } = useParams()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const workflowData = useSelector((state) => state.workflow.data)
  const nodesData = useSelector((state) => state.nodes.data)
  const edgesData = useSelector((state) => state.edges.data)
  const dataDeployWorkflow = useSelector(
    (state) => state.deployWorkflow.userData,
  )
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState('')
  const [file, setFile] = useState(null)
  useEffect(() => {
    dispatch(fetchWorkflowUserDeploy(userId))
  }, [userId])

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/api/google/login'
  }
  const handlePageAccuracy = () => {
    window.location.href = '/u/accuracy/google'
  }

  localStorage.removeItem('workflowId')
  //localStorage.setItem('workflowId', workflowData?.data?.id);

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }
  const handleUpload = async () => {
    setIsLoading(true)

    try {
      const workflow = {
        user_id: userFromLocalStorage.id,
        user_name: userName,
        name_workflow: inputValue,
        categories: categories,
        description: description,
        nodes: nodesData,
        edges: edgesData,
        refreshToken: '',
      }
      setIsLoading(false)
      await dispatch(createTemplatesWorkflowAsync(workflow))
      /* setInputValue('');
      setDescription('');
      setFile(null); */
      message.success('Upload successful')
      handleCancel()
    } catch (error) {
      setIsLoading(false)
      message.error('Failed to upload file')
    }
  }

  const handleSelectChange = (value) => {
    setCategories(value)
  }

  return (
    <div>
      <a
        onClick={showModal}
        className="flex items-center  justify-center gap-2 rounded-lg px-4 py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <span className="text-sm font-medium">Publish</span>
      </a>
      <Modal
        title="Publish workflow"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        width={800}
        footer={[
          <div className=" flex   gap-3 items-center justify-end">
            <button
              key="cancel"
              onClick={handleCancel}
              className="py-1 px-5 border rounded-lg"
            >
              Cancel
            </button>
            <button
              key="ok"
              type="primary"
              onClick={handleUpload}
              className=" py-1 px-5 border rounded-lg text-white bg-cyan-800 hover:bg-cyan-900"
            >
              Pushlish
            </button>
          </div>,
        ]}
      >
        {/*   <Dragger {...props} height={250}  beforeUpload={(file) => {
          setFile(file);
          return false; 
        }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger> */}

        <Form layout="vertical" className="mt-5">
          <Form.Item label="Name Workflow" tooltip="This is a required field">
            <Input
              type="text"
              size="large"
              value={inputValue}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Category" tooltip="This is a required field">
            <Select
              defaultValue="All Categories"
              style={{ width: '100%' }}
              size="large"
              onChange={handleSelectChange}
              options={options}
            />
          </Form.Item>
          <Form.Item label="Description" tooltip="This is a required field">
            <Input
              type="text"
              size="large"
              value={description}
              onChange={handleDescriptionChange}
            />
          </Form.Item>

          {isLoading && <p>Loading...</p>}
        </Form>
      </Modal>
    </div>
  )
}
