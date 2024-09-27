import { useState } from 'react'
import { Form, Table, Input, Button, Checkbox, InputNumber } from 'antd'

const FamilyInfoTable = () => {
  const initialFamilyMembers = [
    {
      key: 0,
      relationship: 'Bố',
      name_family: '',
      birthYear: '',
      workplace: '',
      job: '',
      phoneNumber: '',
      livingTogether: false,
    },
    {
      key: 1,
      relationship: 'Mẹ',
      name_family: '',
      birthYear: '',
      workplace: '',
      job: '',
      phoneNumber: '',
      livingTogether: false,
    },
    {
      key: 2,
      relationship: 'Vợ/chồng',
      name_family: '',
      birthYear: '',
      workplace: '',
      job: '',
      phoneNumber: '',
      livingTogether: false,
    },
    {
      key: 3,
      relationship: 'Anh/Em/Con',
      name_family: '',
      birthYear: '',
      workplace: '',
      job: '',
      phoneNumber: '',
      livingTogether: false,
    },
    {
      key: 4,
      relationship: 'Anh/Em/Con',
      name_family: '',
      birthYear: '',
      workplace: '',
      job: '',
      phoneNumber: '',
      livingTogether: false,
    },
    {
      key: 5,
      relationship: 'Anh/Em/Con',
      name_family: '',
      birthYear: '',
      workplace: '',
      job: '',
      phoneNumber: '',
      livingTogether: false,
    },
  ]

  const columns = [
    {
      title: 'Quan hệ',
      dataIndex: 'relationship',
      render: (text, record, index) => (
        <Form.Item
          name={['familyMembers', index, 'relationship']}
          initialValue={text || ''}
        >
          <span>{text}</span>
        </Form.Item>
      ),
    },
    {
      title: 'Họ tên',
      dataIndex: 'name_family',
      render: (text, record, index) => (
        <Form.Item name={['familyMembers', index, 'name_family']}>
          <Input className="border-none w-[200px]" />
        </Form.Item>
      ),
    },
    {
      title: 'Năm sinh',
      dataIndex: 'birthYear',
      render: (text, record, index) => (
        <Form.Item name={['familyMembers', index, 'birthYear']}>
          <InputNumber className="border-none w-28" />
        </Form.Item>
      ),
    },
    {
      title: 'Nơi làm việc',
      dataIndex: 'workplace',
      render: (text, record, index) => (
        <Form.Item name={['familyMembers', index, 'workplace']}>
          <Input className="border-none w-28" />
        </Form.Item>
      ),
    },
    {
      title: 'Công việc',
      dataIndex: 'job',
      render: (text, record, index) => (
        <Form.Item name={['familyMembers', index, 'job']}>
          <Input className="border-none w-28" />
        </Form.Item>
      ),
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      render: (text, record, index) => (
        <Form.Item name={['familyMembers', index, 'phoneNumber']}>
          <Input className="border-none w-28" />
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
        dataSource={initialFamilyMembers}
        columns={columns}
        pagination={false}
        rowKey="key"
        bordered
        scroll={{ x: true }}
        size="small"
      />
    </>
  )
}

export default FamilyInfoTable
