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
import { GetAllResUsers } from '../../features/resUsers/getResUsers'
import { GetAllResGroups } from '../../features/resGroups/getAllResGroups'
import { registerUser } from '../../features/auth/API/registerAPI'
const { Option } = Select
const { Title } = Typography
export default function UsersSettings() {
  const [selectedGroup, setSelectedGroup] = useState('all')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenAddUser, setIsModalOpenAddUser] = useState(false)
  const [phoneSettingUser, setPhoneSettingUser] = useState(null)
  const [showSttingActionDropdown, setShowSettingActionDropdown] =
    useState(false)
  /* GET */
  const [userData, setUserData] = useState([])
  const [groupsData, setGroupsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [total, setTotal] = useState(0)
  const [actionUsers, setActionUsers] = useState(null)
  const handleOnClickAction = () =>{
    setActionUsers("actionUsers");
  }
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
    active: true,
    action: true,
  })
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const { t } = useTranslation()
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const fetchData = async () => {
    setLoading(true)
    const token = localStorage.getItem('token_1h')

    try {
      // Gọi các API đồng thời
      const [response, responseAllResGroups] = await Promise.all([
        GetAllResUsers(page, limit, token),
        GetAllResGroups(token),
      ])

      if (response.success) {
        setUserData(response.data.data)
        setGroupsData(responseAllResGroups.data.data)
        setTotal(response.data.total)
        setTotalPages(response.data.totalPages)
        setError(null)
      } else {
        setError(response.message)
        setUserData([])
        setGroupsData([])
      }
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi')
      setUserData([])
      setGroupsData([])
    } finally {
      setLoading(false)
    }
  }

  const handleTableChange = (pagination) => {
    setPage(pagination.current)
    setLimit(pagination.pageSize)
  }
  useEffect(() => {
    fetchData()
  }, [page, limit])

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
  const generateRandomString = (length) => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }
  const handleAddRow = async () => {
    const login = `User_${generateRandomString(6)}`
    const password = `123456789`
    const language = `vi`

    const token = localStorage.getItem('token_1h')
    if (!token) {
      message.error(
        'Phiên làm việc đã hết hạn. Vui lòng đăng nhập lại để tiếp tục.',
      )
      return
    }
    const result = await registerUser({
      login: login,
      password: password,
      nameUser: login,
      language: language,
      token,
    })
    fetchData()
  }
  const renderTable = () => {
    const columns = [
      {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => {
          const nameA = a.name || ''
          const nameB = b.name || ''
          return nameA.localeCompare(nameB)
        },
        ...(visibleColumns.name ? {} : { render: () => null }),
      },
      {
        title: 'Đăng nhập',
        dataIndex: 'login',
        key: 'login',
        sorter: (a, b) => {
          const loginA = a.login || ''
          const loginB = b.login || ''
          return loginA.localeCompare(loginB)
        },
        ...(visibleColumns.login ? {} : { render: () => null }),
      },
      {
        title: 'Ngôn ngữ',
        dataIndex: 'language',
        key: 'language',
        sorter: (a, b) => {
          const languageA = a.language || ''
          const languageB = b.language || ''

          return languageA.localeCompare(languageB)
        },
        ...(visibleColumns.language ? {} : { render: () => null }),
      },
      {
        title: 'Trạng thái',
        dataIndex: 'active',
        key: 'active',
        sorter: (a, b) => {
          if (a.active === b.active) {
            return 0
          }
          return a.active ? -1 : 1
        },
        render: (active) => {
          let color
          let displayText

          if (active === true) {
            color = 'success'
            displayText = 'Đã kết nối'
          } else if (active === false) {
            color = 'error'
            displayText = 'Chưa kết nối'
          } else {
            color = 'default'
            displayText = 'Chưa xác định'
          }

          return (
            <Tag
              color={color}
              key={active}
              className="p-1 font-bold rounded-lg px-6"
            >
              {displayText} {/* Hiển thị văn bản thay vì {active} */}
            </Tag>
          )
        },
        ...(visibleColumns.active ? {} : { render: () => null }),
      },
    ]

    return (
      <>
        <Table
          rowSelection={rowSelection}
          bordered
          columns={columns}
          dataSource={userData}
          rowKey="id"
          className="bg-slate-50 cursor-pointer pb-0 md:pb-40"
          onRow={(record) => ({
            onClick: () => {
              showUserForm(record)
            },
          })}
          loading={loading}
          footer={() => (
            <span
              onClick={handleAddRow}
              type="primary"
              className="mt-2 max-w-md cursor-pointer text-pretty text-base text-indigo-500"
              size="large"
            >
              Thêm hàng mới
            </span>
          )}
          pagination={{
            current: page,
            pageSize: limit,
            total: total,
            showSizeChanger: true,
            showTotal: (total) => `Tổng ${total} mục`,
            onChange: (page, pageSize) =>
              handleTableChange({ current: page, pageSize }),
          }}
          onChange={(pagination) => handleTableChange(pagination)}
          loading={loading}
          scroll={{
            x: 'calc(100px + 50%)',
            y: 650,
          }}
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

  const handleShowActionClick = () => {
    setActionUsers(true)
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
                fetchData={fetchData}
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
                    <ImportAction />
                    {selectedRowKeys != null && selectedRowKeys.length > 0 && (
                      <>
                        <ShowAction
                          handleOnClickAction={handleOnClickAction}
                          actionUsers={actionUsers}
                          setActionUsers={setActionUsers}
                          setSelectedRowKeys={setSelectedRowKeys}
                          selectedRowKeys={selectedRowKeys}
                          fetchDataUser={fetchData}
                        />
                      </>
                    )}

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
                  onClick={(e) => setSelectedGroup(e.id)}
                >
                  <Menu.Item key="all">All</Menu.Item>
                  {groupsData.map((group) => (
                    <Menu.Item key={group.id}>{group.name}</Menu.Item>
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
                </Button>,
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
