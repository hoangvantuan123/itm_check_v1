import { useState, useEffect, useCallback } from 'react'
import { useQuery } from 'react-query'
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
  Drawer,
  Pagination,
} from 'antd'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import './static/css/drawer_cusstom.css'
import { PlusOutlined, SearchOutlined, EyeOutlined } from '@ant-design/icons'
import Search from '../components/search'
import PhoneSettingAction from '../components/phone/usersSettingAction'
import AddUserGroups from '../components/add/addUserGroups'
import { GetAllResGroups } from '../../features/resGroups/getResGroups'
import UserGroupsDrawer from '../components/userGroups/userGroups'
import PhoneUserGroupsAction from '../components/phone/usersGroupsAction'
import ImportAction from '../components/action/importAction'
import ShowAction from '../components/action/showAction'
const { Content } = Layout
const { Option } = Select
const { Text } = Typography
const { Title } = Typography

export default function GroupsUsersSettings() {
  const [selectedGroup, setSelectedGroup] = useState('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [userData, setUserData] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const [selectedGroupDetails, setSelectedGroupDetails] = useState(null)
  const [isModalOpenAddUserGroups, setIsModalOpenAddUserGroups] =
    useState(false)
  const { t } = useTranslation()
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  /* GET */
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [total, setTotal] = useState(0)
  const [phoneSettingUser, setPhoneSettingUser] = useState(null)
  const [showSttingActionDropdown, setShowSettingActionDropdown] =
    useState(false)

  const fetchData = async () => {
    setLoading(true)
    const token = localStorage.getItem('token_1h')
    const response = await GetAllResGroups(page, limit, token)
    if (response.success) {
      setData(response.data.data)
      setTotal(response.data.total)
      setTotalPages(response.data.totalPages)
      setError(null)
    } else {
      setError(response.message)
      setData([])
    }
    setLoading(false)
  }
  const handleTableChange = (pagination) => {
    setPage(pagination.current)
    setLimit(pagination.pageSize)
  }
  useEffect(() => {
    fetchData()
  }, [page, limit])

  const openModalAddUserGroups = () => {
    setIsModalOpenAddUserGroups(true)
  }
  const closeModalAddUserGroups = () => {
    setIsModalOpenAddUserGroups(false)
  }

  const onSelectChange = (newSelectedRowKeys) => {
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
    columnWidth: 60,
  }
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    name: true,
  })

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
    setSelectedGroupDetails(group)
    setIsModalVisible(true)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
    setSelectedGroupDetails(null)
  }

  const columns = [
    {
      title: 'Tên nhóm',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      ...(visibleColumns.name ? {} : { render: () => null }),
    },
    {
      title: 'Số người dùng',
      key: 'usersCount',
    },
  ]

  const renderTable = () => (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      rowKey="id"
      className="bg-slate-50 cursor-pointer"
      bordered
      onRow={(record) => ({
        onClick: () => {
          handleViewDetails(record)
        },
      })}
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
  )

  const renderKanban = () => (
    <div id="kanban-container">
      <Row
        gutter={16}
        className="bg-slate-50 pb-60 flex items-center justify-center"
      >
        {data.map((item) => (
          <Col span={24} key={item.id} className="mb-2">
            <Card
              title={item.name}
              extra={
                <Button onClick={() => handleViewDetails(item)}>View</Button>
              }
            >
              <p>Comment: {item.comment}</p>
            </Card>
          </Col>
        ))}
        <div className="mt-2 ">
          <Pagination
            simple
            current={page}
            pageSize={limit}
            total={total}
            showSizeChanger
            onChange={(page, pageSize) =>
              handleTableChange({ current: page, pageSize })
            }
          />
        </div>
      </Row>
      {loading && <div>Loading...</div>}
    </div>
  )
  const handleMenuShowActionClick = (e) => {
    setPhoneSettingUser(e.key)
    if (e.key === 'action_users_group_1') {
      setShowSettingActionDropdown(false)
      setIsModalOpenAddUserGroups(true)
    }
  }
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
                <PhoneUserGroupsAction
                  handleMenuShowActionClick={handleMenuShowActionClick}
                  showSttingActionDropdown={showSttingActionDropdown}
                  setShowSettingActionDropdown={setShowSettingActionDropdown}
                />
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
                      onClick={openModalAddUserGroups}
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

              <AddUserGroups
                isOpen={isModalOpenAddUserGroups}
                onClose={closeModalAddUserGroups}
                fetchData={fetchData}
              />
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
                    <ImportAction />
                    {selectedRowKeys != null && selectedRowKeys.length > 0  && (<><ShowAction/></>)}
                    
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

          <Drawer
            title={
              <Title level={4} style={{ textAlign: 'center' }}>
                {selectedGroupDetails?.name}
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
            <UserGroupsDrawer group={selectedGroupDetails} />
          </Drawer>
        </div>
      </div>
    </div>
  )
}
