import { useEffect, useState, useCallback } from 'react'
import { Table, Input, Button, Form, InputNumber } from 'antd'

const EditWorkExperienceTable = ({ form, dataSource }) => {
  const [localDataSource, setLocalDataSource] = useState(dataSource || [])

  useEffect(() => {
    setLocalDataSource(dataSource)
  }, [dataSource])

  useEffect(() => {
    form.setFieldsValue({ workExperiences: localDataSource })
  }, [localDataSource, form])

  const handleWorkExperienceChange = useCallback((key, field, value) => {
    setLocalDataSource((prevData) =>
      prevData.map((experience) =>
        experience.key === key ? { ...experience, [field]: value } : experience,
      ),
    )
  }, [])

  const removeWorkExperience = useCallback((key) => {
    setLocalDataSource((prevData) =>
      prevData.filter((experience) => experience.key !== key),
    )
  }, [])

  const experienceColumns = [
    {
      title: 'Công ty',
      dataIndex: 'company_name',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleWorkExperienceChange(
              record.key,
              'company_name',
              e.target.value,
            )
          }
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Chức vụ',
      dataIndex: 'position',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleWorkExperienceChange(record.key, 'position', e.target.value)
          }
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Năm bắt đầu',
      dataIndex: 'start_date',
      render: (text, record) => (
        <Input
        value={text}
        onChange={(e) =>
          handleWorkExperienceChange(
            record.key,
            'start_date',
            e.target.value,
          )
        }
        className="border-none w-36 md:w-full"
        style={{ margin: 0 }}
      />
      ),
    },
    {
      title: 'Năm kết thúc',
      dataIndex: 'end_date',
      render: (text, record) => (
        <Input
        value={text}
        onChange={(e) =>
          handleWorkExperienceChange(
            record.key,
            'end_date',
            e.target.value,
          )
        }
        className="border-none w-36 md:w-full"
        style={{ margin: 0 }}
      />
      ),
    },
    {
      title: 'Công việc',
      dataIndex: 'tasks',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleWorkExperienceChange(record.key, 'tasks', e.target.value)
          }
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Mức lương',
      dataIndex: 'salary',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleWorkExperienceChange(record.key, 'salary', e.target.value)
          }
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },

  

  ]

  return (
    <>
      <Form.Item name="workExperiences">
        <Table
          dataSource={localDataSource}
          columns={experienceColumns}
          pagination={false}
          rowKey={(record) => record.key}
          scroll={{ x: true }}
          bordered
          style={{ margin: '0 auto' }}
          rowClassName="custom-row"
          size="small"
        />
      </Form.Item>
    </>
  )
}

export default EditWorkExperienceTable
