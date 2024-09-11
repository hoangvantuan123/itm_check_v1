import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import moment from 'moment'
import { AudioOutlined } from '@ant-design/icons'
import { fetchWorkflows } from '../../features/workflow/fetch-workflows'
import { Input, Space, Table, Typography, message, Tabs } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
const { Search } = Input
import 'reactflow/dist/style.css'
import '../components/workflows/style.css'
import NewWorkFlow from '../components/sildebar-frame/new-workflow'
import decodeJWT from '../../utils/decode-JWT'
import { fetchSynWorkflowUser } from '../../features/syn/fetch-syn'
import { setSynWorkflow } from '../../features/syn/slice/synSlice'
import { deleteSynWorkflowUser } from '../../features/syn/delete-syn'
import { fetchWorkflowUserDeploy } from '../../features/deploy-workflow/fetch-user-workflow-deploy'
import { deleteWorkflow } from '../../features/workflow/delete-workflow'
const { Title, Text } = Typography
const { TabPane } = Tabs;
import 'moment/locale/vi'
const MoreSettings = () => {
  return (
    <svg
      className="w-5 h-5 opacity-80"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 9.32C13.1901 9.32 14.1601 8.35 14.1601 7.16C14.1601 5.97 13.1901 5 12.0001 5C10.8101 5 9.84009 5.97 9.84009 7.16C9.84009 8.35 10.8101 9.32 12.0001 9.32Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.78988 18.9999C7.97988 18.9999 8.94988 18.0299 8.94988 16.8399C8.94988 15.6499 7.97988 14.6799 6.78988 14.6799C5.59988 14.6799 4.62988 15.6499 4.62988 16.8399C4.62988 18.0299 5.58988 18.9999 6.78988 18.9999Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.21 18.9999C18.4 18.9999 19.37 18.0299 19.37 16.8399C19.37 15.6499 18.4 14.6799 17.21 14.6799C16.02 14.6799 15.05 15.6499 15.05 16.8399C15.05 18.0299 16.02 18.9999 17.21 18.9999Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default function Home() {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const dispatch = useDispatch()
  const userId = userFromLocalStorage.id
  const page = 1
  const pageSize = 100

  const [workflows, setWorkflows] = useState(null)

  const { t } = useTranslation()
  const [hoveredRow, setHoveredRow] = useState(null)
  const [showMoreIndex, setShowMoreIndex] = useState(null)
  const [showMoreIndexSyn, setShowMoreIndexSyn] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchTermShare, setSearchTermShare] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const workflowId = localStorage.getItem('workflowId')
  const synWorkflows = useSelector((state) => state.synWorkflow.userData)
  const dataAutomationlog = useSelector((state) => state.deployWorkflow.userData)
  const workflowLength = workflows?.length;
  const workflowShareLength = synWorkflows?.length;
  const workflowDeployLength = dataAutomationlog?.length

  const filteredData = workflows
    ? workflows.filter(
        (item) =>
          item.name_edges.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.created_at.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : []

    const filteredDataShare = synWorkflows
    ? synWorkflows.filter(
        (item) =>
          item.name_workflow.toLowerCase().includes(searchTermShare.toLowerCase()) ||
          item.categories.toLowerCase().includes(searchTermShare.toLowerCase()),
      )
    : []

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleSearchShareChange = (e) => {
    setSearchTermShare(e.target.value)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWorkflows(userId, page, pageSize)
        setWorkflows(data)
      } catch (error) {
        console.error('Error fetching workflows:', error)
      }
    }
    dispatch(fetchSynWorkflowUser(userId))
    dispatch(fetchWorkflowUserDeploy(userId))
    fetchData()
  }, [userId, page, pageSize])

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get('token')
    const user = queryParams.get('user')
    const decoded = decodeJWT(token)

    if (token && decoded) {
      localStorage.setItem('token', token)
      localStorage.setItem('userInfo', JSON.stringify(decoded))
      if (workflowId) {
        window.location.href = `/u/workflow/${workflowId}`
      } else {
        window.location.href = `/u/workflows`
      }
    }
  }, [location])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name_edges',
      key: 'name_edges',
      render: (_, record) => (
        <Space size="middle">
          <a> {record.name_edges}</a>
        </Space>
      ),
      sorter: (a, b) => a.name_edges.localeCompare(b.name_edges),
    },

    {
      title: 'Created At',
      key: 'created_at',
      render: (_, record) => (
        <Space size="middle">
          <a> {moment(record.created_at).format('LLL')}</a>
        </Space>
      ),
      sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),
    },
    {
      title: 'Last Deployed',
      key: 'updated_at',
      render: (_, record) => (
        <Space size="middle">
          <a>{moment(record.updated_at).format('LLL')}</a>
        </Space>
      ),
    },
    {
      title: 'Public',
      key: 'isPublic',
      render: (_, record) => (
        <Space size="middle">
          <a>{record.isPublic ? <span>Public</span> : <span>Private</span>}</a>
        </Space>
      ),
    },
    {
      key: 'option',
      width: 200,
      render: (_, record, index) => (
        <Space size="middle">
          <button
            onClick={() => handleOnClickShowMore(index)}
            className="hover:text-green-950"
          >
            More
          </button>
          {showMoreIndex === index && (
            <div className="border rounded-md absolute z-50 p-1 bg-slate-50">
              <ul className="space-y-1">
                <li>
                  <a
                  onClick={() => handleActionClickWorkflow('open', record)}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Open
                  </a>
                </li>

                <li>
                  <a  onClick={() => handleActionClickWorkflow('share', record)} className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Share
                  </a>
                </li>

                <li>
                  <a  onClick={() => handleActionClickWorkflow('delete', record)} className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          )}
        </Space>
      ),
    },
  ]
  const columnsSyn = [
    {
      title: 'Name',
      dataIndex: 'name_workflow',
      key: 'name_workflow',
      render: (_, record) => (
        <Space size="middle">
          <a> {record.name_workflow}</a>
        </Space>
      ),
      sorter: (a, b) => a.name_workflow.localeCompare(b.name_workflow),
    },

    {
      title: 'Categories',
      key: 'categories',
      render: (_, record) => (
        <Space size="middle">
          <a> {record.categories}</a>
        </Space>
      ),
      sorter: (a, b) => a.categories.localeCompare(b.categories),
    },
    {
      title: 'Owner',
      key: 'user_name',
      render: (_, record) => (
        <Space size="middle">
          <a> {record.user_name}</a>
        </Space>
      ),
    },
    {
      key: 'option',
      width: 200,
      render: (_, record, index) => (
        <Space size="middle">
          <button
            onClick={() => handleOnClickShowMoreSyn(index)}
            className="hover:text-green-950"
          >
            More
          </button>
          {showMoreIndexSyn === index && (
            <div className="border rounded-md absolute z-50 p-1 bg-slate-50">
              <ul className="space-y-1">
                <li>
                  <a
                    onClick={() => handleActionClickSyn('open', record)}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Open
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => handleActionClickSyn('delete', record)}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          )}
        </Space>
      ),
    },
  ]
  const onSearch = (value, _e, info) => console.log(info?.source, value)

  const handleTableRowClick = (record) => {
    const newPath = `/u/workflow/${record.id}`

    window.location.href = newPath
  }
  const handleTableRowClickSyn = (record) => {
    const newPath = `/u/workflow/syn/${record.id}`

    window.location.href = newPath
  }

  const handleOnClickShowMore = (index) => {
    setShowMoreIndex(index === showMoreIndex ? null : index)
  }
  const handleOnClickShowMoreSyn = (index) => {
    setShowMoreIndexSyn(index === showMoreIndexSyn ? null : index)
  }
  const handleActionClickSyn = (action, record) => {
    switch (action) {
      case 'open':
        handleTableRowClickSyn(record)
        break
      case 'share':
        message.success(`The system has no sharing action yet`);
        break
      case 'delete':
        handleDelete(record)
        break
      default:
        // Xử lý trường hợp mặc định (nếu cần)
        break
    }
  }
  const handleActionClickWorkflow = (action, record) => {
    switch (action) {
      case 'open':
        handleTableRowClick(record)
        break
      case 'share':
        message.success(`The system has no sharing action yet`);
        break
      case 'delete':
        message.success(`The system has no delete action yet`);
        break
      default:
        // Xử lý trường hợp mặc định (nếu cần)
        break
    }
  }
  const handleDelete = async (record) => {
    setIsLoading(true)

    try {
      setIsLoading(false)
      await dispatch(deleteSynWorkflowUser(record.id))

      setShowMoreIndexSyn(!showMoreIndexSyn)
      message.success('Delete successful')
    } catch (error) {
      setIsLoading(false)
      message.error('Failed to Delete file')
    }
  }
  return (
    <div className="w-full h-screen bg-white">
    <Helmet>
      <title>Workflow</title>
    </Helmet>
    <div>
      <div className="p-3 h-screen overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl font-semibold mb-2">Workflows</h2>
          <div className="flex items-center justify-between gap-2">
            <NewWorkFlow />
          </div>
        </div>
  
        <div className="border w-full h-auto rounded-lg p-2 mb-4">
          <h2 className="text-lg font-medium mb-2">Current usage period</h2>
          <div className="flex gap-2">
            <div className="flex-1 h-24 bg-slate-50 border rounded-lg p-2 flex flex-col justify-center">
              <p className="text-base font-semibold">Bandwidth used</p>
              <p className="text-sm text-gray-600">0 B / 1 GB</p>
            </div>
            <div className="flex-1 h-24 bg-slate-50 border rounded-lg p-2 flex flex-col justify-center">
              <p className="text-base font-semibold">Total workflow</p>
              <p className="text-sm text-gray-600">{workflowLength}</p>
            </div>
            <div className="flex-1 h-24 bg-slate-50 border rounded-lg p-2 flex flex-col justify-center">
              <p className="text-base font-semibold">Active workflows</p>
              <p className="text-sm text-gray-600">{workflowDeployLength}</p>
            </div>
            <div className="flex-1 h-24 bg-slate-50 border rounded-lg p-2 flex flex-col justify-center">
              <p className="text-base font-semibold">Total share workflow</p>
              <p className="text-sm text-gray-600">{workflowShareLength}</p>
            </div>
          </div>
        </div>
  
        <div className="flex-1 overflow-auto">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Individual Workflow" key="1">
              <div>
                <div className="mb-2">
                  <Search
                    placeholder="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ width: 400 }}
                    size="large"
                  />
                </div>
                <Table
                  columns={columns}
                  dataSource={filteredData}
                  bordered
                  onRow={(record) => ({
                   
                    onClick: (event) => {
                      handleActionClickWorkflow(record);
                      setHoveredRow(record.key);
                    },
                    onMouseEnter: () => setHoveredRow(record.key),
                    onMouseLeave: () => setHoveredRow(null),
                    className: hoveredRow === record.key ? 'cursor-pointer' : '',
                  })}
                  
                />
              </div>
            </TabPane>
            <TabPane tab="Share Workflow" key="2">
              <div>
                <div className="mb-2">
                  <Search
                    placeholder="search"
                    value={searchTermShare}
                    onChange={handleSearchShareChange}
                    style={{ width: 400 }}
                    size="large"
                  />
                </div>
                <Table
                  columns={columnsSyn}
                  dataSource={filteredDataShare}
                  bordered
                  onRow={(record) => ({
                    onClick: (event) => {
                      handleActionClickSyn(record);
                      setHoveredRowSyn(record.key);
                    },
                    onMouseEnter: () => setHoveredRowSyn(record.key),
                    onMouseLeave: () => setHoveredRowSyn(null),
                    className: hoveredRow === record.key ? 'cursor-pointer' : '',
                  })}
                />
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
  
  )
}
