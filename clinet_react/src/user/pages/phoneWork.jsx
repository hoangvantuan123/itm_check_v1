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
import TimeTracking from './TimeTracking'

export default function PhoneWork() {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 820)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div className="w-full h-screen bg-slate-50">
            <Helmet>
                <title>ITM - {t('Công việc')}</title>
            </Helmet>
            <TimeTracking />

        </div>
    )
}
