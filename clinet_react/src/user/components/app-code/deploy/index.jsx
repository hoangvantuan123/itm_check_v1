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
import { createCoreCodeAsync } from '../../../../features/core-code/create-core'

import axios from 'axios'
moment.locale('vi')
const { Title, Text } = Typography

const { Option } = Select
import '../style/styles.css'

export default function DeployCode({
  selectedFunction,
  onSelectFunction,
  functionNames,
  projectData,
  codeRun,
}) {
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
  const getValue = (value) => {
    if (!value) return '*'
    if (isNaN(value)) return value
    return value.toString()
  }
  const onFinish = (values) => {
    const coreDeploy = {
      name_code: values?.function || 'none',
      app_code: projectData?.id,
      type: projectData?.type,
      description: projectData?.description,
      refreshToken: projectData?.refreshToken,
      user_id: projectData?.user_id,
      trigger: {
        schedule: {
          minute: `*/${getValue(values?.minute_time)}`,
          hour: `*/${getValue(values?.hour_number_time)}`,
          day: `*/${getValue(values?.days_number_time)}`,
          week: `*/${getValue(values?.weekdays_time)}`,
          month: `*/${getValue(values?.day_month_time)}`,
          dayOfWeek: '*',
        },
      },
      fun_code: {
        fun_name: values?.function,
        code: projectData?.fun_code?.code,
      },
    }
    dispatch(createCoreCodeAsync(coreDeploy))
      .then((core) => {
        onClose()
        message.success('Deploy successful')
      })
      .catch((error) => {
        console.error('Failed to create :', error.message)
      })
  }

  return (
    <div>
      <a
        onClick={showDrawer}
        className="flex items-center  justify-center gap-2 rounded-lg px-4 py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <span className="text-sm font-medium flex items-center gap-2">
          Deploy
        </span>
      </a>
      <Drawer title="Trigger" onClose={onClose} open={open} width={500}>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item label="Hàm kích hoạt" name="function">
            <Select
              size="large"
              style={{ width: '100%', marginBottom: 10 }}
              placeholder="Select Function"
              value={selectedFunction}
              onChange={onSelectFunction}
            >
              {functionNames.map((funcName, index) => (
                <Option key={index} value={funcName}>
                  {funcName}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Tùy chọn cài đặt thông báo " name="noti">
            <Select
              defaultValue="minute"
              style={{
                width: '100%',
              }}
              size="large"
              options={[
                {
                  value: 'minute',
                  label: 'Ngay lập tức',
                },
                {
                  value: 'hour',
                  label: 'Thông báo theo giờ',
                },
                {
                  value: 'day',
                  label: 'Thông báo theo ngày',
                },
                {
                  value: 'week',
                  label: 'Thông báo theo tuần',
                },
                {
                  value: 'month',
                  label: 'Thông báo theo tháng',
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Loại trình kích hoạt dựa trên thời gian"
            name="runtime"
          >
            <Select
              defaultValue="minute"
              style={{
                width: '100%',
              }}
              size="large"
              onChange={handleSelectChange}
              options={[
                {
                  value: 'minute',
                  label: 'Minute',
                },
                {
                  value: 'hour',
                  label: 'Hour',
                },
                {
                  value: 'day',
                  label: 'Day',
                },
                {
                  value: 'week',
                  label: 'Week',
                },
                {
                  value: 'month',
                  label: 'Month',
                },
              ]}
            />
          </Form.Item>

          {selectedHeadline == 'minute' && (
            <Form.Item label="Minute" name="minute_time">
              <InputNumber
                style={{
                  width: '100%',
                }}
                size="large"
              />
            </Form.Item>
          )}

          {selectedHeadline == 'hour' && (
            <>
              <Form.Item
                label="Hours
"
                name="hour_number_time"
              >
                <InputNumber
                  style={{
                    width: '100%',
                  }}
                  size="large"
                />
              </Form.Item>
              <Form.Item label="Minute" name="minute_time">
                <Select
                  defaultValue="0"
                  style={{
                    width: '100%',
                  }}
                  size="large"
                  options={[
                    {
                      value: '0',
                      label: 'at 0 minutes',
                    },
                    {
                      value: '5',
                      label: 'at 5 minutes',
                    },
                    {
                      value: '10',
                      label: 'at 10 minutes ',
                    },
                    {
                      value: '15',
                      label: 'at 15 minutes ',
                    },
                    {
                      value: '20',
                      label: 'at 20 minutes ',
                    },
                    {
                      value: '25',
                      label: 'at 25 minutes ',
                    },
                    {
                      value: '30',
                      label: 'at 30 minutes ',
                    },
                    {
                      value: '35',
                      label: 'at 35 minutes ',
                    },
                    {
                      value: '40',
                      label: 'at 40 minutes ',
                    },
                    {
                      value: '45',
                      label: 'at 45 minutes ',
                    },
                    {
                      value: '50',
                      label: 'at 50 minutes ',
                    },
                    {
                      value: '55',
                      label: 'at 55 minutes ',
                    },
                  ]}
                />
              </Form.Item>
            </>
          )}
          {selectedHeadline == 'day' && (
            <>
              <Form.Item
                label="Days
"
                name="days_number_time"
              >
                <InputNumber
                  style={{
                    width: '100%',
                  }}
                  size="large"
                />
              </Form.Item>
              <Form.Item label="Hour" name="hour_number_time">
                <Select
                  defaultValue="0"
                  size="large"
                  style={{
                    width: '100%',
                  }}
                  options={[
                    {
                      value: '0',
                      label: 'at 12:00 AM',
                    },
                    {
                      value: '1',
                      label: 'at 1:00 AM',
                    },
                    {
                      value: '2',
                      label: 'at 2:00 AM ',
                    },
                    {
                      value: '3',
                      label: 'at 3:00 AM ',
                    },
                    {
                      value: '4',
                      label: 'at 4:00 AM ',
                    },
                    {
                      value: '5',
                      label: 'at 5:00 AM ',
                    },
                    {
                      value: '6',
                      label: 'at 6:00 AM ',
                    },
                    {
                      value: '7',
                      label: 'at 7:00 AM ',
                    },
                    {
                      value: '8',
                      label: 'at 8:00 AM ',
                    },
                    {
                      value: '9',
                      label: 'at 9:00 AM ',
                    },
                    {
                      value: '10',
                      label: 'at 10:00 AM ',
                    },
                    {
                      value: '11',
                      label: 'at 11:00 AM ',
                    },
                    {
                      value: '12',
                      label: 'at 12:00 PM',
                    },
                    {
                      value: '13',
                      label: 'at 1:00 PM',
                    },
                    {
                      value: '14',
                      label: 'at 2:00 PM ',
                    },
                    {
                      value: '15',
                      label: 'at 3:00 PM ',
                    },
                    {
                      value: '16',
                      label: 'at 4:00 PM ',
                    },
                    {
                      value: '17',
                      label: 'at 5:00 PM ',
                    },
                    {
                      value: '18',
                      label: 'at 6:00 PM ',
                    },
                    {
                      value: '19',
                      label: 'at 7:00 PM ',
                    },
                    {
                      value: '20',
                      label: 'at 8:00 PM ',
                    },
                    {
                      value: '21',
                      label: 'at 9:00 PM ',
                    },
                    {
                      value: '22',
                      label: 'at 10:00 PM ',
                    },
                    {
                      value: '23',
                      label: 'at 11:00 PM ',
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Minutes
"
                name="minute_time"
              >
                <InputNumber
                  style={{
                    width: '100%',
                  }}
                  size="large"
                />
              </Form.Item>
            </>
          )}
          {selectedHeadline == 'week' && (
            <>
              <Form.Item label="Weekdays" name="weekdays_time">
                <Select
                  defaultValue="0"
                  mode="multiple"
                  allowClear
                  size="large"
                  style={{
                    width: '100%',
                  }}
                  options={[
                    {
                      value: '0',
                      label: 'Monday',
                    },
                    {
                      value: '1',
                      label: 'Tuesday',
                    },
                    {
                      value: '2',
                      label: 'Friday',
                    },
                    {
                      value: '3',
                      label: 'Saturday',
                    },
                    {
                      value: '4',
                      label: 'Sunday',
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Hour" name="hour_number_time">
                <Select
                  size="large"
                  defaultValue="0"
                  style={{
                    width: '100%',
                  }}
                  options={[
                    {
                      value: '0',
                      label: 'at 12:00 AM',
                    },
                    {
                      value: '1',
                      label: 'at 1:00 AM',
                    },
                    {
                      value: '2',
                      label: 'at 2:00 AM ',
                    },
                    {
                      value: '3',
                      label: 'at 3:00 AM ',
                    },
                    {
                      value: '4',
                      label: 'at 4:00 AM ',
                    },
                    {
                      value: '5',
                      label: 'at 5:00 AM ',
                    },
                    {
                      value: '6',
                      label: 'at 6:00 AM ',
                    },
                    {
                      value: '7',
                      label: 'at 7:00 AM ',
                    },
                    {
                      value: '8',
                      label: 'at 8:00 AM ',
                    },
                    {
                      value: '9',
                      label: 'at 9:00 AM ',
                    },
                    {
                      value: '10',
                      label: 'at 10:00 AM ',
                    },
                    {
                      value: '11',
                      label: 'at 11:00 AM ',
                    },
                    {
                      value: '12',
                      label: 'at 12:00 PM',
                    },
                    {
                      value: '13',
                      label: 'at 1:00 PM',
                    },
                    {
                      value: '14',
                      label: 'at 2:00 PM ',
                    },
                    {
                      value: '15',
                      label: 'at 3:00 PM ',
                    },
                    {
                      value: '16',
                      label: 'at 4:00 PM ',
                    },
                    {
                      value: '17',
                      label: 'at 5:00 PM ',
                    },
                    {
                      value: '18',
                      label: 'at 6:00 PM ',
                    },
                    {
                      value: '19',
                      label: 'at 7:00 PM ',
                    },
                    {
                      value: '20',
                      label: 'at 8:00 PM ',
                    },
                    {
                      value: '21',
                      label: 'at 9:00 PM ',
                    },
                    {
                      value: '22',
                      label: 'at 10:00 PM ',
                    },
                    {
                      value: '23',
                      label: 'at 11:00 PM ',
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Minutes
"
                name="minute_time"
              >
                <InputNumber
                  style={{
                    width: '100%',
                  }}
                  size="large"
                />
              </Form.Item>
            </>
          )}
          {selectedHeadline == 'month' && (
            <>
              <Form.Item label="Day of Month" name="days_number_time">
                <Select
                  defaultValue="0"
                  allowClear
                  size="large"
                  style={{
                    width: '100%',
                  }}
                  options={[
                    {
                      value: '1',
                      label: '1',
                    },
                    {
                      value: '2',
                      label: '2',
                    },
                    {
                      value: '3',
                      label: '3',
                    },
                    {
                      value: '4',
                      label: '4',
                    },
                    {
                      value: '5',
                      label: '5',
                    },
                    {
                      value: '6',
                      label: '6',
                    },
                    {
                      value: '7',
                      label: '7',
                    },
                    {
                      value: '8',
                      label: '8',
                    },
                    {
                      value: '9',
                      label: '9',
                    },
                    {
                      value: '10',
                      label: '10',
                    },
                    {
                      value: '11',
                      label: '11',
                    },
                    {
                      value: '12',
                      label: '12',
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Hour" name="hour_number_time">
                <Select
                  defaultValue="0"
                  style={{
                    width: '100%',
                  }}
                  size="large"
                  options={[
                    {
                      value: '0',
                      label: 'at 12:00 AM',
                    },
                    {
                      value: '1',
                      label: 'at 1:00 AM',
                    },
                    {
                      value: '2',
                      label: 'at 2:00 AM ',
                    },
                    {
                      value: '3',
                      label: 'at 3:00 AM ',
                    },
                    {
                      value: '4',
                      label: 'at 4:00 AM ',
                    },
                    {
                      value: '5',
                      label: 'at 5:00 AM ',
                    },
                    {
                      value: '6',
                      label: 'at 6:00 AM ',
                    },
                    {
                      value: '7',
                      label: 'at 7:00 AM ',
                    },
                    {
                      value: '8',
                      label: 'at 8:00 AM ',
                    },
                    {
                      value: '9',
                      label: 'at 9:00 AM ',
                    },
                    {
                      value: '10',
                      label: 'at 10:00 AM ',
                    },
                    {
                      value: '11',
                      label: 'at 11:00 AM ',
                    },
                    {
                      value: '12',
                      label: 'at 12:00 PM',
                    },
                    {
                      value: '13',
                      label: 'at 1:00 PM',
                    },
                    {
                      value: '14',
                      label: 'at 2:00 PM ',
                    },
                    {
                      value: '15',
                      label: 'at 3:00 PM ',
                    },
                    {
                      value: '16',
                      label: 'at 4:00 PM ',
                    },
                    {
                      value: '17',
                      label: 'at 5:00 PM ',
                    },
                    {
                      value: '18',
                      label: 'at 6:00 PM ',
                    },
                    {
                      value: '19',
                      label: 'at 7:00 PM ',
                    },
                    {
                      value: '20',
                      label: 'at 8:00 PM ',
                    },
                    {
                      value: '21',
                      label: 'at 9:00 PM ',
                    },
                    {
                      value: '22',
                      label: 'at 10:00 PM ',
                    },
                    {
                      value: '23',
                      label: 'at 11:00 PM ',
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Minutes
    "
                name="minute_time"
              >
                <InputNumber
                  style={{
                    width: '100%',
                  }}
                  size="large"
                />
              </Form.Item>
            </>
          )}
          <Form.Item>
            <div className="    flex gap-4 items-center justify-end ">
              <Button onClick={onClose}>Cancel</Button>
              <Button
                htmlType="submit"
                style={{ backgroundColor: '#ffffff', color: '#000000' }}
                className="border"
              >
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}
