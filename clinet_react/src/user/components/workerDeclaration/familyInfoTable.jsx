import { useState } from 'react'
import { Form, Table, Input, Button, Checkbox, InputNumber } from 'antd'

const FamilyInfoTable = () => {
  const [familyMembers, setFamilyMembers] = useState([
    {
      key: 0,
      relationship: 'Bố',
      name_family: '',
      birthYear: null,
      workplace: '',
      job: '',
      phoneNumber: '',
      livingTogether: false,
    },
    {
      key: 1,
      relationship: 'Mẹ',
      name_family: '',
      birthYear: null,
      workplace: '',
      job: '',
      phoneNumber: '',
      livingTogether: false,
    },
    {
      key: 2,
      relationship: 'Vợ/chồng',
      name_family: '',
      birthYear: null,
      workplace: '',
      job: '',
      phoneNumber: '',
      livingTogether: false,
    },
    {
      key: 3,
      relationship: 'Anh/Em/Con',
      name_family: '',
      birthYear: null,
      workplace: '',
      job: '',
      phoneNumber: '',
      livingTogether: false,
    },
  ])

  const addSibling = () => {
    if (
      familyMembers.filter((member) => member.relationship === 'Anh/Em/Con')
        .length < 3
    ) {
      setFamilyMembers([
        ...familyMembers,
        {
          key: familyMembers.length,
          relationship: 'Anh/Em/Con',
          name_family: '',
          birthYear: null,
          workplace: '',
          job: '',
          phoneNumber: '',
          livingTogether: false,
        },
      ])
    }
  }

  const columns = [
    {
      title: 'Quan hệ',
      dataIndex: 'relationship',
      render: (text, record, index) => (
        <Form.Item
          name={['familyMembers', index, 'relationship']}
          initialValue={text || ''}
          style={{ margin: 0 }}
        >
          <span>{text}</span>
        </Form.Item>
      ),
    },
    {
      title: 'Họ tên',
      dataIndex: 'name_family',
      render: (text, record, index) => (
        <Form.Item
          name={['familyMembers', index, 'name_family']}
          style={{ margin: 0 }}
        >
          <Input className="border-none w-[150px]" />
        </Form.Item>
      ),
    },
    {
      title: 'Năm sinh',
      dataIndex: 'birthYear',
      render: (text, record, index) => (
        <Form.Item
          name={['familyMembers', index, 'birthYear']}
          style={{ margin: 0 }}
        >
          <InputNumber className="border-none w-[80px]" />
        </Form.Item>
      ),
    },
    {
      title: 'Nơi làm việc',
      dataIndex: 'workplace',
      render: (text, record, index) => (
        <Form.Item
          name={['familyMembers', index, 'workplace']}
          style={{ margin: 0 }}
        >
          <Input className="border-none w-[120px]" />
        </Form.Item>
      ),
    },
    {
      title: 'Công việc',
      dataIndex: 'job',
      render: (text, record, index) => (
        <Form.Item name={['familyMembers', index, 'job']} style={{ margin: 0 }}>
          <Input className="border-none w-[120px]" />
        </Form.Item>
      ),
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      render: (text, record, index) => (
        <Form.Item
          name={['familyMembers', index, 'phoneNumber']}
          style={{ margin: 0 }}
        >
          <Input className="border-none w-[120px]" />
        </Form.Item>
      ),
    },
    {
      title: 'Sống chung',
      dataIndex: 'livingTogether',
      render: (text, record, index) => (
        <Form.Item
          name={['familyMembers', index, 'livingTogether']}
          valuePropName="checked"
          style={{ margin: 0 }}
        >
          <Checkbox />
        </Form.Item>
      ),
    },
  ]

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Thông tin gia đình</h2>
      <Table
        dataSource={familyMembers}
        columns={columns}
        pagination={false}
        rowKey="key"
        bordered
        scroll={{ x: true }}
        style={{ margin: '0 auto' }}
        rowClassName="custom-row"
        size="small"
      />
      <Button
        onClick={addSibling}
        type="dashed"
        disabled={
          familyMembers.filter((member) => member.relationship === 'Anh/Em/Con')
            .length >= 3
        }
        style={{ marginTop: '16px' }}
      >
        Thêm hàng
      </Button>
    </>
  )
}

export default FamilyInfoTable
