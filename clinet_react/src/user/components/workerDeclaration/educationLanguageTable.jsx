import { useState } from 'react';
import { Table, Input, DatePicker, InputNumber, Form, Button } from 'antd';

const EducationLanguageTable = ({ form }) => {
  const [educationData, setEducationData] = useState([
    {
      key: 0,
      schoolName: '',
      major: '',
      years: '',
      startYear: '',
      endYear: '',
      grade: '',
    },
  ]);

  const [languageData] = useState([
    {
      key: 0,
      language: 'Tiếng Hàn',
      certificateType: '',
      score: '',
      level: '',
      startDate: '',
      endDate: '',
      note: '',
    },
    {
      key: 1,
      language: 'Tiếng Anh',
      certificateType: '',
      score: '',
      level: '',
      startDate: '',
      endDate: '',
      note: '',
    },
    {
      key: 2,
      language: 'Ngôn ngữ khác',
      certificateType: '',
      score: '',
      level: '',
      startDate: '',
      endDate: '',
      note: '',
    },
  ]);

  // Hàm để thêm hàng giáo dục mới
  const addEducationRow = () => {
    const newKey =
      educationData.length > 0
        ? educationData[educationData.length - 1].key + 1
        : 0;
    const newRow = {
      key: newKey,
      schoolName: '',
      major: '',
      years: '',
      startYear: '',
      endYear: '',
      grade: '',
    };
    setEducationData([...educationData, newRow]);
  };

  const educationColumns = [
    {
      title: 'Trường học',
      dataIndex: 'schoolName',
      render: (text, record, index) => (
        <Form.Item name={['educationData', index, 'schoolName']} style={{ margin: 0 }}>
          <Input className="border-none w-[150px] md:w-full" />
        </Form.Item>
      ),
    },
    {
      title: 'Chuyên ngành',
      dataIndex: 'major',
      render: (text, record, index) => (
        <Form.Item name={['educationData', index, 'major']} style={{ margin: 0 }}>
          <Input className="border-none w-32  md:w-full " /> 
        </Form.Item>
      ),
    },
    {
      title: 'Số năm',
      dataIndex: 'years',
      render: (text, record, index) => (
        <Form.Item name={['educationData', index, 'years']} style={{ margin: 0 }}>
          <InputNumber className="border-none w-20  md:w-full" />
        </Form.Item>
      ),
    },
    {
      title: 'Năm nhập học',
      dataIndex: 'startYear',
      render: (text, record, index) => (
        <Form.Item name={['educationData', index, 'startYear']} style={{ margin: 0 }}>
          <InputNumber className="border-none w-20  md:w-full" />
        </Form.Item>
      ),
    },
    {
      title: 'Năm tốt nghiệp',
      dataIndex: 'endYear',
      render: (text, record, index) => (
        <Form.Item name={['educationData', index, 'endYear']} style={{ margin: 0 }}>
          <InputNumber className="border-none w-20  md:w-full " />
        </Form.Item>
      ),
    },
    {
      title: 'Xếp loại',
      dataIndex: 'grade',
      render: (text, record, index) => (
        <Form.Item name={['educationData', index, 'grade']} style={{ margin: 0 }}>
          <Input className="border-none w-20  md:w-full" />
        </Form.Item>
      ),
    },
  ];

  const languageColumns = [
    {
      title: 'Ngôn ngữ',
      dataIndex: 'language',
      render: (text, record, index) => (
        <Form.Item name={['languageData', index, 'language']} initialValue={text || ''} style={{ margin: 0 }}>
          <span   className="border-none w-20  md:w-full">{text}</span>
        </Form.Item>
      ),
    },
    {
      title: 'Loại chứng nhận',
      dataIndex: 'certificateType',
      render: (text, record, index) => (
        <Form.Item name={['languageData', index, 'certificateType']} style={{ margin: 0 }}>
          <Input className="border-none w-32  md:w-full" />
        </Form.Item>
      ),
    },
    {
      title: 'Điểm số',
      dataIndex: 'score',
      render: (text, record, index) => (
        <Form.Item name={['languageData', index, 'score']} style={{ margin: 0 }}>
          <Input className="border-none w-20  md:w-full" />
        </Form.Item>
      ),
    },
    {
      title: 'Cấp bậc',
      dataIndex: 'level',
      render: (text, record, index) => (
        <Form.Item name={['languageData', index, 'level']} style={{ margin: 0 }}>
          <Input className="border-none w-20  md:w-full" />
        </Form.Item>
      ),
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: 'startDate',
      render: (text, record, index) => (
        <Form.Item name={['languageData', index, 'startDate']} style={{ margin: 0 }}>
          <DatePicker className="border-none w-32  md:w-full" />
        </Form.Item>
      ),
    },
    {
      title: 'Ngày kết thúc',
      dataIndex: 'endDate',
      render: (text, record, index) => (
        <Form.Item name={['languageData', index, 'endDate']} style={{ margin: 0 }}>
          <DatePicker className="border-none w-32  md:w-full" />
        </Form.Item>
      ),
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      render: (text, record, index) => (
        <Form.Item name={['languageData', index, 'note']} style={{ margin: 0 }}>
          <Input className="border-none w-32  md:w-full" />
        </Form.Item>
      ),
    },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 mt-4">Tình trạng học vấn</h2>
      <Table
        dataSource={educationData}
        columns={educationColumns}
        pagination={false}
        rowKey="key"
        scroll={{ x: true }}
        bordered
        size="small"
      />
      <Button type="dashed" onClick={addEducationRow} style={{ marginTop: 16 }}>
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
        size="small"
      />
    </>
  );
};

export default EducationLanguageTable;
