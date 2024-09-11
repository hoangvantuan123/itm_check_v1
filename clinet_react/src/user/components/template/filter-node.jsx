import { useCallback, useState, useEffect } from 'react'
import { Handle, Position } from 'reactflow'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Image,
  notification,
  Select,
  TimePicker,
} from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { updateNodesAsync } from '../../../features/workflow/update-nodes'
import EditFilter from '../workflows/view-edit/filter'
import AceEditor from 'react-ace'
import ShowMore from './show-more-filter'
const { Option } = Select
const { Title, Text } = Typography

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-monokai'
const FilterIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-65   "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.41 20.79L12.0001 21.7C10.6901 22.51 8.87006 21.6 8.87006 19.98V14.63C8.87006 13.92 8.47006 13.01 8.06006 12.51L4.22003 8.47C3.71003 7.96 3.31006 7.06001 3.31006 6.45001V4.13C3.31006 2.92 4.22008 2.01001 5.33008 2.01001H18.67C19.78 2.01001 20.6901 2.92 20.6901 4.03V6.25C20.6901 7.06 20.1801 8.07001 19.6801 8.57001"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0799 11.89L13.5399 15.43C13.3999 15.57 13.2699 15.83 13.2399 16.02L13.0499 17.37C12.9799 17.86 13.3199 18.2 13.8099 18.13L15.1599 17.94C15.3499 17.91 15.6199 17.78 15.7499 17.64L19.2899 14.1C19.8999 13.49 20.1899 12.78 19.2899 11.88C18.3999 10.99 17.6899 11.28 17.0799 11.89Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.58 12.39C16.88 13.47 17.7199 14.31 18.7999 14.61"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
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
const MinSizeIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-65   "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 9.98V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H14"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 11L18.01 5.97998H14"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.01 5.97998V9.98998"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const MaxSizeIcon = () => {
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
        d="M18 6L6 18"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 10V6H14"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14V18H10"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ViewEditIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-65 "
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
        d="M9 2V22"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TemplateFilter({ id, data, isConnectable }) {
  const dispatch = useDispatch()
  const [showTemplate, setShowTemplate] = useState(false)
  const [showMoreTemplate, setShowMoreTemplate] = useState(false)
  const nodesData = useSelector((state) => state.nodes)
  const nodenew = nodesData.data.find((node) => node.id === id)

  const [text, setText] = useState(data.label || '')
  const nodeInputId = nodenew?.details?.filter?.input
  const nodeLabel = nodesData.data.find((node) => node.id === nodeInputId)

  const [input, setInput] = useState(nodeLabel?.data?.label || '')
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [timeoutId, setTimeoutId] = useState(null)
  const [inputFilter, setInputFilter] = useState(
    nodenew?.details?.filter?.expression,
  )

  const handleSelectChange = (value) => {
    setSelectedHeadline(value)
  }
  const handleChangeSelected = (value) => {
    setSelectedValue(value)
  }

  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onChange = useCallback(
    (evt) => {
      const newText = evt.target.value
      setText(newText)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      const newTimeoutId = setTimeout(() => {
        dispatch(
          updateNodesAsync({ id, updates: { data: { label: newText } } }),
        )
      }, 3000)
      setTimeoutId(newTimeoutId)
    },
    [dispatch, id, timeoutId],
  )

  const onChangeFilter = (e) => {
    setInputFilter(e.target.value)
  }
  const OnClickShowView = () => {
    setShowTemplate(!showTemplate)
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  const handleOnClickShowMore = () => {
    setShowMoreTemplate(!showMoreTemplate)
  }

  return (
    <div className=" h-auto w-96 border rounded-lg p-1  bg-white">
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        className=" bg-slate-50 border-slate-300 rounded-full p-1  left-[-15px]"
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1  p-1">
          <FilterIcon />
          <Input className=" border-none" value={text} onChange={onChange} />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={OnClickShowView}
            className="  rounded p-1 hover:bg-slate-100 "
          >
            <MinSizeIcon />
          </button>
          <button className="  rounded p-1 hover:bg-slate-100 ">
            <ViewEditIcon />
          </button>
          <button className="  rounded p-1 hover:bg-slate-100 ">
            <RunIcon />
          </button>
          <button
            onClick={handleOnClickShowMore}
            className="  rounded p-1 hover:bg-slate-100 "
          >
            <MoreIcon />
          </button>
        </div>
      </div>
      {showMoreTemplate && (
        <ShowMore idFilter={id} setShowMoreTemplate={setShowMoreTemplate} />
      )}

      {showTemplate ? (
        <>
          <div></div>
        </>
      ) : (
        <>
          <div className="p-2">
            {' '}
            <div className=" border w-full rounded-lg bg-slate-50 p-1">
              <div className=" w-full rounded p-1 flex flex-col ">
                <div className=" flex items-center w-full">
                  <Text className=" text-xs  font-medium opacity-70 w-1/3">
                    Input
                  </Text>

                  <div className=" border rounded  h-7 w-full">
                    <Text className=" text-xs pl-2 font-medium opacity-70">
                      {input}
                    </Text>
                  </div>
                </div>
                <div className="w-full">
                  <Text className=" text-xs  font-medium opacity-70  ">
                    Expression
                  </Text>
                  <Input
                    className=" border"
                    value={inputFilter}
                    onChange={onChangeFilter}
                  />
                </div>
              </div>
              <div className="h-[0.5px]  bg-slate-200 w-full mb-1 mt-1 rounded-lg"></div>
              <EditFilter
                data={data}
                code={code}
                nodenew={nodenew}
                nodesData={nodesData}
              />
            </div>
          </div>
        </>
      )}
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className=" bg-slate-50 border-slate-300 rounded-full p-1  right-[-15px]"
      />
    </div>
  )
}

export default TemplateFilter
