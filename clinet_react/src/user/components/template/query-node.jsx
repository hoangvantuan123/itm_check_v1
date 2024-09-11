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
  Segmented,
} from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import EditQuery from '../workflows/view-edit/query'
import AceEditor from 'react-ace'
import ShowMoreQuery from './show-more-query'
import { updateNodesAsync } from '../../../features/workflow/update-nodes'
const { Option } = Select
const { Title, Text } = Typography

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-monokai'
const QueryIcon = () => {
  return (
    <svg
      className="w-4 h-4    "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18V6"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 6V18"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z"
        stroke="#1C274C"
        strokeWidth="1.5"
      />
      <path
        d="M20 12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12"
        stroke="#1C274C"
        strokeWidth="1.5"
      />
      <path
        d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18"
        stroke="#1C274C"
        strokeWidth="1.5"
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
const JavascriptIcon = () => {
  return (
    <svg
      className="w-5 h-5  "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 8.9999V16.8999C9 18.3999 7.4 19.3999 6 18.5999L3.5 17.1999C3.2 17.0999 3 16.7999 3 16.3999V7.5999C3 7.1999 3.2 6.8999 3.5 6.6999L11.5 2.2999C11.8 2.0999 12.2 2.0999 12.5 2.2999L20.5 6.6999C20.8 6.8999 21 7.1999 21 7.5999V16.3999C21 16.7999 20.8 17.0999 20.5 17.2999L12.5 21.6999C12.2 21.8999 11.8 21.8999 11.5 21.6999L10 20.9999"
        stroke="#17191C"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9998 10.8C16.9998 9.8 16.1998 9 15.2998 9H13.4998C12.4998 9 11.7998 9.8 11.7998 10.7C11.7998 11.7 12.5998 12.4 13.4998 12.4H15.2998C16.2998 12.4 16.9998 13.2 16.9998 14.1C16.9998 15.1 16.1998 15.8 15.2998 15.8H13.4998C12.4998 15.8 11.7998 15 11.7998 14.1"
        stroke="#17191C"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const PythonIcon = () => {
  return (
    <svg
      className="w-5 h-5  "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.6001 7.6001V3.9001C7.6001 3.1001 8.2001 2.4001 9.0001 2.2001C11.0001 1.9001 13.0001 1.9001 15.0001 2.2001C15.8001 2.3001 16.4001 3.0001 16.4001 3.9001V9.8001C16.4001 11.0001 15.4001 12.0001 14.2001 12.0001H9.8001C8.6001 12.0001 7.6001 13.0001 7.6001 14.2001V20.1001C7.6001 20.9001 8.2001 21.6001 9.0001 21.8001C11.0001 22.1001 13.0001 22.1001 15.0001 21.8001C15.8001 21.7001 16.4001 21.0001 16.4001 20.1001V16.4001"
        stroke="#17191C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4 7.6001H20.1C20.9 7.6001 21.6 8.2001 21.8 9.0001C22.1 11.0001 22.1 13.0001 21.8 15.0001C21.7 15.8001 21 16.4001 20.1 16.4001H12"
        stroke="#17191C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0001 7.6001H3.9001C3.1001 7.6001 2.4001 8.2001 2.2001 9.0001C1.9001 11.0001 1.9001 13.0001 2.2001 15.0001C2.3001 15.8001 3.0001 16.4001 3.9001 16.4001H7.6001"
        stroke="#17191C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.8501V4.8501"
        stroke="#17191C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 19.1499V19.1499"
        stroke="#17191C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function TemplateQuery({ id, data, isConnectable }) {
  const dispatch = useDispatch()
  const [showTemplate, setShowTemplate] = useState(false)
  const [showMoreTemplate, setShowMoreTemplate] = useState(false)
  const [alignValue, setAlignValue] = React.useState('Javascript')
  const [text, setText] = useState(data.label || '')
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [timeoutId, setTimeoutId] = useState(null)
  const nodesData = useSelector((state) => state.nodes)
  const nodenew = nodesData.data.find((node) => node.id === id)
  const [typeQuery, setTypeQuery] = useState(nodenew?.details?.query?.type)

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
          <QueryIcon />

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
        <ShowMoreQuery idQuery={id} setShowMoreTemplate={setShowMoreTemplate} />
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
                      {typeQuery}
                    </Text>
                  </div>
                </div>
                {typeQuery == 'GoogleSheet' && (
                  <div className="w-full mt-4 flex-col  ">
                    <div>
                      <Text className=" text-xs  font-medium opacity-70">
                        Sheet ID
                      </Text>
                      <div className="border rounded h-7 w-full">
                        <Text className="w-full text-xs pl-2 font-medium opacity-70 truncate overflow-ellipsis">
                          {nodenew?.details?.query?.sheet_id}
                        </Text>
                      </div>
                    </div>
                    <div>
                      <Text className=" text-xs  font-medium opacity-70">
                        Spreadsheet
                      </Text>
                      <div className="border rounded h-7 w-full">
                        <Text className="w-full text-xs pl-2 font-medium opacity-70 truncate overflow-ellipsis">
                          {nodenew?.details?.query?.sheet_name}
                        </Text>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="h-[0.5px]  bg-slate-200 w-full mb-1 mt-1 rounded-lg"></div>
              <EditQuery data={data} code={code} nodenew={nodenew} />
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

export default TemplateQuery
