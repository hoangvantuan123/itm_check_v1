import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
const { Search } = Input
import decodeJWT from '../../utils/decode-JWT'
const { Title, Text } = Typography
const { TabPane } = Tabs
import './static/css/scroll_container.css'

import 'moment/locale/vi'

export default function GeneralSettings() {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
    const userNameLogin = userFromLocalStorage?.login || 'none'
    const dispatch = useDispatch()
    const userId = userFromLocalStorage.id
    const page = 1
    const pageSize = 100
    const { t } = useTranslation()
    return (
        <div className="w-full h-screen bg-slate-50">
            <Helmet>
                <title>ITM - {t('page_setting.helmet_setting')}</title>
            </Helmet>
            <div className="h-full pb-20 lg:pb-4">
                <div className="h-full p-2 overflow-auto scrollable-content">
                    {' '}
                    Setting : {userNameLogin}{' '}
                </div>
            </div>
        </div>
    )
}
