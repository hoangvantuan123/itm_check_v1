import { useState, useEffect, useCallback } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Image,
  notification,
  Drawer,
  Select,
  TimePicker,
  InputNumber,
  message,
} from 'antd'
import moment from 'moment'
import 'moment/locale/vi'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
moment.locale('vi')
const { Title, Text } = Typography
const { Option } = Select
import '../style/styles.css'

export default function Show({ details }) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userId = userFromLocalStorage.id
  const [open, setOpen] = useState(false)
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [selectedHeadline, setSelectedHeadline] = React.useState('minute')

  const handleSelectChange = (value) => {
    setSelectedHeadline(value)
  }

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <a
        onClick={showDrawer}
        className="flex items-center  justify-center gap-2 rounded-lg px-4 py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <span className="text-sm font-medium flex items-center gap-2">
          Show
        </span>
      </a>
      <Drawer title="Show" onClose={onClose} open={open} width={500}>
        {details.map((detail, index) => (
          <h4 key={index}>{detail}</h4>
        ))}
      </Drawer>
    </div>
  )
}
