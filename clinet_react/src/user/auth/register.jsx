import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Image,
  notification,
} from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { registerUser } from '../../features/auth/API/registerAPI'
const { Title, Text } = Typography

export default function Register() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { loading, error } = useSelector((state) => state.auth)

  const onFinish = async (values) => {
    const { email, password, firstName, lastName } = values
    try {
      const data = await registerUser({ email, password, firstName, lastName })
      window.location.href = '/u/login'
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <>
      <Helmet>
        <title>{t('auth.register')}</title>
      </Helmet>
      <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center p-2 lg:p-0">
        <div className="text-center">
          <Title level={2}>Đăng ký Workflow Automation SaaS</Title>
        </div>
        <Form
          onFinish={onFinish}
          layout="vertical"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-5 lg:p-0 "
        >
          <Form.Item name="firstName">
            <Input size="large" placeholder="First Name" />
          </Form.Item>
          <Form.Item name="lastName">
            <Input size="large" placeholder="Last Name" />
          </Form.Item>
          <Form.Item name="email">
            <Input size="large" placeholder="Email" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="w-full" size="large">
              Tiếp tục
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}
