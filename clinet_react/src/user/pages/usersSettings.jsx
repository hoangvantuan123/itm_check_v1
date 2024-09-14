import { useState, useEffect } from 'react'
import {
  Layout,
  Menu,
  Table,
  Button,
  Form,
  Input,
  Drawer,
  Card,
  Row,
  Col,
  Tag,
  Space,
  Dropdown,
  Select,
  Menu as AntdMenu,
} from 'antd'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import 'moment/locale/vi'
import './static/css/drawer_cusstom.css'
const { Sider, Content } = Layout
import { PlusOutlined } from '@ant-design/icons'
import { SearchOutlined } from '@ant-design/icons'
import Search from '../components/search'
import ShowAction from '../components/action/showAction'
import FieldAction from '../components/action/fieldsAction'
import PhoneSettingAction from '../components/phone/usersSettingAction'
const { Option } = Select

export default function UsersSettings() {
  const [selectedGroup, setSelectedGroup] = useState('all') // Mặc định chọn nhóm "Tất cả"
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [userData, setUserData] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  console.log(isModalOpen)
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const [visibleColumns, setVisibleColumns] = useState({
    name: true,
    login: true,
    language: true,
    status: true,
    action: true,
  })
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const { t } = useTranslation()
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys) // Update selected row keys
  }
  // Danh sách nhóm bao gồm "Tất cả"
  const groups = [
    { key: 'all', label: 'Tất cả' },
    { key: 'group1', label: 'Nhóm 1' },
    { key: 'group2', label: 'Nhóm 2' },
    { key: 'group3', label: 'Nhóm 3' },
  ]

  const groupUsers = {
    group1: [
      {
        name: 'Người dùng 1',
        login: 'login1',
        language: 'vi',
        status: 'Active',
      },
      {
        name: 'Người dùng 2',
        login: 'login2',
        language: 'en',
        status: 'Inactive',
      },
      {
        name: 'Người dùng 5',
        login: 'login5',
        language: 'vi',
        status: 'Active',
      },
      {
        name: 'Người dùng 6',
        login: 'login6',
        language: 'en',
        status: 'Inactive',
      },
      {
        name: 'Người dùng 16',
        login: 'login16',
        language: 'vi',
        status: 'Active',
      },
      {
        name: 'Người dùng 17',
        login: 'login17',
        language: 'en',
        status: 'Active',
      },
      {
        name: 'Người dùng 18',
        login: 'login18',
        language: 'vi',
        status: 'Inactive',
      },
    ],
    group2: [
      {
        name: 'Người dùng 3',
        login: 'login3',
        language: 'vi',
        status: 'Active',
      },
      {
        name: 'Người dùng 7',
        login: 'login7',
        language: 'en',
        status: 'Active',
      },
      {
        name: 'Người dùng 8',
        login: 'login8',
        language: 'vi',
        status: 'Inactive',
      },
      {
        name: 'Người dùng 19',
        login: 'login19',
        language: 'en',
        status: 'Active',
      },
      {
        name: 'Người dùng 20',
        login: 'login20',
        language: 'vi',
        status: 'Active',
      },
      {
        name: 'Người dùng 21',
        login: 'login21',
        language: 'en',
        status: 'Inactive',
      },
    ],
    group3: [
      {
        name: 'Người dùng 4',
        login: 'login4',
        language: 'en',
        status: 'Inactive',
      },
      {
        name: 'Người dùng 9',
        login: 'login9',
        language: 'vi',
        status: 'Active',
      },
      {
        name: 'Người dùng 10',
        login: 'login10',
        language: 'en',
        status: 'Active',
      },
      {
        name: 'Người dùng 22',
        login: 'login22',
        language: 'vi',
        status: 'Active',
      },
      {
        name: 'Người dùng 23',
        login: 'login23',
        language: 'en',
        status: 'Inactive',
      },
    ],
    group4: [
      {
        name: 'Người dùng 11',
        login: 'login11',
        language: 'vi',
        status: 'Inactive',
      },
      {
        name: 'Người dùng 12',
        login: 'login12',
        language: 'en',
        status: 'Active',
      },
      {
        name: 'Người dùng 24',
        login: 'login24',
        language: 'vi',
        status: 'Inactive',
      },
      {
        name: 'Người dùng 25',
        login: 'login25',
        language: 'en',
        status: 'Active',
      },
      {
        name: 'Người dùng 26',
        login: 'login26',
        language: 'vi',
        status: 'Active',
      },
    ],
    group5: [
      {
        name: 'Người dùng 13',
        login: 'login13',
        language: 'vi',
        status: 'Active',
      },
      {
        name: 'Người dùng 14',
        login: 'login14',
        language: 'en',
        status: 'Inactive',
      },
      {
        name: 'Người dùng 15',
        login: 'login15',
        language: 'vi',
        status: 'Active',
      },
      {
        name: 'Người dùng 27',
        login: 'login27',
        language: 'en',
        status: 'Inactive',
      },
      {
        name: 'Người dùng 28',
        login: 'login28',
        language: 'vi',
        status: 'Active',
      },
      {
        name: 'Người dùng 29',
        login: 'login29',
        language: 'en',
        status: 'Active',
      },
    ],
  }

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

  const showUserForm = (user) => {
    setSelectedUser(user)
    setIsModalVisible(true)
  }

  // Đóng Modal Form
  const handleCancel = () => {
    setIsModalVisible(false)
    setSelectedUser(null)
  }

  const handleSave = () => {
    setIsModalVisible(false)
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

  const renderTable = () => {
    const columns = [
      {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        ...(visibleColumns.name ? {} : { render: () => null }),
      },
      {
        title: 'Đăng nhập',
        dataIndex: 'login',
        key: 'login',
        sorter: (a, b) => a.login.localeCompare(b.login),
        ...(visibleColumns.login ? {} : { render: () => null }),
      },
      {
        title: 'Ngôn ngữ',
        dataIndex: 'language',
        key: 'language',
        sorter: (a, b) => a.language.localeCompare(b.language),
        ...(visibleColumns.language ? {} : { render: () => null }),
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (status) => {
          let color
          switch (status) {
            case 'Active':
              color = '#87d068'
              break
            case 'Inactive':
              color = '#f50'
              break
            default:
              color = 'purple'
          }

          return (
            <Tag
              color={color}
              key={status}
              className="  p-1 font-bold rounded-lg px-6"
            >
              {status}
            </Tag>
          )
        },
        ...(visibleColumns.status ? {} : { render: () => null }),
      },
      {
        title: 'Hành động',
        key: 'action',
        render: (text, record) => (
          <Button onClick={() => showUserForm(record)}>
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Sửa
          </Button>
        ),
        ...(visibleColumns.action ? {} : { render: () => null }),
      },
    ]

    return (
      <>
        <Table
          rowSelection={rowSelection} // Add rowSelection for selecting rows
          columns={columns}
          dataSource={userData}
          rowKey="login" // Use login as the unique row key
          className="bg-slate-50"
        />
      </>
    )
  }

  const renderKanban = () => {
    return (
      <Row gutter={16} className="bg-slate-50 pb-60">
        {userData.map((user) => (
          <Col span={24} key={user.login} style={{ marginBottom: 16 }}>
            <Card
              title={user.name}
              extra={<Button onClick={() => showUserForm(user)}>Sửa</Button>}
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
  }

  return (
    <div className="w-full h-screen bg-slate-50">
      <Helmet>
        <title>ITM - {t('users_setting.helmet_user_setting')}</title>
      </Helmet>

      <div className="h-full">
        <div className="h-full">
          <div>
            {isMobile && (
              <div className=' flex items-center justify-end'>
                <PhoneSettingAction />
              </div>
            )}
            <div className="p-2 flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900 sm:text-xl ">
                Người dùng
              </h1>
              <div></div>

              {!isMobile && (
                <span class="inline-flex overflow-hidden  ">
                  <div className="flex items-center gap-2">
                    <Button
                      type="primary"
                      icon={<PlusOutlined />}
                      className="w-full rounded-lg h-full border-gray-200  bg-indigo-600 text-white  shadow-sm text-sm"
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
                <span class="inline-flex overflow-hidden  ">
                  <div className="flex items-center gap-2">
                    <Select
                      defaultValue="Tùy chọn"
                      className=" w-28"
                      size="large"
                    >
                      <Option value="1">Table</Option>
                      <Option value="2">Grid</Option>
                      <Option value="3">List</Option>
                    </Select>
                    <ShowAction />
                    <FieldAction />
                  </div>
                </span>
                <button
                  className=" border-[1.3px] border-[#d9d9d9]  rounded-lg p-[0.6rem]  w-52 flex items-center space-x-2 bg-white hover:bg-gray-100"
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
                {' '}
                <button
                  className=" border-[1.3px] border-[#d9d9d9]  rounded-lg p-[0.6rem]  w-full flex items-center space-x-2 bg-white hover:bg-gray-100"
                  onClick={openModal}
                >
                  <SearchOutlined />
                  <span className="text-gray-500">Tìm kiếm</span>
                </button>
                <Search isOpen={isModalOpen} onClose={closeModal} />
              </div>
            )}
          </div>

          <Layout className="h-screen lg:pb-[70px] ">
            {!isMobile && (
              <Sider width={200} className="bg-slate-50 border-r border-t">
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['all']}
                  style={{ height: '100%', borderRight: 0 }}
                  onClick={(e) => setSelectedGroup(e.key)}
                >
                  {groups.map((group) => (
                    <Menu.Item key={group.key}>{group.label}</Menu.Item>
                  ))}
                </Menu>
              </Sider>
            )}

            <Layout
              style={{
                padding: isMobile ? '0 8px' : '0',
                borderTopWidth: isMobile ? '0' : '1px',
              }}
              className="h-full p-2 overflow-auto    scrollable-content"
            >
              <Content className="bg-slate-50">
                {isMobile ? renderKanban() : renderTable()}
              </Content>
            </Layout>

            <Drawer
              title="Chỉnh sửa thông tin người dùng"
              open={isModalVisible}
              onClose={handleCancel}
              width={600}
            >
              <Form layout="vertical">
                <Form.Item label="Tên">
                  <Input defaultValue={selectedUser?.name} />
                </Form.Item>
                <Form.Item label="Đăng nhập">
                  <Input defaultValue={selectedUser?.login} />
                </Form.Item>
                <Form.Item label="Ngôn ngữ">
                  <Input defaultValue={selectedUser?.language} />
                </Form.Item>
                <Form.Item label="Trạng thái">
                  <Input defaultValue={selectedUser?.status} />
                </Form.Item>
              </Form>
            </Drawer>
          </Layout>
        </div>
      </div>
    </div>
  )
}
