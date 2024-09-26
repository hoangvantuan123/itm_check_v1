import { useState, useEffect } from 'react'
import { Table, Input, Button, Form, DatePicker } from 'antd'
import moment from 'moment'

const WorkExperienceTable = ({ form }) => {
  const initialWorkExperience = {
    key: 0,
    companyName: '',
    position: '',
    employeeScale: '',
    joinYear: '',
    leaveYear: '',
    tasks: '',
    salary: '',
    reasonForLeaving: '',
  }

  const [workExperiences, setWorkExperiences] = useState([
    initialWorkExperience,
  ])

  useEffect(() => {
    const workExperienceData = form.getFieldValue('workExperiences') || []

    if (
      JSON.stringify(workExperienceData) !== JSON.stringify(workExperiences)
    ) {
      setWorkExperiences(workExperienceData)
    }
  }, [form, workExperiences])

  const handleWorkExperienceChange = (key, field, value) => {
    const updatedWorkExperiences = workExperiences.map((experience) =>
      experience.key === key ? { ...experience, [field]: value } : experience,
    )
    setWorkExperiences(updatedWorkExperiences)
    form.setFieldsValue({ workExperiences: updatedWorkExperiences })
  }

  const addWorkExperience = () => {
    const newExperience = {
      key: workExperiences.length,
      companyName: '',
      position: '',
      employeeScale: '',
      joinYear: '',
      leaveYear: '',
      tasks: '',
      salary: '',
      reasonForLeaving: '',
    }
    const updatedWorkExperiences = [...workExperiences, newExperience]
    setWorkExperiences(updatedWorkExperiences)
    form.setFieldsValue({ workExperiences: updatedWorkExperiences })
  }

  const removeWorkExperience = (key) => {
    const updatedWorkExperiences = workExperiences.filter(
      (experience) => experience.key !== key,
    )
    setWorkExperiences(updatedWorkExperiences)
    form.setFieldsValue({ workExperiences: updatedWorkExperiences })
  }

  const workExperienceColumns = [
    {
      title: 'Tên công ty',
      dataIndex: 'companyName',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleWorkExperienceChange(
              record.key,
              'companyName',
              e.target.value,
            )
          }
          className="border-none w-20"
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
          className="border-none w-20"
        />
      ),
    },
    {
      title: 'Quy mô LĐ',
      dataIndex: 'employeeScale',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleWorkExperienceChange(
              record.key,
              'employeeScale',
              e.target.value,
            )
          }
          className="border-none w-20"
        />
      ),
    },
    {
      title: 'Năm vào công ty',
      dataIndex: 'joinYear',
      render: (text, record) => (
        <DatePicker
          value={text ? moment(text, 'YYYY') : null}
          onChange={(date, dateString) =>
            handleWorkExperienceChange(record.key, 'joinYear', dateString)
          }
          picker="year"
          className="border-none w-24"
        />
      ),
    },
    {
      title: 'Năm thôi việc',
      dataIndex: 'leaveYear',
      render: (text, record) => (
        <DatePicker
          value={text ? moment(text, 'YYYY') : null}
          onChange={(date, dateString) =>
            handleWorkExperienceChange(record.key, 'leaveYear', dateString)
          }
          picker="year"
          className="border-none w-24"
        />
      ),
    },
    {
      title: 'Công việc phụ trách',
      dataIndex: 'tasks',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleWorkExperienceChange(record.key, 'tasks', e.target.value)
          }
          className="border-none w-20"
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
          className="border-none w-20"
        />
      ),
    },
    {
      title: 'Lý do xin nghỉ',
      dataIndex: 'reasonForLeaving',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleWorkExperienceChange(
              record.key,
              'reasonForLeaving',
              e.target.value,
            )
          }
          className="border-none w-20"
        />
      ),
    },
    {
      title: 'Hành động',
      render: (text, record) => (
        <Button type="link" onClick={() => removeWorkExperience(record.key)}>
          Xóa
        </Button>
      ),
    },
  ]

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6 mt-5">
        Tình trạng kinh nghiệm làm việc
      </h2>

      <h3 className="text-xl font-semibold mb-4">Kinh nghiệm làm việc</h3>
      <Form.Item name="workExperiences">
        <Table
          dataSource={workExperiences}
          columns={workExperienceColumns}
          pagination={false}
          rowKey="key"
          scroll={{ x: true }}
          bordered
        />
      </Form.Item>
      <Button type="dashed" onClick={addWorkExperience} className="mt-5 mb-5">
        Thêm công ty
      </Button>
    </>
  )
}

export default WorkExperienceTable
