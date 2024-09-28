import { Table, Input, Button, Form, DatePicker } from 'antd';
import { useEffect } from 'react';
import 'moment/locale/vi'
import moment from 'moment';

const EditLanguageTable = ({ form, dataSource }) => {
  const languageColumns = [
    {
      title: 'Ngôn ngữ',
      dataIndex: 'language',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleLanguageChange(record.key, 'language', e.target.value)}
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Loại chứng chỉ',
      dataIndex: 'certificate_type',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleLanguageChange(record.key, 'certificate_type', e.target.value)}
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Điểm số',
      dataIndex: 'score',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleLanguageChange(record.key, 'score', e.target.value)}
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Trình độ',
      dataIndex: 'level',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) => handleLanguageChange(record.key, 'level', e.target.value)}
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: 'start_date',
      render: (text, record) => (
        <DatePicker
          value={text ? moment(text) : null}
          onChange={(date, dateString) => handleLanguageChange(record.key, 'start_date', dateString)}
          className="border-none w-28 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Ngày kết thúc',
      dataIndex: 'end_date',
      render: (text, record) => (
        <DatePicker
          value={text ? moment(text) : null}
          onChange={(date, dateString) => handleLanguageChange(record.key, 'end_date', dateString)}
          className="border-none w-28 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Có thưởng',
      dataIndex: 'has_bonus',
      render: (text) => (text ? 'Có' : 'Không'),
    },
    {
      title: 'Hành động',
      render: (text, record) => (
        <Button type="link" onClick={() => removeLanguage(record.key)}>
          Xóa
        </Button>
      ),
    },
  ];

  const handleLanguageChange = (key, field, value) => {
    const updatedData = dataSource.map((language) =>
      language.key === key ? { ...language, [field]: value } : language,
    );
    form.setFieldsValue({ languages: updatedData });
  };

  const removeLanguage = (key) => {
    const updatedData = dataSource.filter((language) => language.key !== key);
    form.setFieldsValue({ languages: updatedData });
  };

  return (
    <>
      <Form.Item name="languages">
        <Table
          dataSource={dataSource}
          columns={languageColumns}
          pagination={false}
          rowKey="key"
          bordered
          size="small"
        />
      </Form.Item>
    </>
  );
};

export default EditLanguageTable;
