import { useState } from 'react'
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
} from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { updateNodesAsync } from '../../../../features/workflow/update-nodes'
const { Title, Text } = Typography

const { Option } = Select
import './style/index.css'
export default function EditTrigger({ data, nodeId }) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [selectedHeadline, setSelectedHeadline] = React.useState('minute')
  const nodesData = useSelector((state) => state.nodes)
  const [nodeData, setNodeData] = useState(null)
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
    const schedule = {
      minute: `*/${getValue(values?.minute_time)}`,
      hour: `*/${getValue(values?.hour_number_time)}`,
      day: `*/${getValue(values?.days_number_time)}`,
      week: `*/${getValue(values?.weekdays_time)}`,
      month: `*/${getValue(values?.day_month_time)}`,
      dayOfWeek: '*',
    }
    dispatch(
      updateNodesAsync({ id: nodeId, updates: { details: { schedule } } }),
    )
    onClose()
  }
  const node = nodesData.data.find((node) => node.id === nodeId)
  return (
    <div>
      <button
        onClick={showDrawer}
        className="w-full items-center justify-center text-xs hover:bg-slate-100  font-semibold opacity-70 hover:opacity-85 rounded p-1"
      >
        Edit trigger
      </button>
      <Drawer title={data?.label} onClose={onClose} open={open} width={500}>
        <Form
          onFinish={onFinish}
          labelCol={{
            flex: '120px',
          }}
          labelAlign="left"
          labelWrap
        >
          <Form.Item label=" Run every" name="runtime">
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
      </Drawer>{' '}
    </div>
  )
}
