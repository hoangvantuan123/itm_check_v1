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
import WebHookTrigger from '../workflows/view-edit/webhook'
import ShowMoreWebHook from './show-more-webhook'
import { updateNodesAsync } from '../../../features/workflow/update-nodes'
import WebHookViewRun from '../workflows/view-edit/webhook-vew-run'
const { Option } = Select
const { Title, Text } = Typography

const TriggerIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-65   "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.08998 13.28H9.17998V20.48C9.17998 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52002C14.81 1.84002 13.9 1.50002 12.79 2.76002L5.21998 11.36C4.29998 12.42 4.68998 13.28 6.08998 13.28Z"
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

function TemplateWebHook({ id, data, isConnectable }) {
  const dispatch = useDispatch()

  const [showTemplateTrigger, setShowTemplateTrigger] = useState(false)
  const [showWebHookTrigger, setShowWebHookTrigger] = useState(false)
  const [showMoreTemplate, setShowMoreTemplate] = useState(false)
  const [text, setText] = useState(data.label || '')
  const [selectedValue, setSelectedValue] = useState('lucy')
  const [selectedHeadline, setSelectedHeadline] = React.useState('minute')
  const [timeoutId, setTimeoutId] = useState(null)
  const nodesData = useSelector((state) => state.nodes)
  const nodenew = nodesData.data.find((node) => node.id === id)
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
    setShowTemplateTrigger(!showTemplateTrigger)
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  const openShowEditWorkFlow = () => {
    setShowWebHookTrigger(true)
  }
  const handleOnClickShowMore = () => {
    setShowMoreTemplate(!showMoreTemplate)
  }

  const isWebhook = nodenew?.details?.webhook
  const isApi = nodenew?.details?.api
  return (
    <div className="h-auto w-96 border rounded-lg p-1 bg-white">
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        className="bg-slate-50 border-slate-300 rounded-full p-1 left-[-15px]"
      />
      <div className="flex items-center justify-between p-1">
        <div className="flex items-center gap-1">
          <TriggerIcon />
          <Input className="border-none" value={text} onChange={onChange} />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={OnClickShowViewTrigger}
            className="rounded p-1 hover:bg-slate-100"
          >
            <MinSizeIcon />
          </button>
          <button className="rounded p-1 hover:bg-slate-100">
            <ViewEditIcon />
          </button>
          <WebHookViewRun data={data} nodeId={id} nodenew={nodenew} />
          <button
            onClick={handleOnClickShowMore}
            className="rounded p-1 hover:bg-slate-100"
          >
            <MoreIcon />
          </button>
        </div>
      </div>
      {showMoreTemplate && (
        <ShowMoreWebHook
          idTrigger={id}
          setShowMoreTemplate={setShowMoreTemplate}
        />
      )}

      {showTemplateTrigger ? (
        <>
          <div></div>
        </>
      ) : (
        <>
          <div className="p-2">
            <Text className="text-xs font-medium opacity-70">Activator</Text>
            <div className="border w-full rounded-lg bg-slate-50 p-1">
              <div className="w-full rounded p-1 flex  items-center justify-center">
                {isWebhook ? (
                  <div className=" flex items-center justify-center">
                    Webhook
                  </div>
                ) : isApi ? (
                  <div className="flex flex-col">Webhook</div>
                ) : null}
              </div>
              <div className="h-[0.5px] bg-slate-200 w-full mb-1 rounded-lg"></div>
              <WebHookTrigger data={data} nodeId={id} nodenew={nodenew} />
            </div>
          </div>
        </>
      )}
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="bg-slate-50 border-slate-300 rounded-full p-1 right-[-15px]"
      />
    </div>
  )
}

export default TemplateWebHook
