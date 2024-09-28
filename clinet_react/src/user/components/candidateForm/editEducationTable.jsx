import { Table, Input, Button, Form, InputNumber } from 'antd';
import { useEffect } from 'react';

const EditEducationTable = ({ form, dataSource }) => {
  const educationColumns = [
    {
      title: 'Trường',
      dataIndex: 'school',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleEducationChange(record.key, 'school', e.target.value)}
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
          onChange={(e) => handleEducationChange(record.key, 'major', e.target.value)}
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
          onChange={(e) => handleEducationChange(record.key, 'years', e.target.value)}
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
          value={text || null}
          onChange={(value) => handleEducationChange(record.key, 'start_year', value)}
          className="border-none w-28 md:w-full"
          style={{ margin: 0 }}
          min={1900} // Giới hạn năm bắt đầu
        />
      ),
    },
    {
      title: 'Năm tốt nghiệp',
      dataIndex: 'graduation_year',
      render: (text, record) => (
        <InputNumber
          value={text || null}
          onChange={(value) => handleEducationChange(record.key, 'graduation_year', value)}
          className="border-none w-28 md:w-full"
          style={{ margin: 0 }}
          min={1900} // Giới hạn năm bắt đầu
        />
      ),
    },

    {
      title: 'Xếp loại',
      dataIndex: 'grade',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleEducationChange(record.key, 'grade', e.target.value)}
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
  ];

  const handleEducationChange = (key, field, value) => {
    const updatedData = dataSource.map((education) =>
      education.key === key ? { ...education, [field]: value } : education,
    );
    form.setFieldsValue({ education: updatedData });
  };

  const removeEducation = (key) => {
    const updatedData = dataSource.filter((education) => education.key !== key);
    form.setFieldsValue({ education: updatedData });
  };

  return (
    <>
      <Form.Item name="education">
        <Table
          dataSource={dataSource}
          columns={educationColumns}
          pagination={false}
          rowKey="key"
          bordered
          size="small"
        />
      </Form.Item>
    </>
  );
};

export default EditEducationTable;
