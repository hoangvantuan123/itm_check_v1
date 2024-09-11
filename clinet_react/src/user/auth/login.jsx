import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Link, useNavigate, useLocation } from 'react-router-dom'
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
import LogoGoogle from '../../assets/google_login.png'
import LogoApple from '../../assets/apple_login.png'
import { login } from '../../features/auth/API/authAPI'
import { loginGoogle } from '../../features/auth/API/authAPI'
import decodeJWT from '../../utils/decode-JWT'

const { Title, Text } = Typography

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const location = useLocation()
  const { loading, error } = useSelector((state) => state.auth)

  const onFinish = async (values) => {
    const { email, password } = values
    try {
      const data = await login({ email, password })
      localStorage.setItem('token', data.accessToken)
      localStorage.setItem('userInfo', JSON.stringify(data))
      window.location.href = '/u/workflows'
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/api/google/login' // Thay đổi URL tương ứng với endpoint của bạn
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get('token')
    const user = queryParams.get('user')
    const decoded = decodeJWT(token)

    if (token && decoded) {
      localStorage.setItem('token', token)
      localStorage.setItem('userInfo', JSON.stringify(decoded))

      window.location.href = '/u/workflows'
    }
  }, [location])

  const handleCallback = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    if (token) {
      localStorage.setItem('token', token)

      window.location.href = '/u/workflows'
    } else {
      console.error('Token not found in URL')
    }
  }

  return (
    <>
      <Helmet>
        <title>{t('auth.login')}</title>
      </Helmet>
      <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center p-2 lg:p-0">
        <div className="text-center">
          <Title level={2}>Chào mừng đến với Workflow Automation SaaS</Title>
        </div>
        <Form
          onFinish={onFinish}
          layout="vertical"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-5 lg:p-0 "
        >
          <Form.Item name="email">
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>
          {error && <Text type="danger">{error}</Text>}
          <Form.Item>
            <Button htmlType="submit" className="w-full" size="large">
              Tiếp tục
            </Button>
          </Form.Item>
        </Form>
        <Text>
          Bạn chưa có tài khoản? <Link to="/u/register">Đăng ký</Link>
        </Text>
        <Text className="mt-5">Hoặc</Text>
        <ul className="space-y-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-3 p-5 lg:p-0">
          <li>
            <a
              onClick={handleGoogleLogin}
              className="flex items-center  justify-center gap-2 rounded-lg px-4 py-2 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <Image src={LogoGoogle} className="w-4 h-4" />
              <span className="text-sm font-medium">
                Tiếp tục với tài khoản Google
              </span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2  justify-center rounded-lg px-4 py-2 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <Image src={LogoApple} className="w-4 h-4" />
              <span className="text-sm font-medium">
                Tiếp tục với tài khoản Apple
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
