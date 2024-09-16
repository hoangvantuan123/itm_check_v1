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
  Typography,
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
import AddUser from '../components/add/addUser'
import UserProfile from '../components/profile'
import ImportAction from '../components/action/importAction'
const { Option } = Select
const { Title } = Typography
export default function UsersSettings() {
  const [selectedGroup, setSelectedGroup] = useState('all') // Mặc định chọn nhóm "Tất cả"
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [userData, setUserData] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenAddUser, setIsModalOpenAddUser] = useState(false)
  const [phoneSettingUser, setPhoneSettingUser] = useState(null)
  const [showSttingActionDropdown, setShowSettingActionDropdown] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const openModalAddUser = () => {
    setIsModalOpenAddUser(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const closeModalAddUser = () => {
    setIsModalOpenAddUser(false)
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
   
    setSelectedRowKeys(newSelectedRowKeys)
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
              color = 'success'
              break
            case 'Inactive':
              color = 'processing'
              break
            default:
              color = 'error'
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
    ]

    return (
      <>
        <Table
          rowSelection={rowSelection}
          bordered
          columns={columns}
          dataSource={userData}
          rowKey="login"
          className="bg-slate-50 cursor-pointer pb-0 md:pb-40"
          onRow={(record) => ({
            onClick: () => {
              showUserForm(record)
            },
          })}
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

  const handleMenuShowActionClick = (e) => {
    setPhoneSettingUser(e.key)
    if (e.key === 'action_setting_1') {
      setShowSettingActionDropdown(false)
      setIsModalOpenAddUser(true)
    }
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
              <div className=" flex items-center justify-end">
                <PhoneSettingAction
                  handleMenuShowActionClick={handleMenuShowActionClick}
                  showSttingActionDropdown={showSttingActionDropdown}
                  setShowSettingActionDropdown={setShowSettingActionDropdown}
                />
              </div>
            )}
            {isMobile && phoneSettingUser === 'action_setting_1' && (
              <AddUser
                isOpen={isModalOpenAddUser}
                onClose={closeModalAddUser}
              />
            )}
            <div className="p-2 flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900 sm:text-xl ">
                Người dùng
              </h1>

              {!isMobile && (
                <span class="inline-flex overflow-hidden  ">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={openModalAddUser}
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
              <AddUser
                isOpen={isModalOpenAddUser}
                onClose={closeModalAddUser}
              />
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
                    <ImportAction/>
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
             title={
              <Title level={4} style={{ textAlign: 'center' }}>
                {t('Thông tin người dùng')}
              </Title>
            }
              open={isModalVisible}
              onClose={handleCancel}
              width={900}
              closable={false} 
              footer={[
                <Button key="cancel" onClick={handleCancel}>
                  {t('Thoát')}
                </Button>
               
              ]}
            >
              <UserProfile user={selectedUser} />
            </Drawer>
          </Layout>
        </div>
      </div>
    </div>
  )
}
