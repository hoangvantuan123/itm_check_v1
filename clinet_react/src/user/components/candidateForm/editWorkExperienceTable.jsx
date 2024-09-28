import { useEffect } from 'react';
import { Table, Input, Button, Form, DatePicker, InputNumber } from 'antd';
import moment from 'moment';

const EditWorkExperienceTable = ({ form, dataSource }) => {
  const initialWorkExperience = {
    key: 0,
    company_name: '',
    position: '',
    start_date: '',
    end_date: '',
    employee_scale: '',
    tasks: '',
    salary: '',
    description: '',
  };

  // Use dataSource to populate work experiences
  const workExperiences = dataSource ;

  useEffect(() => {
    form.setFieldsValue({ workExperiences });
  }, [form, workExperiences]);

  const handleWorkExperienceChange = (key, field, value) => {
    const updatedWorkExperiences = workExperiences.map((experience) =>
      experience.key === key ? { ...experience, [field]: value } : experience,
    );
    form.setFieldsValue({ workExperiences: updatedWorkExperiences });
  };

  const removeWorkExperience = (key) => {
    const updatedWorkExperiences = workExperiences.filter(
      (experience) => experience.key !== key,
    );
    form.setFieldsValue({ workExperiences: updatedWorkExperiences });
  };

  const experienceColumns = [
    {
      title: 'Công ty',
      dataIndex: 'company_name',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleWorkExperienceChange(record.key, 'company_name', e.target.value)}
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
          onChange={(e) => handleWorkExperienceChange(record.key, 'position', e.target.value)}
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Năm bắt đầu',
      dataIndex: 'start_date',
      render: (text, record) => (
        <InputNumber
          value={text || null}
          onChange={(value) => handleWorkExperienceChange(record.key, 'start_date', value)}
          className="border-none w-28 md:w-full"
          style={{ margin: 0 }}
          min={1900} 
        />
      ),
    },
    {
      title: 'Năm kết thúc',
      dataIndex: 'end_date',
      render: (text, record) => (
        <InputNumber
          value={text || null}
          onChange={(value) => handleWorkExperienceChange(record.key, 'end_date', value)}
          className="border-none w-28 md:w-full"
          style={{ margin: 0 }}
          min={1900} 
        />
      ),
    },

    {
      title: 'Quy mô nhân sự',
      dataIndex: 'employee_scale',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleWorkExperienceChange(record.key, 'employee_scale', e.target.value)}
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
          onChange={(e) => handleWorkExperienceChange(record.key, 'tasks', e.target.value)}
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
          onChange={(e) => handleWorkExperienceChange(record.key, 'salary', e.target.value)}
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleWorkExperienceChange(record.key, 'description', e.target.value)}
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Hành động',
      render: (text, record) => (
        <Button className="md:w-full" type="link" onClick={() => removeWorkExperience(record.key)}>
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <>
      <Form.Item name="workExperiences">
        <Table
          dataSource={workExperiences}
          columns={experienceColumns}
          pagination={false}
          rowKey="key"
          scroll={{ x: true }}
          bordered
          style={{ margin: '0 auto' }}
          rowClassName="custom-row"
          size="small"
        />
      </Form.Item>
    </>
  );
};

export default EditWorkExperienceTable;
