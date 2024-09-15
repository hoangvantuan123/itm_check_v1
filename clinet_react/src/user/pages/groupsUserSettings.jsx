import { useState, useEffect } from 'react'
import {
  Layout,
  Table,
  Button,
  Tag,
  Row,
  Col,
  Card,
  Select,
  Modal,
  Typography,
} from 'antd'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import './static/css/drawer_cusstom.css'
import { PlusOutlined, SearchOutlined, EyeOutlined } from '@ant-design/icons'
import Search from '../components/search'
import PhoneSettingAction from '../components/phone/usersSettingAction'

const { Content } = Layout
const { Option } = Select
const { Text } = Typography

const groupsData = [
  { key: 'group1', label: 'Nhóm 1' },
  { key: 'group2', label: 'Nhóm 2' },
  { key: 'group3', label: 'Nhóm 3' },
]

const groupUsers = {
  group1: [
    { name: 'Người dùng 1', login: 'login1', language: 'vi', status: 'Active' },
    {
      name: 'Người dùng 2',
      login: 'login2',
      language: 'en',
      status: 'Inactive',
    },
    // ... more users
  ],
  group2: [
    { name: 'Người dùng 3', login: 'login3', language: 'vi', status: 'Active' },
    { name: 'Người dùng 7', login: 'login7', language: 'en', status: 'Active' },
    // ... more users
  ],
  group3: [
    {
      name: 'Người dùng 4',
      login: 'login4',
      language: 'en',
      status: 'Inactive',
    },
    { name: 'Người dùng 9', login: 'login9', language: 'vi', status: 'Active' },
    // ... more users
  ],
}

export default function GroupsUsersSettings() {
  const [selectedGroup, setSelectedGroup] = useState('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [userData, setUserData] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const [selectedGroupDetails, setSelectedGroupDetails] = useState(null)
  const { t } = useTranslation()
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  }
  const [visibleColumns, setVisibleColumns] = useState({
    key: true,
    label: true,
  })

  useEffect(() => {
    if (selectedGroup === 'all') {
      const allUsers = Object.values(groupUsers).flat()
      setUserData(allUsers)
    } else {
      setUserData(groupUsers[selectedGroup])
    }
  }, [selectedGroup])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleViewDetails = (group) => {
    console.log('Clicked group ID:', group.key)
    setSelectedGroupDetails(group)
  }

  const columns = [
    {
      title: 'Tên nhóm',
      dataIndex: 'label',
      key: 'label',
      sorter: (a, b) => a.label.localeCompare(b.label),
      ...(visibleColumns.label ? {} : { render: () => null }),
    },
    {
      title: 'Số người dùng',
      key: 'usersCount',
      render: (_, record) => (
        <span>{(groupUsers[record.key] || []).length}</span>
      ),
      ...(visibleColumns.usersCount ? {} : { render: () => null }),
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Button
          icon={<EyeOutlined />}
          onClick={() => handleViewDetails(record)}
        >
          Xem chi tiết
        </Button>
      ),
    },
  ]

  const renderTable = () => (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={groupsData}
      rowKey="key"
      className="bg-slate-50"
    />
  )

  const renderKanban = () => (
    <Row gutter={16} className="bg-slate-50 pb-60">
      {userData.map((user) => (
        <Col span={24} key={user.login} style={{ marginBottom: 16 }}>
          <Card
            title={user.name}
            extra={<Button onClick={() => setSelectedUser(user)}>Sửa</Button>}
            style={{ width: '100%' }}
          >
            <p>
              <strong>Đăng nhập:</strong> {user.login}
            </p>
            <p>
              <strong>Ngôn ngữ:</strong> {user.language}
            </p>
            <p>
              <strong>Trạng thái:</strong> {user.status}
            </p>
          </Card>
        </Col>
      ))}
    </Row>
  )

  return (
    <div className="w-full h-screen bg-slate-50">
      <Helmet>
        <title>ITM - {t('groups_users.helmet_user_setting')}</title>
      </Helmet>

      <div className="h-full">
        <div className="h-full">
          <div>
            {isMobile && (
              <div className="flex items-center justify-end">
                <PhoneSettingAction />
              </div>
            )}
            <div className="p-2 flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900 sm:text-xl ">
                Nhóm người dùng
              </h1>
              <div></div>

              {!isMobile && (
                <span className="inline-flex overflow-hidden">
                  <div className="flex items-center gap-2">
                    <Button
                      type="primary"
                      icon={<PlusOutlined />}
                      className="w-full rounded-lg h-full border-gray-200 bg-indigo-600 text-white shadow-sm text-sm"
                      size="large"
                    >
                      Thêm
                    </Button>
                  </div>
                </span>
              )}
            </div>
            {!isMobile && (
              <div className="p-2 mb flex items-center justify-between">
                <span className="inline-flex overflow-hidden">
                  <div className="flex items-center gap-2">
                    <Select
                      defaultValue="Tùy chọn"
                      className="w-28"
                      size="large"
                    >
                      <Option value="1">Table</Option>
                      <Option value="2">Grid</Option>
                      <Option value="3">List</Option>
                    </Select>
                  </div>
                </span>
                <button
                  className="border-[1.3px] border-[#d9d9d9] rounded-lg p-[0.6rem] w-52 flex items-center space-x-2 bg-white hover:bg-gray-100"
                  onClick={openModal}
                >
                  <SearchOutlined />
                  <span className="text-gray-500">Tìm kiếm</span>
                </button>
                <Search isOpen={isModalOpen} onClose={closeModal} />
              </div>
            )}
            {isMobile && (
              <div className="p-2">
                <button
                  className="border-[1.3px] border-[#d9d9d9] rounded-lg p-[0.6rem] w-full flex items-center space-x-2 bg-white hover:bg-gray-100"
                  onClick={openModal}
                >
                  <SearchOutlined />
                  <span className="text-gray-500">Tìm kiếm</span>
                </button>
                <Search isOpen={isModalOpen} onClose={closeModal} />
              </div>
            )}
          </div>

          <Layout className="h-screen lg:pb-[70px]">
            <Layout
              style={{
                padding: isMobile ? '0 8px' : '0',
                borderTopWidth: isMobile ? '0' : '1px',
              }}
              className="h-full p-2 overflow-auto scrollable-content"
            >
              <Content className="bg-slate-50">
                {isMobile ? renderKanban() : renderTable()}
              </Content>
            </Layout>
          </Layout>

          {/* Modal for Group Details */}
          {selectedGroupDetails && (
            <Modal
              title={selectedGroupDetails.label}
              visible={!!selectedGroupDetails}
              onCancel={() => setSelectedGroupDetails(null)}
              footer={null}
              width={600}
            >
              <p>
                <strong>Số người dùng:</strong>{' '}
                {(groupUsers[selectedGroupDetails.key] || []).length}
              </p>
              <p>
                <strong>Danh sách người dùng:</strong>
              </p>
              <ul>
                {(groupUsers[selectedGroupDetails.key] || []).map((user) => (
                  <li key={user.login}>
                    {user.name} - {user.login} - {user.language} - {user.status}
                  </li>
                ))}
              </ul>
            </Modal>
          )}
        </div>
      </div>
    </div>
  )
}
