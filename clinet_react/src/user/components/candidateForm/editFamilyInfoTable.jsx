import { useEffect, useState } from 'react';
import { Form, Table, Input, Button, Checkbox, InputNumber } from 'antd';

const EditFamilyInfoTable = ({ form, dataSource }) => {
  const [familyMembers, setFamilyMembers] = useState(dataSource || []);

  useEffect(() => {
    if (dataSource && JSON.stringify(dataSource) !== JSON.stringify(familyMembers)) {
      setFamilyMembers(dataSource);
    }
  }, [dataSource]);

  const handleFamilyMemberChange = (index, field, value) => {
    const updatedMembers = familyMembers.map((member, idx) => 
      idx === index ? { ...member, [field]: value } : member
    );
    setFamilyMembers(updatedMembers);
    form.setFieldsValue({ families: updatedMembers });
  };

  const addSibling = () => {
    if (familyMembers.filter(member => member.relationship === 'Anh/Em/Con').length < 3) {
      const newMember = {
        key: familyMembers.length,
        relationship: 'Anh/Em/Con',
        name_family: '',
        birthYear: '',
        workplace: '',
        job: '',
        phoneNumber: '',
        livingTogether: false,
      };
      const updatedMembers = [...familyMembers, newMember];
      setFamilyMembers(updatedMembers);
      form.setFieldsValue({ families: updatedMembers });
    }
  };

  const columns = [
    {
      title: 'Quan hệ',
      dataIndex: 'relationship',
      render: (text, record, index) => (
        <span>{text}</span>
      ),
    },
    {
      title: 'Họ tên',
      dataIndex: 'full_name',
      render: (text, record, index) => (
        <Form.Item 
          name={['families', index, 'full_name']} 
          style={{ margin: 0 }}
          initialValue={text}
        >
          <Input className="border-none w-[150px]" onChange={e => handleFamilyMemberChange(index, 'full_name', e.target.value)} />
        </Form.Item>
      ),
    },
    {
      title: 'Năm sinh',
      dataIndex: 'birth_year',
      render: (text, record, index) => (
        <Form.Item 
          name={['families', index, 'birth_year']} 
          style={{ margin: 0 }}
          initialValue={text}
        >
          <InputNumber className="border-none w-[80px]" onChange={value => handleFamilyMemberChange(index, 'birth_year', value)} />
        </Form.Item>
      ),
    },
    {
      title: 'Nơi làm việc',
      dataIndex: 'workplace',
      render: (text, record, index) => (
        <Form.Item 
          name={['families', index, 'workplace']} 
          style={{ margin: 0 }}
          initialValue={text}
        >
          <Input className="border-none w-[120px]" onChange={e => handleFamilyMemberChange(index, 'workplace', e.target.value)} />
        </Form.Item>
      ),
    },
    {
      title: 'Công việc',
      dataIndex: 'job',
      render: (text, record, index) => (
        <Form.Item 
          name={['families', index, 'job']} 
          style={{ margin: 0 }}
          initialValue={text}
        >
          <Input className="border-none w-[120px]" onChange={e => handleFamilyMemberChange(index, 'job', e.target.value)} />
        </Form.Item>
      ),
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone_number',
      render: (text, record, index) => (
        <Form.Item 
          name={['families', index, 'phone_number']} 
          style={{ margin: 0 }}
          initialValue={text}
        >
          <Input className="border-none w-[120px]" onChange={e => handleFamilyMemberChange(index, 'phone_number', e.target.value)} />
        </Form.Item>
      ),
    },
    {
      title: 'Sống chung',
      dataIndex: 'livingTogether',
      render: (text, record, index) => (
        <Form.Item
          name={['families', index, 'livingTogether']}
          valuePropName="checked"
          style={{ margin: 0 }}
        >
          <Checkbox checked={text} onChange={e => handleFamilyMemberChange(index, 'livingTogether', e.target.checked)} />
        </Form.Item>
      ),
    },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Thông tin gia đình</h2>
      <Table
        dataSource={familyMembers}
        columns={columns}
        pagination={false}
        rowKey="key"
        bordered
        scroll={{ x: true }}
        style={{ margin: '0 auto' }} 
        rowClassName="custom-row" 
        size="small"
      />
     {/*  <Button 
        onClick={addSibling} 
        type="dashed"
        disabled={familyMembers.filter(member => member.relationship === 'Anh/Em/Con').length >= 3}
        style={{ marginTop: '16px' }} 
      >
        Thêm hàng
      </Button> */}
    </>
  );
};

export default EditFamilyInfoTable;
