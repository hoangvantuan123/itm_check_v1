import { useState, useEffect } from 'react'
import { Table, Input, Button, Form, InputNumber } from 'antd'
import moment from 'moment'

const WorkExperienceTable = ({ form }) => {
  const initialWorkExperience = {
    key: 0,
    companyName: '',
    position: '',
    employeeScale: '',
    joinYear: null,
    leaveYear: null,
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
      joinYear: null,
      leaveYear: null,
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
          rules={[{ required: true, message: 'Vui lòng nhập tên công ty!' }]}
          onChange={(e) =>
            handleWorkExperienceChange(
              record.key,
              'companyName',
              e.target.value,
            )
          }
          className="border-none w-36  md:w-full"
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
          className="border-none w-36  md:w-full"
          style={{ margin: 0 }}
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
          className="border-none w-36  md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Năm vào công ty',
      dataIndex: 'joinYear',
      render: (text, record) => (
        <Form.Item name={['workExperience', record.key, 'joinYear']} style={{ margin: 0 }}>
          <InputNumber
            min={1900} // Giới hạn năm tối thiểu
            max={new Date().getFullYear()} // Giới hạn năm tối đa là năm hiện tại
            value={text ?? null} // Nếu text không tồn tại, đặt giá trị là null
            onChange={(value) => handleWorkExperienceChange(record.key, 'joinYear', value)}
            className="border-none w-28 md:w-full"
            style={{ margin: 0 }}
          />
        </Form.Item>
      ),
    },
    {
      title: 'Năm thôi việc',
      dataIndex: 'leaveYear',
      render: (text, record) => (
        <Form.Item name={['workExperience', record.key, 'leaveYear']} style={{ margin: 0 }}>
          <InputNumber
            min={record.joinYear ?? 1900}
            max={new Date().getFullYear()} 
            value={text ?? null} 
            onChange={(value) => handleWorkExperienceChange(record.key, 'leaveYear', value)}
            className="border-none w-28 md:w-full"
            style={{ margin: 0 }}
          />
        </Form.Item>
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
          className="border-none w-36  md:w-full" // Adjusted width
          style={{ margin: 0 }} // Reduced margin
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
          className="border-none w-36  md:w-full" // Adjusted width
          style={{ margin: 0 }} // Reduced margin
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
          className="border-none w-36  md:w-full " // Adjusted width
          style={{ margin: 0 }} // Reduced margin
        />
      ),
    },
    {
      title: 'Hành động',
      render: (text, record) => (
        <Button
          className=" md:w-full"
          type="link"
          onClick={() => removeWorkExperience(record.key)}
        >
          Xóa
        </Button>
      ),
    },
  ]

  return (
    <>
      <h3 className="text-xl font-semibold mb-4 mt-3">Kinh nghiệm làm việc</h3>
      <Form.Item name="workExperiences">
        <Table
          dataSource={workExperiences}
          columns={workExperienceColumns}
          pagination={false}
          rowKey="key"
          scroll={{ x: true }}
          bordered
          style={{ margin: '0 auto' }}
          rowClassName="custom-row"
          size="small"
        />
      </Form.Item>
      <Button type="dashed" onClick={addWorkExperience} className="mt-5 mb-5">
        Thêm công ty
      </Button>
    </>
  )
}

export default WorkExperienceTable
