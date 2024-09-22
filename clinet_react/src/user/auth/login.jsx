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
import { loginAuth } from '../../features/auth/API/authAPI'
import decodeJWT from '../../utils/decode-JWT'
import Cookies from 'js-cookie'

const { Title, Text } = Typography

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const location = useLocation()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    const { login, password } = values

    try {
      setLoading(true)
      setError(null)

      const response = await loginAuth({ login, password })

      if (response.success) {
        localStorage.setItem('userInfo', JSON.stringify(response.data.user))
        localStorage.setItem('language', response.data.user.language)

        Cookies.set('accessToken', response.data.token)

        window.location.href = '/u/home'
      } else {
        setError(response.error)
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
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

  return (
    <>
      <Helmet>
        <title>{t('auth.login')}</title>
      </Helmet>
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-gray-50">
        {/* Cột chứa ảnh */}
        <div className="hidden lg:flex lg:w-1/2 h-full bg-gray-100 items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Description of image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cột chứa form login */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-5 py-10 lg:p-20 bg-gray-50">
          <div className="flex flex-col items-center top-20  absolute">
            <img
              src="https://via.placeholder.com/150" // Thay bằng link logo của bạn
              alt="Company Logo"
              className="h-16 w-16 mb-4 rounded-md"
            />
            <h1 className="text-xl font-semibold text-gray-700">
              ITM Semiconductor CO., Ltd.
            </h1>
          </div>

          <div className="mx-auto max-w-lg text-center mb-5">
            <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>
            <p className="mt-4 text-gray-500 text-xs">
              ITM Semiconductor CO., Ltd, a company that gives trust to
              customers and happiness to employees, value shared growth to
              shareholders.
            </p>
          </div>

          <Form
            onFinish={onFinish}
            layout="vertical"
            className="w-full sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2"
          >
            <Form.Item
              name="login"
              rules={[
                { required: true, message: 'Please enter your Employee ID!' },
              ]}
            >
              <Input
                className="w-full rounded-lg border-gray-200 bg-gray-50 p-4 text-sm shadow-sm"
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Employee ID"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please enter your Password!' },
              ]}
            >
              <Input.Password
                className="w-full rounded-lg border-gray-200 bg-gray-50 p-4 text-sm shadow-sm"
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>
            {error && (
              <div className="flex items-center justify-center mb-5 gap-2 self-end rounded bg-red-100 p-1 text-red-600">
                <span className="text-xs font-medium">{error}</span>
              </div>
            )}
            <Form.Item>
              <Button
                htmlType="submit"
                className="w-full rounded-lg h-full bg-indigo-600 text-white p-4 shadow-sm text-sm"
                size="large"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}
