import { useState, useEffect, useCallback } from 'react'
import { Table, Input, Button, Form, InputNumber } from 'antd'

const EditEducationTable = ({ form, dataSource }) => {
  const [localDataSource, setLocalDataSource] = useState(dataSource)

  useEffect(() => {
    setLocalDataSource(dataSource)
  }, [dataSource])

  useEffect(() => {
    form.setFieldsValue({ education: localDataSource })
  }, [localDataSource, form])

  const handleEducationChange = useCallback((key, field, value) => {
    setLocalDataSource((prevData) =>
      prevData.map((education) =>
        education.key === key ? { ...education, [field]: value } : education,
      ),
    )
  }, [])

  // Xóa dòng dữ liệu dựa vào key
  const removeEducation = useCallback((key) => {
    setLocalDataSource((prevData) =>
      prevData.filter((education) => education.key !== key),
    )
  }, [])

  // Định nghĩa cột cho bảng
  const educationColumns = [
    {
      title: 'Trường',
      dataIndex: 'school',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleEducationChange(record.key, 'school', e.target.value)
          }
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Chuyên ngành',
      dataIndex: 'major',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleEducationChange(record.key, 'major', e.target.value)
          }
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Năm học',
      dataIndex: 'years',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleEducationChange(record.key, 'years', e.target.value)
          }
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Năm bắt đầu',
      dataIndex: 'start_year',
      render: (text, record) => (
        <InputNumber
          onChange={(value) =>
            handleEducationChange(record.key, 'start_year', value)
          }
          className="border-none w-28 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Năm tốt nghiệp',
      dataIndex: 'graduation_year',
      render: (text, record) => (
        <InputNumber
          onChange={(value) =>
            handleEducationChange(record.key, 'graduation_year', value)
          }
          className="border-none w-28 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Xếp loại',
      dataIndex: 'grade',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleEducationChange(record.key, 'grade', e.target.value)
          }
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Hành động',
      render: (text, record) => (
        <Button type="link" onClick={() => removeEducation(record.key)}>
          Xóa
        </Button>
      ),
    },
  ]

  return (
    <Form.Item name="education">
      <Table
        dataSource={localDataSource}
        columns={educationColumns}
        pagination={false}
        rowKey={(record) => record.key}
        bordered
        size="small"
      />
    </Form.Item>
  )
}

export default EditEducationTable
