import { Space, Table, Tag } from 'antd'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Permissions',
    key: 'permissions',
    render: (_, record) => <Tag>{record.permissions}</Tag>,
  },
  {
    title: 'Last active',
    key: 'last_active',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
]

const data = [
  {
    key: '2',
    name: 'Jim Green',
    permissions: 'admin',
    address: 'London No. 1 Lake Park',
  },
]
const KeyMenu02 = () => <Table columns={columns} dataSource={data} />
export default KeyMenu02
