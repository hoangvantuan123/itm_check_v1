import { useState } from 'react';
import { Form, Table, Input, Button, Checkbox, InputNumber, DatePicker } from 'antd';
import moment from 'moment'; // Đảm bảo đã import moment

const FamilyInfoTable = () => {
  const [familyMembers, setFamilyMembers] = useState([
    { key: 0, relationship: 'Bố', name_family: '', birthYear: '', workplace: '', job: '', phoneNumber: '', livingTogether: false },
    { key: 1, relationship: 'Mẹ', name_family: '', birthYear: '', workplace: '', job: '', phoneNumber: '', livingTogether: false },
    { key: 2, relationship: 'Vợ/chồng', name_family: '', birthYear: '', workplace: '', job: '', phoneNumber: '', livingTogether: false },
    { key: 3, relationship: 'Anh/Em/Con', name_family: '', birthYear: '', workplace: '', job: '', phoneNumber: '', livingTogether: false },
    { key: 4, relationship: 'Anh/Em/Con', name_family: '', birthYear: '', workplace: '', job: '', phoneNumber: '', livingTogether: false },
    { key: 5, relationship: 'Anh/Em/Con', name_family: '', birthYear: '', workplace: '', job: '', phoneNumber: '', livingTogether: false },
  ]);
  const handleFamilyMemberChange = (key, field, value) => {
    if (field === 'add') {
      // Thêm thành viên gia đình mới
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
      setFamilyMembers([...familyMembers, newMember]);
    } else {
      // Cập nhật thông tin thành viên hiện tại
      const updatedMembers = familyMembers.map(member =>
        member.key === key ? { ...member, [field]: value } : member
      );
      setFamilyMembers(updatedMembers);
    }
  };

  const columns = [
    {
      title: 'Quan hệ',
      dataIndex: 'relationship',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Họ tên',
      dataIndex: 'name_family',
      render: (text, record) => (
        <Form.Item     name="name_family">
          <Input
            value={text}
            className="border-none w-[200px]"
            onChange={(e) => handleFamilyMemberChange(record.key, 'name_family', e.target.value)}
          />
        </Form.Item>
      ),
    },
    {
      title: 'Năm sinh',
      dataIndex: 'birthYear',
      render: (text, record) => (

        <InputNumber
          className="border-none w-28"
          onChange={(e) => handleFamilyMemberChange(record.key, 'birthYear', e.target.value)}
        />
      ),
    },
    {
      title: 'Nơi làm việc',
      dataIndex: 'workplace',
      render: (text, record) => (
        <Input
          value={text}
          className="border-none w-28"
          onChange={(e) => handleFamilyMemberChange(record.key, 'workplace', e.target.value)}
        />
      ),
    },
    {
      title: 'Công việc',
      dataIndex: 'job',
      render: (text, record) => (
        <Input
          value={text}
          className="border-none w-28"
          onChange={(e) => handleFamilyMemberChange(record.key, 'job', e.target.value)}
        />
      ),
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      render: (text, record) => (
        <InputNumber
          className="border-none w-28"
          onChange={(e) => handleFamilyMemberChange(record.key, 'phoneNumber', e.target.value)}
        />
      ),
    },
    {
      title: 'Sống chung',
      dataIndex: 'livingTogether',
      render: (text, record) => (
        <Checkbox
          checked={text}
          onChange={(e) => handleFamilyMemberChange(record.key, 'livingTogether', e.target.checked)}
        />
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Thông tin gia đình</h2>
      <Table
        dataSource={familyMembers}
        columns={columns}
        pagination={false}
        rowKey="key"
        bordered
        scroll={{ x: true }}
      />
    </div>
  );
};

export default FamilyInfoTable;
