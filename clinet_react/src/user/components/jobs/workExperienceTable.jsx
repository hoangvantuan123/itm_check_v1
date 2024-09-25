import { useState } from 'react';
import { Table, Input, Button, Form, DatePicker } from 'antd';
import moment from 'moment';

const WorkExperienceTable = () => {
  const [workExperiences, setWorkExperiences] = useState([
    { key: 0, companyName: '', position: '', employeeScale: '', joinYear: '', leaveYear: '', tasks: '', salary: '', reasonForLeaving: '' },
  ]);

  const [projects, setProjects] = useState([
    { key: 0, projectName: '', startDate: '', endDate: '', task: '', duration: '', summary: '' },
  ]);

  const handleWorkExperienceChange = (key, field, value) => {
    const updatedWorkExperiences = workExperiences.map(experience =>
      experience.key === key ? { ...experience, [field]: value } : experience
    );
    setWorkExperiences(updatedWorkExperiences);
  };

  const handleProjectChange = (key, field, value) => {
    const updatedProjects = projects.map(project =>
      project.key === key ? { ...project, [field]: value } : project
    );
    setProjects(updatedProjects);
  };

  const addWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { key: workExperiences.length, companyName: '', position: '', employeeScale: '', joinYear: '', leaveYear: '', tasks: '', salary: '', reasonForLeaving: '' },
    ]);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { key: projects.length, projectName: '', startDate: '', endDate: '', task: '', duration: '', summary: '' },
    ]);
  };

  const workExperienceColumns = [
    {
      title: 'Tên công ty',
      dataIndex: 'companyName',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleWorkExperienceChange(record.key, 'companyName', e.target.value)}
            className="border-none  w-20"
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
           className="border-none  w-20"
        />
      ),
    },
    {
      title: 'Quy mô LĐ',
      dataIndex: 'employeeScale',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleWorkExperienceChange(record.key, 'employeeScale', e.target.value)}
          className="border-none  w-20"
        />
      ),
    },
    {
      title: 'Năm vào công ty',
      dataIndex: 'joinYear',
      render: (text, record) => (
        <DatePicker
          value={text ? moment(text, 'YYYY') : null}
          onChange={(date, dateString) => handleWorkExperienceChange(record.key, 'joinYear', dateString)}
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
          onChange={(date, dateString) => handleWorkExperienceChange(record.key, 'leaveYear', dateString)}
          picker="year"
          className="border-none  w-24 "
        />
      ),
    },
    {
      title: 'Công việc phụ trách',
      dataIndex: 'tasks',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleWorkExperienceChange(record.key, 'tasks', e.target.value)}
           className="border-none  w-20"
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
          className="border-none  w-20"
        />
      ),
    },
    {
      title: 'Lý do xin nghỉ',
      dataIndex: 'reasonForLeaving',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleWorkExperienceChange(record.key, 'reasonForLeaving', e.target.value)}
         className="border-none  w-20"
        />
      ),
    },
  ];

  const projectColumns = [
    {
      title: 'Tên dự án',
      dataIndex: 'projectName',
      render: (text, record) => (
        <Input
          value={text}
           className="border-none  w-20"
          onChange={(e) => handleProjectChange(record.key, 'projectName', e.target.value)}
        />
      ),
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: 'startDate',
      render: (text, record) => (
        <DatePicker
          value={text ? moment(text) : null}
          onChange={(date, dateString) => handleProjectChange(record.key, 'startDate', dateString)}
           className="border-none  w-28  "
        />
      ),
    },
    {
      title: 'Ngày kết thúc',
      dataIndex: 'endDate',
      render: (text, record) => (
        <DatePicker
         className="border-none  w-28"
          value={text ? moment(text) : null}
          onChange={(date, dateString) => handleProjectChange(record.key, 'endDate', dateString)}
        />
      ),
    },
    {
      title: 'Công việc phụ trách',
      dataIndex: 'task',
      render: (text, record) => (
        <Input
          value={text}
           className="border-none  w-20"
          onChange={(e) => handleProjectChange(record.key, 'task', e.target.value)}
        />
      ),
    },
    {
      title: 'Số năm',
      dataIndex: 'duration',
      render: (text, record) => (
        <Input
          value={text}
           className="border-none  w-20"
          onChange={(e) => handleProjectChange(record.key, 'duration', e.target.value)}
        />
      ),
    },
    {
      title: 'Khái quát dự án',
      dataIndex: 'summary',
      render: (text, record) => (
        <Input.TextArea
          value={text}
           className="border-none  w-20"
          onChange={(e) => handleProjectChange(record.key, 'summary', e.target.value)}
        />
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 mt-5">Tình trạng kinh nghiệm làm việc</h2>


      <h3 className="text-xl font-semibold mb-4">Kinh nghiệm làm việc</h3>
      <Table
        dataSource={workExperiences}
        columns={workExperienceColumns}
        pagination={false}
        rowKey="key"
        scroll={{ x: true }}
       bordered
      />
      <Button type="dashed" onClick={addWorkExperience}  className="mt-5 mb-5">
        Thêm công ty
      </Button>

      {/* Project Experience Table */}
      <h3 className="text-xl font-semibold mb-4">Các dự án tham gia (nếu có)</h3>
      <Table
        dataSource={projects}
        columns={projectColumns}
        pagination={false}
        rowKey="key"
        scroll={{ x: true }}
        bordered
      />
      <Button type="dashed" onClick={addProject}  className="mt-5 mb-5">
        Thêm dự án
      </Button>
    </div>
  );
};

export default WorkExperienceTable;
