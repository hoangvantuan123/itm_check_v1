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
import EditEmails from '../workflows/view-edit/emails'
import ShowMoreEmails from './show-more-emails'
import { updateNodesAsync } from '../../../features/workflow/update-nodes'

const { Option } = Select
const { Title, Text } = Typography

const SlackLogo = () => {
  return (
    <svg
      className="w-4 h-4 opacity-65   "
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.39974 2C5.7364 2.00049 5.19954 2.53774 5.20003 3.19976C5.19954 3.86177 5.73689 4.39902 6.40023 4.39951H7.60043V3.20024C7.60092 2.53823 7.06357 2.00098 6.39974 2C6.40023 2 6.40023 2 6.39974 2V2ZM6.39974 5.2H3.2002C2.53685 5.20049 1.99951 5.73774 2 6.39976C1.99902 7.06177 2.53636 7.59902 3.19971 7.6H6.39974C7.06308 7.59951 7.60042 7.06226 7.59993 6.40024C7.60042 5.73774 7.06308 5.20049 6.39974 5.2Z"
        fill="#36C5F0"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.9998 6.39976C14.0003 5.73774 13.4629 5.20049 12.7996 5.2C12.1362 5.20049 11.5988 5.73774 11.5993 6.39976V7.6H12.7996C13.4629 7.59951 14.0003 7.06226 13.9998 6.39976ZM10.7997 6.39976V3.19976C10.8002 2.53823 10.2633 2.00098 9.59996 2C8.93661 2.00049 8.39926 2.53774 8.39975 3.19976V6.39976C8.39877 7.06177 8.93612 7.59902 9.59947 7.6C10.2628 7.59951 10.8002 7.06226 10.7997 6.39976Z"
        fill="#2EB67D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.59996 13.9999C10.2633 13.9994 10.8007 13.4622 10.8002 12.8001C10.8007 12.1381 10.2633 11.6009 9.59996 11.6004H8.39975V12.8001C8.39926 13.4617 8.93661 13.9989 9.59996 13.9999ZM9.59996 10.7994H12.8C13.4634 10.7989 14.0007 10.2617 14.0003 9.59966C14.0012 8.93764 13.4639 8.40039 12.8005 8.39941H9.60045C8.9371 8.3999 8.39975 8.93715 8.40024 9.59917C8.39975 10.2617 8.93661 10.7989 9.59996 10.7994Z"
        fill="#ECB22E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 9.59967C1.99951 10.2617 2.53686 10.799 3.2002 10.7994C3.86355 10.799 4.4009 10.2617 4.40041 9.59967V8.3999H3.2002C2.53686 8.40039 1.99951 8.93765 2 9.59967ZM5.20006 9.59967V12.7997C5.19908 13.4617 5.73642 13.999 6.39977 14C7.06312 13.9995 7.60047 13.4622 7.59998 12.8002V9.60065C7.60096 8.93863 7.06361 8.40137 6.40026 8.40039C5.73642 8.40039 5.19957 8.93765 5.20006 9.59967C5.20006 9.60016 5.20006 9.59967 5.20006 9.59967Z"
        fill="#E01E5A"
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

function TemplateEmails({ id, data, isConnectable }) {
  const dispatch = useDispatch()

  const [showTemplateEmails, setShowTemplateEmails] = useState(false)
  const [showEditSlack, setShowEditSlack] = useState(false)
  const [showMoreTemplate, setShowMoreTemplate] = useState(false)
  const [text, setText] = useState(data.label || '')
  const [selectedValue, setSelectedValue] = useState('lucy')
  const [selectedHeadline, setSelectedHeadline] = React.useState('minute')
  const [timeoutId, setTimeoutId] = useState(null)
  const nodesData = useSelector((state) => state.nodes)
  const nodenew = nodesData.data.find((node) => node.id === id)
  const [alignValue, setAlignValue] = React.useState(nodenew?.details?.type)
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

  const OnClickShowViewTrigger = () => {
    setShowTemplateEmails(!showTemplateEmails)
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  const openShowEditWorkFlow = () => {
    setShowEditSlack(true)
  }
  const handleOnClickShowMore = () => {
    setShowMoreTemplate(!showMoreTemplate)
  }

  return (
    <div className=" h-auto  w-96 border rounded-lg p-1  bg-white">
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        className=" bg-slate-50 border-slate-300 rounded-full p-1  left-[-15px]"
      />
      <div className="flex items-center justify-between p-1">
        <div className="flex items-center gap-1  ">
          <SlackLogo />
          <Input className=" border-none" value={text} onChange={onChange} />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={OnClickShowViewTrigger}
            className="  rounded p-1 hover:bg-slate-100 "
          >
            <MinSizeIcon />
          </button>
          <button className="  rounded p-1 hover:bg-slate-100 ">
            <ViewEditIcon />
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
        <ShowMoreEmails
          idEmails={id}
          setShowMoreTemplate={setShowMoreTemplate}
        />
      )}

      {showTemplateEmails ? (
        <>
          <div></div>
        </>
      ) : (
        <>
          <div className="p-2">
            {' '}
            <div className=" flex items-center justify-center w-full"></div>
            <div className="h-[0.5px]  bg-slate-200 w-full mb-1 rounded-lg"></div>
            <div className="h-[0.5px] mt-3  bg-slate-200 w-full mb-1 rounded-lg"></div>
            <EditEmails
              data={data}
              nodeId={id}
              nodenew={nodenew}
              alignValue={alignValue}
            />
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

export default TemplateEmails
