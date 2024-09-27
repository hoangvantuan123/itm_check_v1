import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
const { Search } = Input
import { useNavigate } from 'react-router-dom'
const { Title, Text } = Typography
const { TabPane } = Tabs
import 'moment/locale/vi'
import './static/css/scroll_container.css'

export default function DetailUserHrRecruitment() {
  const page = 1
  const pageSize = 100
  const { t } = useTranslation()
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()
  const handleNavigateToBack = (id) => {
    navigate(`/u/action=18/worker-recruitment-data`) // Replace with your actual route
  }
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
    <div className="w-full h-screen bg-white p-3">
      <Helmet>
        <title>ITM - {t('Công nhân')}</title>
      </Helmet>

      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-sm text-gray-600">
          <li
            onClick={handleNavigateToBack}
            className="flex cursor-pointer items-center gap-2"
          >
            <svg
              className=" w-5 h-5 opacity-65"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.5 12H3.67004"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a className="block transition  text-base hover:text-gray-800 ">
              {' '}
              {t('Quay lại bảng')}{' '}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  )
}
