import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Input,
  Modal,
  Typography,
  Form,
  Select,
  Button,
  Card,
  Divider,
  Space,
  Switch,
  Checkbox,
  Drawer,
  Radio,
  message,
  Table,
  Popconfirm,
  Tag,
} from 'antd'
import { DownOutlined } from '@ant-design/icons'

import { PostResGroups } from '../../../features/resGroups/postResGroups'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { PostResUserGroups } from '../../../features/resGroups/postResUserGroups'
import ShowListUser from './modalListUser'
import { GetAllResUserGroupsPageLimitID } from '../../../features/resGroups/getResUserGroupsID'
import { DeleteResUserGroups } from '../../../features/resGroups/deleteResUserGroups'
const { Title } = Typography
const { Option } = Select
const { TextArea } = Input

export default function UserGroupsDrawer({ group, isModalVisible }) {
  const { t } = useTranslation()
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userNameLogin = userFromLocalStorage?.login || 'none'

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form] = Form.useForm()
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(3)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const fetchData = async () => {
    setLoading(true)

    try {
      // Gọi các API đồng thời
      const [response, responseAllResGroups] = await Promise.all([
        GetAllResUserGroupsPageLimitID(group?.id, page, limit),
      ])

      if (response.success) {
        setDataSource(response.data.data)
        setTotal(response.data.total)
        setTotalPages(response.data.totalPages)
        setError(null)
      } else {
        setError(response.message)
        setDataSource([])
      }
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi')
      setDataSource([])
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (isModalVisible === true) {
      fetchData()
    }
    if (group) {
      form.setFieldsValue({
        name: group.name || '',
        comment: group.comment || '',
      })
    }
  }, [page, limit, group?.id, group, form])

  const handleAddRow = () => {
    setIsModalOpen(true)
  }

  const handleDelete = (key) => {
    setDataSource(dataSource.filter((item) => item.key !== key))
  }
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const [visibleColumns, setVisibleColumns] = useState({
    name: true,
    login: true,
    language: true,
    active: true,
  })

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  }
  const columns = [
    {
      title: t('Tên'),
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
      title: t('Đăng nhập'),
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
      title: t('Ngôn ngữ'),
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

  const handleFinish = async (values) => {
    const { name, comment } = values
    try {
      const token = localStorage.getItem('token_1h')
      if (!token) {
        message.error('Token không tồn tại. Vui lòng đăng nhập lại.')
        return
      }

      if (result.success) {
        fetchData()
        message.success('Nhóm được tạo thành công')
        onClose()
      } else {
        message.error(result.message || 'Lỗi khi tạo nhóm!')
      }
    } catch (error) {
      message.error('Lỗi khi tạo nhóm!')
    }
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const handleTableChange = (pagination) => {
    setPage(pagination.current)
    setLimit(pagination.pageSize)
  }
  const handleDeleteGroupsUser = async () => {
    try {
      const response = await DeleteResUserGroups(selectedRowKeys)

      if (response.success) {
        message.success('Xóa thành công')
        setSelectedRowKeys([])
        fetchData()
      } else {
        message.error(
          `Xóa thất bại: Yêu cầu không thành công, vui lòng thử lại`,
        )
      }
    } catch (error) {
      console.error('Lỗi khi xóa:', error)
      message.error('Có lỗi xảy ra, vui lòng thử lại')
    }
  }
  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{
          language: 'vi',
          timezone: 'GMT+7',
          notifications: true,
          security: false,
        }}
        style={{ textAlign: 'left' }}
      >
        <Title level={5}>{t('Thông tin nhóm')}</Title>

        {/* Thông tin cơ bản */}
        <Card style={{ marginBottom: '20px' }}>
          <Form.Item
            label={t('Tên nhóm')}
            name="name"
            rules={[{ required: true, message: t('Vui lòng nhập tên nhóm') }]}
            style={{ textAlign: 'left' }}
          >
            <Input size="large" placeholder={t('Tên nhóm')} />
          </Form.Item>
          <Form.Item
            label={t('Ghi chú')}
            name="comment"
            style={{ textAlign: 'left' }}
          >
            <TextArea rows={4} size="large" placeholder={t('Ghi chú')} />
          </Form.Item>
        </Card>

        <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
          <details
            className="group p-3 md:p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="  text-base font-medium">Người dùng</h2>

              <span className="relative size-5 shrink-0">
                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>

            <div>
              {selectedRowKeys != null && selectedRowKeys.length > 0 && (
                <>
                  <span
                    className="inline-flex gap-2 mt-3 rounded bg-red-100 hover:bg-red-200 p-1 text-red-600 cursor-pointer px-4"
                    onClick={() => {
                      handleDeleteGroupsUser()
                    }}
                  >
                    <DeleteOutlined className=' text-lg'/>
                    Xoá
                  </span>
                </>
              )}
              <Table
                rowSelection={rowSelection}
                className="mt-3 cursor-pointer"
                dataSource={dataSource}
                columns={columns}
                rowKey="id"
                pagination={{ pageSize: 10 }}
                bordered
                loading={loading}
                footer={() => (
                  <span
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={handleAddRow}
                    className="mt-2 max-w-md cursor-pointer text-pretty text-base text-indigo-500 "
                    size="large"
                  >
                    Thêm hàng mới
                  </span>
                )}
                scroll={{ x: 'max-content', y: 400 }} 
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
              />
            </div>
          </details>
          <details
            className="group p-3 md:p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="  text-base font-medium">Menu</h2>

              <span className="relative size-5 shrink-0">
                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
          <details
            className="group p-3 md:p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="  text-base font-medium">Quyền truy cập</h2>

              <span className="relative size-5 shrink-0">
                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </Form>
      <ShowListUser
        isOpen={isModalOpen}
        onClose={closeModal}
        group={group}
        fetchDataUserGroups={fetchData}
      />
    </div>
  )
}
