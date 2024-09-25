import { useState } from 'react';
import { Table, Input, DatePicker, InputNumber, Form, Button } from 'antd';

const EducationLanguageTable = ({ form }) => {
  const [educationData, setEducationData] = useState([
    { key: 0, schoolName: '', major: '', years: '', startYear: '', endYear: '', grade: '' },
  ]);

  const [languageData] = useState([
    { key: 0, language: 'Tiếng Hàn', certificateType: '', score: '', level: '', startDate: '', endDate: '', note: '' },
    { key: 1, language: 'Tiếng Anh', certificateType: '', score: '', level: '', startDate: '', endDate: '', note: '' },
    { key: 2, language: 'Ngôn ngữ khác', certificateType: '', score: '', level: '', startDate: '', endDate: '', note: '' },
  ]);

  // Hàm để thêm hàng giáo dục mới
  const addEducationRow = () => {
    const newKey = educationData.length > 0 ? educationData[educationData.length - 1].key + 1 : 0;
    const newRow = { key: newKey, schoolName: '', major: '', years: '', startYear: '', endYear: '', grade: '' };
    setEducationData([...educationData, newRow]);
  };

  const educationColumns = [
    {
      title: 'Trường học',
      dataIndex: 'schoolName',
      render: (text, record, index) => (
        <Form.Item name={['educationData', index, 'schoolName']}>
          <Input className="border-none w-40" />
        </Form.Item>
      ),
    },
    {
      title: 'Chuyên ngành',
      dataIndex: 'major',
      render: (text, record, index) => (
        <Form.Item name={['educationData', index, 'major']}>
          <Input className="border-none w-40" />
        </Form.Item>
      ),
    },
    {
      title: 'Số năm',
      dataIndex: 'years',
      render: (text, record, index) => (
        <Form.Item name={['educationData', index, 'years']}>
          <InputNumber className="border-none w-20" />
        </Form.Item>
      ),
    },
    {
      title: 'Năm nhập học',
      dataIndex: 'startYear',
      render: (text, record, index) => (
        <Form.Item name={['educationData', index, 'startYear']}>
          <InputNumber className="border-none w-20" />
        </Form.Item>
      ),
    },
    {
      title: 'Năm tốt nghiệp',
      dataIndex: 'endYear',
      render: (text, record, index) => (
        <Form.Item name={['educationData', index, 'endYear']}>
          <InputNumber className="border-none w-20" />
        </Form.Item>
      ),
    },
    {
      title: 'Xếp loại',
      dataIndex: 'grade',
      render: (text, record, index) => (
        <Form.Item name={['educationData', index, 'grade']}>
          <Input className="border-none w-20" />
        </Form.Item>
      ),
    },
  ];

  const languageColumns = [
    {
      title: 'Ngôn ngữ',
      dataIndex: 'language',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Loại chứng nhận',
      dataIndex: 'certificateType',
      render: (text, record, index) => (
        <Form.Item name={['languageData', index, 'certificateType']}>
          <Input className="border-none w-28" />
        </Form.Item>
      ),
    },
    {
      title: 'Điểm số',
      dataIndex: 'score',
      render: (text, record, index) => (
        <Form.Item name={['languageData', index, 'score']}>
          <Input className="border-none w-20" />
        </Form.Item>
      ),
    },
    {
      title: 'Cấp bậc',
      dataIndex: 'level',
      render: (text, record, index) => (
        <Form.Item name={['languageData', index, 'level']}>
          <Input className="border-none w-20" />
        </Form.Item>
      ),
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: 'startDate',
      render: (text, record, index) => (
        <Form.Item name={['languageData', index, 'startDate']}>
          <DatePicker className="border-none w-28" />
        </Form.Item>
      ),
    },
    {
      title: 'Ngày kết thúc',
      dataIndex: 'endDate',
      render: (text, record, index) => (
        <Form.Item name={['languageData', index, 'endDate']}>
          <DatePicker className="border-none w-28" />
        </Form.Item>
      ),
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      render: (text, record, index) => (
        <Form.Item name={['languageData', index, 'note']}>
          <Input className="border-none w-28" />
        </Form.Item>
      ),
    },
  ];

  return (
    <>
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
      <Button type="primary" onClick={addEducationRow} style={{ marginTop: 16 }}>
        Thêm hàng
      </Button>

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
    </>
  );
};

export default EducationLanguageTable;
