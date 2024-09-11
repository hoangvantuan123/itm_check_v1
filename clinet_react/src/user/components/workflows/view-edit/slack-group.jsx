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
  Tag,
  Tooltip,
} from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { updateNodesAsync } from '../../../../features/workflow/update-nodes'
const { Title, Text } = Typography
import { PlusOutlined } from '@ant-design/icons'
const { Option } = Select
import './style/index.css'
export default function EditSlackGroup({ data, nodeId, alignValue }) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [selectedHeadline, setSelectedHeadline] = React.useState('minute')
  const nodesData = useSelector((state) => state.nodes)
  const [nodeData, setNodeData] = useState(null)
  const [userIds, setUserIds] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [inputVisible, setInputVisible] = useState(false)

  const handleClose = (removedUserId) => {
    const newUserIds = userIds.filter((userId) => userId !== removedUserId)
    setUserIds(newUserIds)
  }

  const showInput = () => {
    setInputVisible(true)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleInputConfirm = () => {
    if (inputValue && userIds.indexOf(inputValue) === -1) {
      setUserIds([...userIds, inputValue])
    }
    setInputVisible(false)
    setInputValue('')
  }
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
    if (alignValue === 'Channel') {
      const channelData = {
        type: 'Channel',
        slack_url: values?.slack_url,
        content: values?.content,
      }
      dispatch(
        updateNodesAsync({ id: nodeId, updates: { details: channelData } }),
      )
    }

    if (alignValue === 'Direct Message') {
      const directMessageData = {
        type: 'Direct Message',
        token: values?.token,
        userIDs: userIds,
        content: values?.content,
      }
      dispatch(
        updateNodesAsync({
          id: nodeId,
          updates: { details: directMessageData },
        }),
      )
    }

    onClose()
  }
  const node = nodesData.data.find((node) => node.id === nodeId)
  return (
    <div>
      <button
        onClick={showDrawer}
        className="w-full items-center justify-center text-xs hover:bg-slate-100  font-semibold opacity-70 hover:opacity-85 rounded p-1"
      >
        Edit Slack
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
          {alignValue == 'Channel' && (
            <>
              <Form.Item label="Slack URL" name="slack_url">
                <Input className=" border" />
              </Form.Item>

              <Form.Item label="Content" name="content">
                <Input className=" border" />
              </Form.Item>
            </>
          )}
          {alignValue === 'Direct Message' && (
            <>
              <Form.Item label="Token" name="token">
                <Input className="border" />
              </Form.Item>

              <Form.Item label="User IDs" name="userID">
                {userIds.map((userId) => {
                  const isLongTag = userId.length > 20
                  const tagElem = (
                    <Tag
                      key={userId}
                      closable
                      onClose={() => handleClose(userId)}
                    >
                      {isLongTag ? `${userId.slice(0, 20)}...` : userId}
                    </Tag>
                  )
                  return isLongTag ? (
                    <Tooltip title={userId} key={userId}>
                      {tagElem}
                    </Tooltip>
                  ) : (
                    tagElem
                  )
                })}
                {inputVisible && (
                  <Input
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                  />
                )}
                {!inputVisible && (
                  <Tag
                    onClick={showInput}
                    style={{ background: '#fff', borderStyle: 'dashed' }}
                  >
                    <PlusOutlined /> New UserID
                  </Tag>
                )}
              </Form.Item>

              <Form.Item label="Content" name="content">
                <Input.TextArea rows={4} className="border" />
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
