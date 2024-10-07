import { useState, useEffect, useCallback } from 'react';
import { Table, Input, Form } from 'antd';

const EducationLanguageTable = ({ form, dataSource }) => {
  const [localDataSource, setLocalDataSource] = useState([]);

  useEffect(() => {
    // Nếu có dữ liệu từ dataSource, sử dụng nó. Ngược lại, sử dụng dữ liệu mẫu.
    if (dataSource && dataSource.length > 0) {
      setLocalDataSource(dataSource);
    } else {
      // Dữ liệu mẫu
      setLocalDataSource([
        { key: 1, highest_education_level: null, school: null, major: null, school_year: null, year_ended: null, year_of_graduation: null, classification: null },
        { key: 2, highest_education_level: null, school: null, major: null, school_year: null, year_ended: null, year_of_graduation: null, classification: null },
      ]);
    }
  }, [dataSource]);

  useEffect(() => {
    form.setFieldsValue({ educations: localDataSource });
  }, [localDataSource, form]);

  const handleEducationChange = useCallback((key, field, value) => {
    setLocalDataSource((prevData) =>
      prevData.map((education) =>
        education.key === key ? { ...education, [field]: value } : education,
      ),
    );
  }, []);

  const educationColumns = [
    {
      title: 'Trình độ',
      dataIndex: 'highest_education_level',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleEducationChange(
              record.key,
              'highest_education_level',
              e.target.value,
            )
          }
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Trường',
      dataIndex: 'school',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleEducationChange(record.key, 'school', e.target.value)
          }
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
          onChange={(e) =>
            handleEducationChange(record.key, 'major', e.target.value)
          }
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Năm học',
      dataIndex: 'school_year',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleEducationChange(record.key, 'school_year', e.target.value)
          }
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Năm bắt đầu',
      dataIndex: 'year_ended',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleEducationChange(record.key, 'year_ended', e.target.value)
          }
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
    {
      title: 'Năm tốt nghiệp',
      dataIndex: 'year_of_graduation',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleEducationChange(
              record.key,
              'year_of_graduation',
              e.target.value,
            )
          }
          className="border-none w-36 md:w-full"
        />
      ),
    },
    {
      title: 'Xếp loại',
      dataIndex: 'classification',
      render: (text, record) => (
        <Input
          value={text}
          onChange={(e) =>
            handleEducationChange(record.key, 'classification', e.target.value)
          }
          className="border-none w-36 md:w-full"
          style={{ margin: 0 }}
        />
      ),
    },
  ];

  return (
    <Form.Item name="educations">
      <Table
        dataSource={localDataSource}
        columns={educationColumns}
        pagination={false}
        rowKey={(record) => record.key}
        bordered
        size="small"
      />
    </Form.Item>
  );
};

export default EducationLanguageTable;
