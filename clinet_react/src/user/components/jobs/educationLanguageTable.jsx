import { useState } from 'react';
import { Table, Input, Button, DatePicker, InputNumber } from 'antd';

const EducationLanguageTable = () => {
  const [educationData, setEducationData] = useState([
    { key: 0, schoolName: '', major: '', years: '', startYear: '', endYear: '', grade: '' },
    { key: 1, schoolName: '', major: '', years: '', startYear: '', endYear: '', grade: '' },
    { key: 2, schoolName: '', major: '', years: '', startYear: '', endYear: '', grade: '' },
  ]);

  const [languageData, setLanguageData] = useState([
    { key: 0, language: 'Tiếng Hàn', certificateType: '', score: '', level: '', startDate: '', endDate: '', note: '' },
    { key: 1, language: 'Tiếng Anh', certificateType: '', score: '', level: '', startDate: '', endDate: '', note: '' },
    { key: 2, language: 'Ngôn ngữ khác', certificateType: '', score: '', level: '', startDate: '', endDate: '', note: '' },
  ]);

  const handleEducationChange = (key, field, value) => {
    const updatedEducation = educationData.map(item =>
      item.key === key ? { ...item, [field]: value } : item
    );
    setEducationData(updatedEducation);
  };

  const handleLanguageChange = (key, field, value) => {
    const updatedLanguages = languageData.map(item =>
      item.key === key ? { ...item, [field]: value } : item
    );
    setLanguageData(updatedLanguages);
  };

  const educationColumns = [
    {
      title: 'Trường học',
      dataIndex: 'schoolName',
      render: (text, record) => (
        <Input
          value={text}
           className="border-none   w-40"
          onChange={(e) => handleEducationChange(record.key, 'schoolName', e.target.value)}
        />
      ),
    },
    {
      title: 'Chuyên ngành',
      dataIndex: 'major',
      render: (text, record) => (
        <Input
          value={text}
         className="border-none   w-40"
          onChange={(e) => handleEducationChange(record.key, 'major', e.target.value)}
        />
      ),
    },
    {
      title: 'Số năm',
      dataIndex: 'years',
      render: (text, record) => (
        <InputNumber
          
            className="border-none w-20"
          onChange={(e) => handleEducationChange(record.key, 'years', e.target.value)}
        />
      ),
    },
    {
      title: 'Năm nhập học',
      dataIndex: 'startYear',
      render: (text, record) => (
        <InputNumber
         
            className="border-none w-20"
          onChange={(e) => handleEducationChange(record.key, 'startYear', e.target.value)}
        />
      ),
    },
    {
      title: 'Năm tốt nghiệp',
      dataIndex: 'endYear',
      render: (text, record) => (
        <InputNumber
         className="border-none w-20"
          onChange={(e) => handleEducationChange(record.key, 'endYear', e.target.value)}
        />
      ),
    },
    {
      title: 'Xếp loại',
      dataIndex: 'grade',
      render: (text, record) => (
        <Input
          value={text}
            className="border-none w-20"
          onChange={(e) => handleEducationChange(record.key, 'grade', e.target.value)}
        />
      ),
    },
  ];

  const languageColumns = [
    {
      title: 'Ngôn ngữ',
      dataIndex: 'language',
      render: text => <span className=''>{text}</span>,
     
    },
    {
      title: 'Loại chứng nhận',
      dataIndex: 'certificateType',
      render: (text, record) => (
        <Input
          value={text}
          className="border-none  w-28"
          onChange={(e) => handleLanguageChange(record.key, 'certificateType', e.target.value)}
        />
      ),
    },
    {
      title: 'Điểm số',
      dataIndex: 'score',
      render: (text, record) => (
        <Input
          value={text}
          className="border-none  w-20"
          onChange={(e) => handleLanguageChange(record.key, 'score', e.target.value)}
        />
      ),
    },
    {
      title: 'Cấp bậc',
      dataIndex: 'level',
      render: (text, record) => (
        <Input
          value={text}
           className="border-none  w-20"
          onChange={(e) => handleLanguageChange(record.key, 'level', e.target.value)}
        />
      ),
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: 'startDate',
      render: (text, record) => (
        <DatePicker
          value={text}
           className="border-none  w-20"
          onChange={(date, dateString) => handleLanguageChange(record.key, 'startDate', dateString)}
        />
      ),
    },
    {
      title: 'Ngày kết thúc',
      dataIndex: 'endDate',
      render: (text, record) => (
        <DatePicker
          value={text}
         className="border-none  w-20"
          onChange={(date, dateString) => handleLanguageChange(record.key, 'endDate', dateString)}
        />
      ),
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      render: (text, record) => (
        <Input
          value={text}
          className="border-none  w-20"
          onChange={(e) => handleLanguageChange(record.key, 'note', e.target.value)}
        />
      ),
    },
  ];

  return (
    <div className="mt-4">
      {/* Education Table */}
      <h2 className="text-xl font-semibold mb-4">Tình trạng học vấn</h2>
      <Table
        dataSource={educationData}
        columns={educationColumns}
        pagination={false}
        rowKey="key"
        scroll={{ x: true }}
        bordered
      />
      {/* Foreign Language Table */}
      <h2 className="text-xl font-semibold mb-4 mt-5">Ngoại ngữ</h2>
      <Table
        dataSource={languageData}
        columns={languageColumns}
        pagination={false}
        rowKey="key"
        bordered
        scroll={{ x: true }}
      />
    </div>
  );
};

export default EducationLanguageTable;
