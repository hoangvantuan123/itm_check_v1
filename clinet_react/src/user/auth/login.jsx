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
import { loginAuth } from '../../features/auth/API/authAPI'
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
    const { login, password } = values
    try {
      const data = await loginAuth({ login, password })
      localStorage.setItem('userInfo', JSON.stringify(data))
      window.location.href = '/u/home'
    } catch (error) {
      console.error(error.message)
    }
  }

 

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get('token')
    const user = queryParams.get('user')
    const decoded = decodeJWT(token)

    if (token && decoded) {
      localStorage.setItem('token', token)
      localStorage.setItem('userInfo', JSON.stringify(decoded))

      window.location.href = '/u/home'
    }
  }, [location])

  const handleCallback = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    if (token) {
      localStorage.setItem('token', token)

      window.location.href = '/u/home'
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
    <div className="mx-auto max-w-lg text-center mb-5">
      <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

      <p className="mt-4 text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
      ipsa culpa autem, at itaque nostrum!
      </p>
    </div>
    <Form onFinish={onFinish} layout="vertical" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-5 lg:p-0 ">
      <Form.Item name="login">
        <Input className="w-full rounded-lg border-gray-200 p-4  text-sm shadow-sm" size="large" prefix={<UserOutlined className="site-form-item-icon" />
} placeholder="Employee ID" />
      </Form.Item>
      <Form.Item name="password">
        <Input.Password className="w-full rounded-lg border-gray-200 p-4  text-sm shadow-sm" size="large" prefix={<LockOutlined className="site-form-item-icon" />
} placeholder="Password" />
      </Form.Item>
          {error && <Text type="danger">{error}</Text>}
          <Text>
          Bạn chưa có tài khoản? <Link to="/u/register">Đăng ký</Link>
        </Text>
      <Form.Item>
        <Button htmlType="submit" className="w-full rounded-lg border-gray-200 bg-indigo-600 text-white p-4 shadow-sm text-sm" size="large">
  Continue
        </Button>
      </Form.Item>
    </Form>


  </div>
</>
  )
}
