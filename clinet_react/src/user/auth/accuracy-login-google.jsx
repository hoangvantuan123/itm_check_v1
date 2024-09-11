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

export default function AccuracyLoginGoogle() {
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
    window.location.href = 'http://localhost:3000/api/auth/accuracy/google'
  }

  return (
    <>
      <Helmet>
        <title>{t('auth.login')}</title>
      </Helmet>
      <div className="overflow-hidden flex items-center  justify-between p-2 ">
        <div className=" h-full w-full rounded-lg   ">
          <section className="bg-gray-900 text-white rounded-lg">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  Understand User Flow.
                  <span className="sm:block"> Increase Conversion. </span>
                </h1>

                <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                    href="#"
                  >
                    Get Started
                  </a>

                  <a
                    className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className=" w-full p-20">
          <Title level={2}>Sign in to Workflow</Title>

          <ul className="space-y-1 ">
            <li>
              <a
                onClick={handleGoogleLogin}
                className="flex items-center  justify-center gap-2 rounded-full px-4 py-4 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <Image src={LogoGoogle} className="w-4 h-6" />
                <span className="text-sm font-medium">
                  Tiếp tục với tài khoản Google
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
