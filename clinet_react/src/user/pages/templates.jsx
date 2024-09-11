import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import moment from 'moment'
import { AudioOutlined } from '@ant-design/icons'
import { Input, Space, Table, Checkbox, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesWorkflow } from '../../features/templates/fetch-categories'
import './css/style.css'
import ViewTemplate from '../components/view-templates/view-workflow'
const { Search } = Input
const { Title, Text } = Typography

const categoriesData = [
  { key: '1', name: 'all', field: 'all' },
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

export default function Templates() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [hoveredRow, setHoveredRow] = useState(null)
  const templateData = useSelector((state) => state.templatesWorkflow.templates)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [checkboxValues, setCheckboxValues] = useState(
    categoriesData.reduce((acc, item) => ({ ...acc, [item.key]: false }), {}),
  )
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(fetchCategoriesWorkflow(selectedCategories))
    }, 500)

    return () => clearTimeout(timeout)
  }, [selectedCategories])
  const onChange = (name) => (event) => {
    const checked = event.target.checked
    setSelectedCategories((prevSelectedCategories) => {
      if (checked) {
        return [...prevSelectedCategories, name]
      } else {
        return prevSelectedCategories.filter((item) => item !== name) // Loại bỏ key khỏi mảng nếu không được chọn
      }
    })
  }
  const getCategoryName = (key) => {
    const category = categoriesData.find((item) => item.key === key)
    return category ? category.name : ''
  }
  const onSearch = (value, _e, info) => console.log(info?.source, value)
  const columns = [
    {
      title: 'workflow',
      dataIndex: 'name_workflow',
      key: 'name_workflow',
      render: (_, record) => (
        <Space size="middle">
          <div className="flex flex-col">
            <a className=" text-xl"> {record.name_workflow}</a>
            <a className=" italic opacity-75">
              {record.user_name} - {moment(record.creation_time).format('LLL')}{' '}
            </a>
          </div>
        </Space>
      ),
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <ViewTemplate record={record} />
        </Space>
      ),
      align: 'right',
    },
  ]

  const handleTableRowClick = (record) => {}
  const selectedCategoryNames = selectedCategories
    .map(getCategoryName)
    .join(', ') // Gom tất cả các tên danh mục đã chọn thành một chuỗi ngắn cách bằng dấu ,

  return (
    <div className=" w-full  bg-white  ">
      <Helmet>
        <title>Workflow Templates </title>
      </Helmet>
      <div className="p-3">
        <div className="flex gap-3 overflow-hidden  h-screen">
          <div className="border rounded-lg p-2 h-[96%] overflow-auto scrollable-content  overflow-y-auto scroll-container">
            <ul className="space-y-1 ">
              {categoriesData.map((item, index) => (
                <li key={index}>
                  <a
                    className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                      checkboxValues[item.name]
                        ? 'bg-gray-100 text-gray-700'
                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    }`}
                  >
                    <Checkbox
                      onChange={onChange(item.name)}
                      checked={selectedCategories.includes(item.name)}
                    >
                      {' '}
                      {` ${getCategoryName(item.key)}`}
                    </Checkbox>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-full">
            <div className="border h-[96%] rounded-lg w-full p-3">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{
                  width: '100%',
                }}
                size="large"
              />
              <div className=" h-full pt-3   overflow-auto scrollable-content  overflow-y-auto scroll-container ">
                <Table
                  columns={columns}
                  dataSource={templateData}
                  showHeader={false}
                  pagination={false}
                  onRow={(record) => ({
                    onClick: () => handleTableRowClick(record),
                    onMouseEnter: () => setHoveredRow(record.key),
                    onMouseLeave: () => setHoveredRow(null),
                    className:
                      hoveredRow === record.key ? 'cursor-pointer' : '',
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
