import { Button, Form, Input, Select, Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;
const { Option } = Select;

export default function KeyMenu02() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('admin@cloud.com');
  const [language, setLanguage] = useState('Vietnamese / Tiếng Việt');
  const [timezone, setTimezone] = useState('');

  const onFinish = (values) => {
    setEmail(values.email);
    setLanguage(values.language);
    setTimezone(values.timezone);
  };

  return (
    <div className="p-4">
      <Title level={4}>{t('personal_settings_key_menu_02.personalized_customization')}</Title>
      
      <Form
        name="notification_settings"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        {/* Phương thức xử lý thông báo */}
        <Title level={5}>{t('personal_settings_key_menu_02.notification_method')}</Title>
        <Form.Item
          name="notification_method"
          rules={[{ required: true, message: t('personal_settings_key_menu_02') }]}
        >
          <Select placeholder={t('select_notification_method')} size="large">
            <Option value="email">{t('personal_settings_key_menu_02.email')}</Option>
            <Option value="system">{t('personal_settings_key_menu_02.system')}</Option>
          </Select>
        </Form.Item>

        {/* Email */}
        <Form.Item label={t('personal_settings_key_menu_02.email')} name="email">
          <Input
            size="large"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        {/* Ngôn ngữ */}
        <Form.Item label={t('personal_settings_key_menu_02.language')} name="language">
          <Select
            size="large"
            value={language}
            onChange={(value) => setLanguage(value)}
          >
            <Option value="vietnamese">{t('personal_settings_key_menu_02.vietnamese')}</Option>
            <Option value="english">{t('personal_settings_key_menu_02.english')}</Option>
            {/* Thêm các ngôn ngữ khác nếu cần */}
          </Select>
        </Form.Item>

        {/* Múi giờ */}
        <Form.Item label={t('personal_settings_key_menu_02.timezone')} name="timezone">
          <Input
            size="large"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="px-7" size="default">
            {t('personal_settings_key_menu_02.save')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
