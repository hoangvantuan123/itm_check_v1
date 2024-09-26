import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Typography, Dropdown, Menu, Spin } from 'antd'
import Logo from '../../assets/f_logo.png'
const { Title, Text } = Typography
import { useTranslation } from 'react-i18next'
const PassFormPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [language, setLanguage] = useState('Tiếng Việt')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const handleSubmit = (values) => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      navigate('/apply/candidate-application/view=form')
    }, 2000)
  }

  const handleMenuClick = (e) => {
    setLanguage(e.key)
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Tiếng Việt">{t('Tiếng Việt')}</Menu.Item>
      <Menu.Item key="English">{t('English')}</Menu.Item>
      <Menu.Item key="Français">{t('Français')}</Menu.Item>
      <Menu.Item key="日本語">{t('日本語')}</Menu.Item>
    </Menu>
  )

  return (
    <div className="flex flex-col h-screen bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center justify-between border p-2 rounded-lg bg-slate-600 ">
          {/* <img src={Logo} alt="Logo" className="mr-2" style={{ maxHeight: '40px' }} /> */}{' '}
          {/* Adjust logo size */}
        </div>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button className="border-none p-2 bg-none shadow-none">
            {language}
          </Button>
        </Dropdown>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center">
        <Title level={2} className="text-center">
          {t('Chào mừng bạn đến với mẫu tờ khai online!')}
        </Title>
        <Text
          type="secondary"
          style={{
            marginBottom: '20px',
            display: 'block',
            textAlign: 'center',
          }}
        >
          {t('Vui lòng nhập số điện thoại của bạn để bắt đầu.')}
        </Text>

        {loading ? (
          <Spin size="large" />
        ) : (
          <Form
            onFinish={handleSubmit}
            style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}
          >
            <Form.Item
              name="phoneNumber"
              rules={[
                { required: true, message: t('Vui lòng nhập số điện thoại!') },
                { len: 10, message: t('Số điện thoại phải có 10 chữ số!') },
                {
                  pattern: /^\d+$/,
                  message: t('Số điện thoại chỉ bao gồm các chữ số!'),
                },
              ]}
            >
              <Input
                value={phoneNumber}
                className="bg-white hover:bg-white"
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={t('Nhập số điện thoại')}
                type="tel"
                size="large"
                inputMode="numeric"
              />
            </Form.Item>

            <Form.Item>
              <Button
                size="large"
                className="w-full rounded-lg h-full border-none bg-indigo-600 text-white shadow-sm"
                htmlType="submit"
              >
                {t('Tiếp tục')}
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  )
}

export default PassFormPage
