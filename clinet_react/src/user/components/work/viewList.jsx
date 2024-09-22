import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  ClockCircleOutlined,
  CalendarOutlined,
  AppstoreOutlined,
} from '@ant-design/icons'

import { Tag, Button } from 'antd'
import moment from 'moment'

export default function ListView({ setViewModeList, viewModeList }) {
  const [groupBy, setGroupBy] = useState('day')
  const [selectedDate, setSelectedDate] = useState(moment())
  const [showListContent, setListContent] = useState(false)
  const [highlightedDate, setHighlightedDate] = useState(moment())
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 820
      setIsMobile(mobile)

      if (!mobile) {
        navigate('/u/action=6/time_tracking')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [navigate])

  const handleDateChange = (date) => {
    setSelectedDate(date)
    setHighlightedDate(date)
    setListContent(true)
  }

  const getWeekDates = (date) => {
    const startOfWeek = date.clone().startOf('week')
    return Array.from({ length: 7 }, (_, i) =>
      startOfWeek.clone().add(i, 'days'),
    )
  }

  const getMonthDates = (date) => {
    const startOfMonth = date.clone().startOf('month')
    const endOfMonth = date.clone().endOf('month')
    const monthDates = []

    for (
      let d = startOfMonth.clone();
      d.isBefore(endOfMonth.clone().add(1, 'days'));
      d.add(1, 'days')
    ) {
      if (d.month() === date.month()) {
        monthDates.push(d.clone())
      }
    }
    return monthDates
  }

  const weekDates = getWeekDates(selectedDate)
  const monthDates = getMonthDates(selectedDate)

  return (
    <div className="h-screen overflow-hidden bg-gray-50">
      <div className="p-2">
        {viewModeList === 'month' ? (
          <div className="grid grid-cols-7 gap-2">
            {monthDates.map((date, index) => (
              <div
                key={index}
                className={`text-center rounded-lg pb-1 ${date.isSame(moment(), 'day') ? 'bg-blue-100 text-blue-600' : ''} ${date.isSame(highlightedDate, 'day') ? 'bg-blue-100' : ''}`}
                onClick={() => handleDateChange(date)}
              >
                {index < 7 && (
                  <span className="text-xs text-gray-500 ">
                    {date.format('ddd')}
                  </span>
                )}
                <br />
                {date.format('DD')}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-between rounded-lg  mb-4">
            {weekDates.map((date, index) => (
              <div
                key={index}
                 className={`flex-1 text-center p-2  m-1 rounded-lg ${date.isSame(moment(), 'day') ? 'bg-blue-100 text-blue-600' : ''} ${date.isSame(highlightedDate, 'day') ? 'bg-blue-100' : ''}`} 
                onClick={() => handleDateChange(date)}
              >
                <span className="text-xs text-gray-500">
                  {date.format('ddd')}
                </span>
                <br />
                {date.format('DD')}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 h-screen  pb-5 bg-white rounded-lg overflow-hidden">
        <h3 className="text-lg mb-2 font-semibold">
          {selectedDate.format('YYYY-MM-DD')}
        </h3>
        <h4 className="text-gray-600 mb-4">Thời gian đã chấm công</h4>

        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <h4 className="text-blue-600">Check-in</h4>
          <p className="text-gray-800">14:00</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-4">
          <h4 className="text-green-600">Check-out</h4>
          <p className="text-gray-800">12:00</p>
        </div>
      </div>
    </div>
  )
}
