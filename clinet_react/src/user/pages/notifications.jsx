import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
const { Search } = Input
import decodeJWT from '../../utils/decode-JWT'
const { Title, Text } = Typography
const { TabPane } = Tabs
import 'moment/locale/vi'
import './static/css/scroll_container.css'

export default function Notifications() {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userNameLogin = userFromLocalStorage?.login || 'none'
  const dispatch = useDispatch()
  const userId = userFromLocalStorage.id
  const page = 1
  const pageSize = 100
  const { t } = useTranslation()
  return (
    <div className="w-full h-screen bg-red-50">
      <Helmet>
        <title>ITM - {t('page_notifications.notifications')}</title>
      </Helmet>
      <div className="h-full pb-20 lg:pb-4">
        <div className="h-full p-2 overflow-auto scrollable-content">
          Notifications : {userNameLogin}
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            Exercitation velit consequat id excepteur fugiat dolore voluptate
            tempor fugiat.
          </p>
          <p>
            123 velit consequat id excepteur fugiat dolore voluptate tempor
            fugiat.
          </p>
        </div>
      </div>
    </div>
  )
}
