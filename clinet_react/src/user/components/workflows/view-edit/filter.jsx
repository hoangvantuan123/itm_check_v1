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
} from 'antd'
import moment from 'moment'
import AceEditor from 'react-ace'
import { useDispatch, useSelector } from 'react-redux'
import { RunnerCodeFilter } from '../../../../features/code-runner/API/runner-code-filter'
import { updateNodesAsync } from '../../../../features/workflow/update-nodes'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-monokai'
const { Title, Text } = Typography

const { Option } = Select
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
export default function EditFilter({ data, code, nodenew, nodesData }) {
  const dispatch = useDispatch()
  const [codeRun, setCodeRun] = useState(code)
  const [open, setOpen] = useState(false)
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [selectedNodeId, setSelectedNodeId] = useState(null)
  const filteredNodes = nodesData.data.filter(
    (node) => node.type === 'function',
  )
  const [inputFilter, setInputFilter] = useState(
    nodenew?.details?.filter?.expression,
  )
  useEffect(() => {
    setCodeRun(code)
  }, [code])

  const handleRunCodeClick = () => {
    RunnerCodeFilter(codeRun, setOutput, setError)
  }
  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const onChangeFilter = (e) => {
    setInputFilter(e.target.value)
  }
  const handleSelectChange = (value) => {
    setSelectedNodeId(value)
  }
  const options = filteredNodes.map((node) => ({
    value: node.id,
    label: node.data.label,
  }))
  const onSubmitFilter = () => {
    const filter = {
      input: selectedNodeId,
      expression: inputFilter,
    }
    dispatch(
      updateNodesAsync({ id: nodenew.id, updates: { details: { filter } } }),
    )
    onClose()
  }
  return (
    <div>
      <button
        onClick={showDrawer}
        className="w-full items-center justify-center text-xs hover:bg-slate-100  font-semibold opacity-70 hover:opacity-85 rounded p-1"
      >
        Edit filter
      </button>
      <Drawer title={data?.label} onClose={onClose} open={open} width={600}>
        <div className=" w-full border rounded-lg p-2 mb-2 flex items-center justify-between">
          <button
            onClick={handleRunCodeClick}
            className="flex items-center gap-1 hover:bg-slate-100  border rounded-lg p-1"
          >
            {' '}
            <RunIcon /> <Text strong> Run</Text>
          </button>
          <button className="flex items-center gap-1 hover:bg-slate-100  border rounded-lg p-1">
            {' '}
            <MoreIcon />{' '}
          </button>
        </div>
        <div className="flex items-center  gap-3">
          {' '}
          <Text className="w-[300px]">Filter input</Text>
          <Select
            showSearch
            style={{ width: '100%' }}
            size="large"
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={options}
            onChange={handleSelectChange}
            value={selectedNodeId}
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </div>
        <div className="flex items-center  gap-4 mt-5">
          {' '}
          <Text className="w-[300px]">Expression</Text>
          <Input
            className=" border "
            size="large"
            value={inputFilter}
            onChange={onChangeFilter}
          />
        </div>
        <Form.Item>
          <div className="    flex gap-4 items-center justify-end ">
            <Button onClick={onClose}>Cancel</Button>
            <Button
              htmlType="submit"
              onClick={onSubmitFilter}
              style={{ backgroundColor: '#ffffff', color: '#000000' }}
              className="border"
            >
              Submit
            </Button>
          </div>
        </Form.Item>
      </Drawer>
    </div>
  )
}
