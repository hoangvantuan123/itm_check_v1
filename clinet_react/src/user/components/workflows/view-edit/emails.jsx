import { useState, useEffect } from 'react'
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
  Segmented,
  Tag,
  message,
} from 'antd'
import moment from 'moment'
import AceEditor from 'react-ace'
import { useDispatch, useSelector } from 'react-redux'
import { RunnerCodeFilter } from '../../../../features/code-runner/API/runner-code-filter'
import { updateNodesAsync } from '../../../../features/workflow/update-nodes'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-monokai'
const { Title, Text } = Typography

const { Option } = Select
const { TextArea } = Input
import './style/index.css'
const RunIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-65   "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const MoreIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-65   "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9965 12H16.0054"
        stroke="#292D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9955 12H12.0045"
        stroke="#292D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99451 12H8.00349"
        stroke="#292D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default function EditEmails({ data, nodeId, nodenew }) {
  console.log('nodenew', nodenew)
  const dispatch = useDispatch()
  const [codeRun, setCodeRun] = useState(nodenew?.details?.query?.code)
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const [open, setOpen] = useState(false)
  const [alignValue, setAlignValue] = React.useState('GUI')
  const [value, setValue] = React.useState('email')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const refreshToken = userFromLocalStorage.refreshToken
  const sendTo = userFromLocalStorage.email
  const [inputValue, setInputValue] = useState('') // State để lưu giá trị nhập vào
  const [tags, setTags] = useState(nodenew?.details?.to) // State để lưu các tag đã chọn
  const [sendOnEnter, setSendOnEnter] = useState(false)
  const handleInputChange = (e) => {
    setInputValue(e.target.value) // Cập nhật giá trị nhập vào
  }

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]) // Thêm giá trị mới vào danh sách các tag
      setInputValue('') // Đặt lại giá trị nhập vào thành rỗng
    }
  }

  const handleTagClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag) // Lọc ra các tag không bị xóa
    setTags(newTags) // Cập nhật lại danh sách các tag
  }
  useEffect(() => {
    setCodeRun(nodenew?.details?.query?.code)
  }, [nodenew])

  const handleRunCodeClick = () => {
    RunnerCodeFilter(codeRun, setOutput, setError)
  }
  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const handleChange = (value) => {
    setValue(value)
  }
  const onFinish = (values) => {
    const emails = {
      type: value,
      refreshToken: refreshToken,
      to: tags,
      send: sendTo,
      subject: values.subject,
      body: values.body,
    }
    dispatch(updateNodesAsync({ id: nodeId, updates: { details: emails } }))
    message.success('Upload successful')
  }

  return (
    <div>
      <button
        onClick={showDrawer}
        className="w-full items-center justify-center text-xs hover:bg-slate-100  font-semibold opacity-70 hover:opacity-85 rounded p-1"
      >
        Edit Mails
      </button>
      <Drawer title={data?.label} onClose={onClose} open={open} width={800}>
        {alignValue == 'GUI' && (
          <div className="mt-4">
            {value == 'email' && (
              <div>
                <Form name="basic" onFinish={onFinish} layout="vertical">
                  <Form.Item label="To" name="to">
                    <div>
                      {tags.map((tag) => (
                        <Tag
                          key={tag}
                          closable
                          onClose={() => handleTagClose(tag)}
                          style={{ marginRight: 5, marginTop: 10 }}
                        >
                          {tag}
                        </Tag>
                      ))}
                      <Input
                        type="text"
                        value={inputValue}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleInputConfirm}
                        onPressEnter={handleInputConfirm}
                        style={{ width: '100px' }} // Điều chỉnh kích thước input theo ý muốn
                      />
                    </div>
                  </Form.Item>
                  <Form.Item label="Subject" name="subject">
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item label="Body" name="body">
                    <TextArea rows={6} />
                  </Form.Item>
                  <Form.Item>
                    <div className="    flex gap-4 items-center justify-end mt-4 ">
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
              </div>
            )}
          </div>
        )}
      </Drawer>
    </div>
  )
}
