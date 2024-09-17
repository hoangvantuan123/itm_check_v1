import { useState } from 'react'
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
} from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { PostResGroups } from '../../../features/resGroups/postResGroups'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { GetAllResGroupsPageLimit } from '../../../features/resGroups/getResGroupsPageLimit'
const { Title } = Typography
const { Option } = Select
const { TextArea } = Input
export default function AddUserGroups({ isOpen, onClose, fetchData }) {
  const { t } = useTranslation()
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userNameLogin = userFromLocalStorage?.login || 'none'
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const [dataSource, setDataSource] = useState([
    { key: '1', name: 'User 1', age: 32, address: 'Hanoi' },
    { key: '2', name: 'User 2', age: 42, address: 'Danang' },
  ])
  const [count, setCount] = useState(3)

  const handleAddRow = () => {
    const newRow = {
      key: count,
      name: `User ${count}`,
      age: 25,
      address: `Address ${count}`,
    }
    setDataSource([...dataSource, newRow])
    setCount(count + 1)
  }

  const handleDelete = (key) => {
    setDataSource(dataSource.filter((item) => item.key !== key))
  }

  const columns = [
    {
      title: t('Tên'),
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: t('Tuổi'),
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: t('Địa chỉ'),
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
    {
      title: t('Hành động'),
      key: 'action',
      render: (_, record) => (
        <Popconfirm
          title={t('Bạn có chắc chắn muốn xóa?')}
          onConfirm={() => handleDelete(record.key)}
          okButtonProps={{
            style: {
              backgroundColor: '#f5222d',
              color: 'white',
              border: 'none',
            },
          }}
          cancelButtonProps={{
            style: { border: '1px solid #d9d9d9', color: '#595959' },
          }}
        >
          <Button danger icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ]

  const handleFinish = async (values) => {
    const { name, comment } = values
    try {
      const token = localStorage.getItem('token_1h')
      if (!token) {
        message.error(
          'Phiên làm việc đã hết hạn. Vui lòng đăng nhập lại để tiếp tục.',
        )
        return
      }

      const result = await PostResGroups(name, comment, token)

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

  return (
    <Drawer
      title={
        <Title level={4} style={{ textAlign: 'center' }}>
          {t('Thêm nhóm dùng mới')}
        </Title>
      }
      open={isOpen}
      closable={false}
      width={900}
      footer={[
        <Button key="cancel" onClick={onClose}>
          {t('Hủy')}
        </Button>,
        <Button
          key="submit"
          type="primary"
          className=" ml-2 border-gray-200  bg-indigo-600 text-white  shadow-sm text-sm"
          onClick={() => form.submit()}
        >
          {t('Lưu')}
        </Button>,
      ]}
    >
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
              <Table
                className="mt-3"
                dataSource={dataSource}
                columns={columns}
                rowSelection={{ type: 'checkbox' }}
                pagination={{ pageSize: 10 }}
                bordered
                footer={() => (
                  <span
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={handleAddRow}
                    className="mt-2 max-w-md cursor-pointer text-pretty text-base text-indigo-500"
                    size="large"
                  >
                    Thêm hàng mới
                  </span>
                )}
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
    </Drawer>
  )
}
