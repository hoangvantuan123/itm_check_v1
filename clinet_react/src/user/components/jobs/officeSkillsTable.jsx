import { useState } from 'react';
import { Table, Checkbox } from 'antd';

const OfficeSkillsTable = () => {
  const [officeSkills, setOfficeSkills] = useState([
    { key: 0, skill: 'Excel', good: false, average: false, poor: false },
    { key: 1, skill: 'Word', good: false, average: false, poor: false },
    { key: 2, skill: 'PowerPoint', good: false, average: false, poor: false },
  ]);

  const [softwareSkills, setSoftwareSkills] = useState([
    { key: 0, skill: 'AutoCAD', good: false, average: false, poor: false },
    { key: 1, skill: 'SolidWorks', good: false, average: false, poor: false },
    { key: 2, skill: 'ERP', good: false, average: false, poor: false },
    { key: 3, skill: 'MES', good: false, average: false, poor: false },
  ]);

  const handleSkillsChange = (key, field, value, isOfficeSkill = true) => {
    const updatedSkills = (isOfficeSkill ? officeSkills : softwareSkills).map(skill =>
      skill.key === key ? { ...skill, [field]: value } : skill
    );
    isOfficeSkill ? setOfficeSkills(updatedSkills) : setSoftwareSkills(updatedSkills);
  };

  const renderCheckboxColumns = (isOfficeSkill = true) => [
    {
      title: 'Tốt',
      dataIndex: 'good',
      render: (text, record) => (
        <Checkbox
          checked={text}
          onChange={(e) => handleSkillsChange(record.key, 'good', e.target.checked, isOfficeSkill)}
        />
      ),
    },
    {
      title: 'TB',
      dataIndex: 'average',
      render: (text, record) => (
        <Checkbox
          checked={text}
          onChange={(e) => handleSkillsChange(record.key, 'average', e.target.checked, isOfficeSkill)}
        />
      ),
    },
    {
      title: 'Kém',
      dataIndex: 'poor',
      render: (text, record) => (
        <Checkbox
          checked={text}
          onChange={(e) => handleSkillsChange(record.key, 'poor', e.target.checked, isOfficeSkill)}
        />
      ),
    },
  ];

  const officeSkillsColumns = [
    {
      title: 'Kỹ năng văn phòng',
      dataIndex: 'skill',
      render: text => <span>{text}</span>,
    },
    ...renderCheckboxColumns(true),
  ];

  const softwareSkillsColumns = [
    {
      title: 'Kỹ năng phần mềm',
      dataIndex: 'skill',
      render: text => <span>{text}</span>,
    },
    ...renderCheckboxColumns(false),
  ];

  return (
    <div >
      <h2 className="text-2xl font-semibold mb-6 mt-5">Công việc văn phòng</h2>
      
      {/* Office Skills Table */}
      <h3 className="text-xl font-semibold mb-4">Kỹ năng văn phòng</h3>
      <Table
        dataSource={officeSkills}
        columns={officeSkillsColumns}
        pagination={false}
        rowKey="key"
        scroll={{ x: true }}
       bordered
      />

      {/* Software Skills Table */}
      <h3 className="text-xl font-semibold mb-4 mt-5">Kỹ năng phần mềm</h3>
      <Table
        dataSource={softwareSkills}
        columns={softwareSkillsColumns}
        pagination={false}
        rowKey="key"
        scroll={{ x: true }}
        bordered
      />
    </div>
  );
};

export default OfficeSkillsTable;
