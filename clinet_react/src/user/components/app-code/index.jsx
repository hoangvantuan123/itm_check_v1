import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import moment from 'moment'
import { AudioOutlined } from '@ant-design/icons'
import { Input, Space, Table, Radio, Tabs } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import HeaderItem from './header'
import Tools from './tools'
import Translate from './item-translate'
import Trigger from './item-trigger'
import ExecutionHistory from './execution-history'
import './style/styles.css'
const { Search } = Input
const FileCode = () => {
  return (
    <svg
      className="w-4 h-4 opacity-80"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 22H16C19.5 22 21 20 21 17V7C21 4 19.5 2 16 2H8C4.5 2 3 4 3 7V14"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17L2 19L4 21"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeL
        inecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 17L9 19L7 21"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const TriggerIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-80"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.08998 13.28H9.17998V20.48C9.17998 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52002C14.81 1.84002 13.9 1.50002 12.79 2.76002L5.21998 11.36C4.29998 12.42 4.68998 13.28 6.08998 13.28Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
const TimeIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-80"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8V13"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 2H15"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.9 18.5V17.34C14.9 15.91 15.92 15.32 17.16 16.04L18.16 16.62L19.16 17.2C20.4 17.92 20.4 19.09 19.16 19.81L18.16 20.39L17.16 20.97C15.92 21.69 14.9 21.1 14.9 19.67V18.5Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

const SettingIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-80"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
const items = [
  /*   {
    key: '1',
    label: 'Tổng quan',
    children: 'Content of Tab Pane 1',
  }, */
  {
    key: '2',
    label: 'Trình biên dịch',
    icon: <FileCode />,
    children: <Translate />,
  },
  {
    key: '3',
    label: 'Trình kích hoạt',
    icon: <TriggerIcon />,
    children: <Trigger />,
  },
  {
    key: '4',
    label: 'Lịch sử thực thi',
    icon: <TimeIcon />,
    children: <ExecutionHistory />,
  },
  {
    key: '5',
    label: 'Cài đặt',
    icon: <SettingIcon />,
    children: 'Content of Tab Pane 3',
  },
]
export default function Code() {
  const dispatch = useDispatch()
  const [mode, setMode] = useState('left')
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))

  const userId = userFromLocalStorage.id

  const handleModeChange = (e) => {
    setMode(e.target.value)
  }
  return (
    <div className=" w-full h-screen  bg-white ">
      <Helmet>
        <title>App Code</title>
      </Helmet>
      <HeaderItem />
      <div className="flex w-full h-screen">
        <Tabs
          defaultActiveKey="2"
          tabPosition={mode}
          className="flex w-full h-screen"
        >
          {items.map((item) => (
            <Tabs.TabPane
              key={item.key}
              tab={
                <Space>
                  {item.icon}
                  <span>{item.label}</span>
                </Space>
              }
            >
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
