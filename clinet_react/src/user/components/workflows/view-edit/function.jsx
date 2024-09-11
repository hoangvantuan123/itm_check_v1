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
} from 'antd'
import moment from 'moment'
import 'moment/locale/vi'
import { useParams } from 'react-router-dom'
import AceEditor from 'react-ace'
import { useDispatch, useSelector } from 'react-redux'
import { updateNodesAsync } from '../../../../features/workflow/update-nodes'
import { RunnerCodeFilter } from '../../../../features/code-runner/API/runner-code-filter'
import { createBuildNodeAsync } from '../../../../features/code-runner/create-run-node'
import { fetchFunNodeAsync } from '../../../../features/code-runner/fetch-id-fun-node'
import { setFunNodes } from '../../../../features/code-runner/slice/buildNodeSlice'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-monokai'
import axios from 'axios'
moment.locale('vi')
import prettier from 'prettier'
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
const LoadSuccess = () => {
  return (
    <svg
      className="w-4 h-4 opacity-75"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 9L10.5669 15.8063C10.3229 16.0646 9.92714 16.0646 9.68306 15.8063L7 12.9676M6.5 21.5284C4.99963 20.6605 3.72328 19.4484 2.77893 18M6.5 2.4716C4.99963 3.33952 3.72328 4.55165 2.77893 6M1.28533 14.5C1.09868 13.6969 1 12.8599 1 12C1 11.1401 1.09868 10.3031 1.28533 9.5M10 1.18138C10.6486 1.06225 11.317 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C11.317 23 10.6486 22.9378 10 22.8186"
        stroke="#009C3E"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  )
}

export default function EditFunction({ idNode, data, code }) {
  const [codeRun, setCodeRun] = useState(code || '')
  const { id } = useParams()
  const dispatch = useDispatch()
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userId = userFromLocalStorage.id
  const [open, setOpen] = useState(false)
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [expandedItemId, setExpandedItemId] = useState(null)

  const datalog = useSelector((state) => state.funNode.funNode)

  useEffect(() => {
    setCodeRun(code)
  }, [code])

  const handleChangeJS = useCallback((evt) => {
    setCodeRun(evt)
  }, [])

  const handleSave = async () => {
    try {
      await dispatch(
        updateNodesAsync({
          id: idNode,
          updates: {
            details: {
              code_function: {
                code: codeRun,
                label: 'Code Node 1',
                language: 'javascript',
                description: 'Custom code node',
              },
            },
          },
        }),
      )
    } catch (error) {
      console.error('Error saving code:', error)
    }
  }

  const fetchFunNodeData = async () => {
    try {
      const response = await dispatch(fetchFunNodeAsync(idNode))
      dispatch(setFunNodes(response.payload))
    } catch (error) {
      console.error('Error fetching nodes:', error)
    }
  }

  useEffect(() => {
    fetchFunNodeData()
  }, [dispatch, userId])

  const handleRunCodeClick = async () => {
    try {
      const { success, result, error } = await RunnerCodeFilter(
        codeRun,
        setOutput,
        setError,
      )

      const node = {
        project_id: id,
        node_id: idNode,
        user_id: userId,
        details: result || '',
      }
      await dispatch(createBuildNodeAsync(node))
      fetchFunNodeData()
    } catch (error) {
      console.error('Lỗi:', error)
    }
  }

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const onFinish = () => {
    console.log('Success')
  }

  return (
    <div>
      <button
        onClick={showDrawer}
        className="w-full items-center justify-center text-xs hover:bg-slate-100 font-semibold opacity-70 hover:opacity-85 rounded p-1"
      >
        Edit code
      </button>
      <Drawer title={data?.label} onClose={onClose} open={open} width={800}>
        <div className="w-full border rounded-lg p-2 mb-2 flex items-center gap-2 ">
          <button
            onClick={handleSave}
            className="flex items-center gap-1 hover:bg-slate-100 border rounded-lg p-1 px-2"
          >
            <Text strong> Save</Text>
          </button>
          <button
            onClick={handleRunCodeClick}
            className="flex items-center gap-1 hover:bg-slate-100 border rounded-lg p-1 px-2"
          >
            <RunIcon /> <Text strong> Run</Text>
          </button>

          <button className="flex items-center gap-1 hover:bg-slate-100 border rounded-lg p-1 px-2">
            <MoreIcon />
            <Text strong> More</Text>
          </button>
        </div>

        <AceEditor
          style={{
            width: '100%',
            height: '400px',
            borderRadius: 8,
            border: '0.5px solid #ccc',
          }}
          mode="javascript"
          theme="github"
          value={codeRun}
          onChange={handleChangeJS}
          name="code-editor"
          editorProps={{ $blockScrolling: true }}
        />
        <div className="border rounded-lg p-2 mt-2">
          <div className="w-full flex items-center justify-between">
            <Text strong className="opacity-75">
              Logs
            </Text>
          </div>
          <div className="border-b mt-2 mb-2"></div>
          {datalog?.map((item) => (
            <div
              key={item.id}
              className="flex items-center text-sm mb-2 gap-2 rounded-lg p-2 px-2 cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              onClick={() =>
                setExpandedItemId(item.id === expandedItemId ? null : item.id)
              } // Toggle mở rộng/collapse khi click
            >
              <LoadSuccess />
              <p>{moment(item.runTime).locale('vi').format('LLL')}</p>
            </div>
          ))}
          {expandedItemId && (
            <div className="expanded-content ml-4">
              {datalog.find((item) => item.id === expandedItemId).details}
            </div>
          )}
        </div>
      </Drawer>
    </div>
  )
}
