import { Button, Space, Table, Tag, Typography, Modal, Form, Input } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

const columns = [
  {
    title: 'Thiết bị',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Đã thêm vào',
    key: 'permissions',
    render: (_, record) => <a>{record.permissions}</a>,
  },
  {
    title: 'Hành động',
    key: 'actions',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Chrome trên MacOS',
    permissions: '03/08/2024 13:25:03',
  },
  {
    key: '2',
    name: 'Firefox trên Windows',
    permissions: '12/07/2024 09:15:45',
  },
  {
    key: '3',
    name: 'Safari trên iOS',
    permissions: '22/06/2024 16:30:20',
  },
  {
    key: '4',
    name: 'Edge trên Linux',
    permissions: '01/09/2024 10:05:33',
  },
  {
    key: '5',
    name: 'Opera trên Android',
    permissions: '15/08/2024 11:40:10',
  },
];

const KeyMenu03 = () => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleChangePassword = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        
        console.log('New Password:', values.new_password);
        setIsModalVisible(false);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <div>
      <div className="mb-4">
        <Title level={4}>{t('personal_settings_key_menu_03.password_management')}</Title>
        <Button className="rounded-lg  border-gray-200 bg-indigo-600 text-white p-4 shadow-sm text-sm" onClick={handleChangePassword}>
        {t('personal_settings_key_menu_03.change_password')}
        </Button>
      </div>

      <Title level={4}>{t('personal_settings_key_menu_03.device_list')}</Title>
      <Table columns={columns} dataSource={data} />
      <div className="mt-4">
        <Title level={4}>{t('personal_settings_key_menu_03.other_devices')}</Title>
        <Button className="rounded-lg  border-gray-200 bg-indigo-600 text-white p-4 shadow-sm text-sm">
        {t('personal_settings_key_menu_03.sign_out_of_all_devices')}
        </Button>
      </div>
    
      <Modal
        title={t('personal_settings_key_menu_03.change_password')}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={t('personal_settings_key_menu_03.save')}
        cancelText={t('personal_settings_key_menu_03.cancel')}
      >
        <Form
          form={form}
          layout="vertical"
          name="change_password"
        >
          <Form.Item
            label={t('personal_settings_key_menu_03.label_new_pass')}
            name="new_password"
          >
            <Input.Password placeholder={t('personal_settings_key_menu_03.label_new_pass')} />
          </Form.Item>

          <Form.Item
            label={t('personal_settings_key_menu_03.label_succ_pass')}
            name="confirm_password"
            dependencies={['new_password']}
          >
            <Input.Password placeholder={t('personal_settings_key_menu_03.label_succ_pass')} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default KeyMenu03;
