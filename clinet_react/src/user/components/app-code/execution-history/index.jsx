import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import moment from 'moment'
import { AudioOutlined } from '@ant-design/icons'
import { Input, Space, Table, Typography, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
const { Search } = Input
import 'reactflow/dist/style.css'
import { deleteCoreCode } from '../../../../features/core-code/delete-core'
import { useParams } from 'react-router-dom'
import { fetchFunCoreAsync } from '../../../../features/app-code-runner/fetch-run-fun'
import Show from './show'
const { Title, Text } = Typography
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

export default function ExecutionHistory() {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const dispatch = useDispatch()
  const userId = userFromLocalStorage.id
  const page = 1
  const pageSize = 10
  const { id } = useParams()
  const { t } = useTranslation()
  const [hoveredRow, setHoveredRow] = useState(null)
  const [showMoreIndex, setShowMoreIndex] = useState(null)
  const [showMoreIndexSyn, setShowMoreIndexSyn] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const projectData = useSelector((state) => state.funCore?.funCore)
  const filteredData =
    projectData && Array.isArray(projectData)
      ? projectData.filter((item) =>
          item.app_code_id.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : []

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    dispatch(fetchFunCoreAsync(id))
  }, [dispatch])

  const columns = [
    {
      title: 'Run Time',
      dataIndex: 'runTime',
      key: 'runTime',
      render: (_, record) => (
        <Space size="middle">
          <a> {moment(record.runTime).format('LLL')}</a>
        </Space>
      ),
    },

    {
      key: 'option',
      width: 200,
      render: (_, record, index) => (
        <Space size="middle">
          <Show details={record.details} />
        </Space>
      ),
    },
  ]

  const onSearch = (value, _e, info) => console.log(info?.source, value)

  const handleTableRowClick = (record) => {
    const newPath = `/u/appcode/${record.id}`

    window.location.href = newPath
  }
  const handleTableRowClickSyn = (record) => {
    const newPath = `/u/appcode/${record.id}`

    window.location.href = newPath
  }

  const handleOnClickShowMore = (index) => {
    setShowMoreIndex(index === showMoreIndex ? null : index)
  }
  const handleOnClickShowMoreSyn = (index) => {
    setShowMoreIndexSyn(index === showMoreIndexSyn ? null : index)
  }
  const handleActionClick = (action, record) => {
    switch (action) {
      case 'open':
        handleTableRowClickSyn(record)
        break
      case 'share':
        // Thực hiện hành động chia sẻ
        break
      case 'delete':
        handleDelete(record)
        break
      default:
        // Xử lý trường hợp mặc định (nếu cần)
        break
    }
  }

  return (
    <div className=" w-full h-screen  bg-white ">
      <Helmet>
        <title> Execution History</title>
      </Helmet>
      <div>
        <div className="p-3  h-screen overflow-hidden">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-xl font-semibold mb-2">Lịch sử thực thi</h2>
            <div className="flex items-center justify-between gap-2">
              <Search
                placeholder="input search text"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{
                  width: 400,
                }}
                size="large"
              />
            </div>
          </div>
          <div className="  h-full  pb-20 flex  flex-col flex-1 overflow-auto scrollable-content scroll-container">
            <Table
              columns={columns}
              dataSource={filteredData}
              bordered
              onRow={(record) => ({
                onClick: (event) => {
                  handleActionClick(record)
                  setHoveredRow(record.key)
                },
                onMouseEnter: () => setHoveredRow(record.key),
                onMouseLeave: () => setHoveredRow(null),
                className: hoveredRow === record.key ? 'cursor-pointer' : '',
              })}
              pagination={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
