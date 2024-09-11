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
  Upload,
  Table,
} from 'antd'
import moment from 'moment'
import AceEditor from 'react-ace'
import { useDispatch, useSelector } from 'react-redux'
import { RunnerCodeFilter } from '../../../../features/code-runner/API/runner-code-filter'
import { updateNodesAsync } from '../../../../features/workflow/update-nodes'
import { UploadOutlined } from '@ant-design/icons'
import Papa from 'papaparse'
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
export default function EditVnua({ data, nodeId, nodenew, alignValue }) {
  const dispatch = useDispatch()
  const [codeRun, setCodeRun] = useState(nodenew?.details?.query?.code)
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('email')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const refreshToken = userFromLocalStorage.refreshToken
  const sendTo = userFromLocalStorage.email
  const [inputValue, setInputValue] = useState('')
  const [tags, setTags] = useState('')
  const [sendOnEnter, setSendOnEnter] = useState(false)
  const [file, setFile] = useState()
  const [array, setArray] = useState(nodenew?.details?.data)
  const [fileName, setFileName] = useState('')
  const [selectedValue, setSelectedValue] = useState(nodenew?.details?.dateField);

    const handleSelectChange = (value) => {
        setSelectedValue(value);
    };
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const keys = Object?.keys(array[0]);

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


  const handleOnChange = (e) => {
    setFile(e.target.files[0])
    if (file) {
      setFileName(file.name)
    } else {
      setFileName('')
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          setArray(result.data)
        },
        header: true,
        skipEmptyLines: true,
      })
    }
  }
  const handleSave = async () => {
    try {
      await dispatch(
        updateNodesAsync({
          id: nodeId,
          updates: {
            details: {
              slack : "slack_vnua",
              type: alignValue,
              data: array,
              sheet_url: '',
              dateField: selectedValue,
            },
          },
        }),
      )
      message.success('Dữ liệu đã được lưu thành công!')
    } catch (error) {
      message.error('Đã xảy ra lỗi khi lưu dữ liệu. Vui lòng thử lại sau!')
    }
  }
  const headerKeys = Object.keys(Object.assign({}, ...array))
  const columns = headerKeys.map((key) => ({
    title: key,
    dataIndex: key,
    key: key,
  }))
  return (
    <div>
      <button
        onClick={showDrawer}
        className="w-full items-center justify-center text-xs hover:bg-slate-100  font-semibold opacity-70 hover:opacity-85 rounded p-1"
      >
        Edit Vnua
      </button>
      <Drawer  onClose={onClose} open={open} width={10000}   title={
          <div className="flex justify-between items-center">
            <span>{data?.label}</span>
            <button
              onClick={handleSave}
              className="flex items-center gap-1 hover:bg-slate-100 border rounded-lg p-1 px-2"
            >
              <Text strong>Save</Text>
            </button>
          </div>
        }>
        {alignValue === 'Import File' && (
          <div style={{ textAlign: 'center' }}>
            <form>
              <div className=" flex gap-2">
                <label
                  htmlFor="csvFileInput"
                  className="relative overflow-hidden bg-blue-500 text-white py-1 px-4 cursor-pointer rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
                >

                  <span>{fileName ? fileName : 'Chọn tệp CSV'}</span>
                  <input
                    type="file"
                    id="csvFileInput"
                    accept=".csv"
                    onChange={handleOnChange}
                    className="hidden"
                  />
                </label>

                <Button
                  onClick={handleOnSubmit}
                  style={{ backgroundColor: '#ffffff', color: '#000000' }}
                >
                  IMPORT CSV
                </Button>
                <Select
                style={{ width: 200 }}
                onChange={handleSelectChange}
                value={selectedValue}
            >
                {keys.map(key => (
                    <Option key={key} value={key}>{key}</Option>
                ))}
            </Select>
                
              </div>
            </form>
            <br />
            <Table
              dataSource={array}
              columns={columns}
              pagination={false}
              rowKey={(record, index) => index}
              size="small"
            />
          </div>
        )}
        {alignValue === 'Sheet URL' && <>ew</>}
      </Drawer>
    </div>
  )
}
