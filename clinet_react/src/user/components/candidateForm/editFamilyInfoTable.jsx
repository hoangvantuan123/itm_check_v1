import { useState, useEffect, useCallback } from 'react'
import { Form, Table, Input, Button, Checkbox, InputNumber } from 'antd'

const EditFamilyInfoTable = ({ form, dataSource }) => {
  // Khởi tạo trạng thái nội bộ cho dữ liệu thành viên gia đình
  const [localDataSource, setLocalDataSource] = useState(dataSource || [])

  // Cập nhật localDataSource khi dataSource thay đổi
  useEffect(() => {
    setLocalDataSource(dataSource)
  }, [dataSource])

  // Cập nhật form với dữ liệu từ localDataSource mỗi khi thay đổi
  useEffect(() => {
    form.setFieldsValue({ families: localDataSource })
  }, [localDataSource, form])

  // Hàm xử lý thay đổi dữ liệu thành viên gia đình
  const handleFamilyMemberChange = useCallback((index, field, value) => {
    setLocalDataSource((prevData) =>
      prevData.map((member, idx) =>
        idx === index ? { ...member, [field]: value } : member,
      ),
    )
  }, [])

  // Hàm thêm thành viên mới (Anh/Em/Con) vào danh sách
  const addSibling = useCallback(() => {
    if (
      localDataSource.filter((member) => member.relationship === 'Anh/Em/Con')
        .length < 3
    ) {
      const newMember = {
        key: localDataSource.length,
        relationship: 'Anh/Em/Con',
        full_name: '',
        birth_year: '',
        workplace: '',
        job: '',
        phone_number: '',
        livingTogether: false,
      }
      setLocalDataSource((prevData) => [...prevData, newMember])
    }
  }, [localDataSource])

  // Cấu hình các cột của bảng
  const columns = [
    {
      title: 'Quan hệ',
      dataIndex: 'relationship',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Họ tên',
      dataIndex: 'full_name',
      render: (text, record, index) => (
        <Input
          value={text}
          onChange={(e) =>
            handleFamilyMemberChange(index, 'full_name', e.target.value)
          }
          className="border-none w-[150px]"
        />
      ),
    },
    {
      title: 'Năm sinh',
      dataIndex: 'birth_year',
      render: (text, record, index) => (
        <InputNumber
          onChange={(value) =>
            handleFamilyMemberChange(index, 'birth_year', value)
          }
          className="border-none w-[80px]"
        />
      ),
    },
    {
      title: 'Nơi làm việc',
      dataIndex: 'workplace',
      render: (text, record, index) => (
        <Input
          value={text}
          onChange={(e) =>
            handleFamilyMemberChange(index, 'workplace', e.target.value)
          }
          className="border-none w-[120px]"
        />
      ),
    },
    {
      title: 'Công việc',
      dataIndex: 'job',
      render: (text, record, index) => (
        <Input
          value={text}
          onChange={(e) =>
            handleFamilyMemberChange(index, 'job', e.target.value)
          }
          className="border-none w-[120px]"
        />
      ),
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone_number',
      render: (text, record, index) => (
        <Input
          value={text}
          onChange={(e) =>
            handleFamilyMemberChange(index, 'phone_number', e.target.value)
          }
          className="border-none w-[120px]"
        />
      ),
    },
    {
      title: 'Sống chung',
      dataIndex: 'livingTogether',
      render: (checked, record, index) => (
        <Checkbox
          checked={checked}
          onChange={(e) =>
            handleFamilyMemberChange(index, 'livingTogether', e.target.checked)
          }
        />
      ),
    },
  ]

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Thông tin gia đình</h2>
      <Form.Item name="families">
        <Table
          dataSource={localDataSource}
          columns={columns}
          pagination={false}
          rowKey={(record) => record.key}
          bordered
          scroll={{ x: true }}
          style={{ margin: '0 auto' }}
          rowClassName="custom-row"
          size="small"
        />
      </Form.Item>
    </>
  )
}

export default EditFamilyInfoTable
