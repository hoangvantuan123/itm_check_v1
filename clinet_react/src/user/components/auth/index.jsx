import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Checkbox, Form, Input, Typography, Image } from 'antd'
import { Avatar, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Setting from './settings'
const { Title, Text } = Typography
const SettingIcon = () => {
  return (
    <svg
      className="w-5 h-5 opacity-65 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const Border = () => {
  return <div className="border-[0.3px] w-full"></div>
}

export default function AuthUser({ collapsed }) {
  const [showModal, setShowModal] = useState(false)
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userNameLogin = userFromLocalStorage?.login || 'none'
  const { t } = useTranslation()
  const onClickShowModal = () => {
    setShowModal(!showModal)
  }
  const showPageUserSettings = () => {
    const newPath = `u/settings`
    window.location.href = newPath
  }
  const handleLogout = (record) => {
    const newPath = `/u/login`
    window.location.href = newPath
  }
  return (
    <div className="p-1 mt-3 mb-3 cursor-pointer ">
      {collapsed ? (
        <div onClick={onClickShowModal} className="flex items-center justify-center" >
          <Avatar
            icon={<UserOutlined />} />
        </div>
      ) : (
        <>
          <div
            onClick={onClickShowModal}
            className="flex items-center justify-between gap-2 rounded-lg px-4 py-2 cursor-pointer text-gray-500 bg-gray-100 hover:text-gray-700"
          >
            <div className="flex items-center gap-2">
              <Avatar shazpe="square" icon={<UserOutlined />} />
              <Text className="text-sm font-medium">{userNameLogin}</Text>
            </div>
          </div>


        </>
      )}
      {showModal && (
        <>
          <div className=" w-[350px] mt-2 h-auto  border rounded-lg fixed z-50 bg-white ml-4 shadow-lg">
            <div className="p-2">
              <Text className=" text-xs font-medium opacity-70">
                {userNameLogin}
              </Text>
            </div>
            <Border />
            <div className="p-2">
              <Setting userNameLogin={userNameLogin} />
            </div>

            <div className=" bg-slate-50 w-full h-auto p-2 rounded-e-lg">
              <div
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg px-4 py-3 cursor-pointer text-red-600 hover:bg-red-100 hover:text-red-600"
              >
                <Text className="text-[12px]  text-red-600">
                  {' '}
                  {t('model_setting_user.logout')}
                </Text>
              </div>
            </div>
            <Border />
            <div className=" bg-slate-50 w-full h-auto p-2 rounded-e-lg">
              <div className="flex items-center gap-2 rounded-lg px-4 py-3 cursor-pointer text-gray-500 hover:bg-gray-200 hover:text-gray-700">
                <Text className="text-[12px] ">
                  {t('model_setting_user.download_ios')}
                </Text>
              </div>
              <div className="flex items-center gap-2 rounded-lg px-4 py-3 cursor-pointer text-gray-500 hover:bg-gray-200 hover:text-gray-700">
                <Text className="text-[12px] ">
                  {t('model_setting_user.download_android')}
                </Text>
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  )
}
