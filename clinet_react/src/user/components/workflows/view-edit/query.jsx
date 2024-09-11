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
export default function EditQuery({ data, code, nodenew }) {
  const dispatch = useDispatch()
  const [codeRun, setCodeRun] = useState(nodenew?.details?.query?.code)
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const [open, setOpen] = useState(false)
  const [alignValue, setAlignValue] = React.useState('CODE')
  const [value, setValue] = React.useState('GoogleSheet')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const refreshToken = userFromLocalStorage.refreshToken
  const sendTo = userFromLocalStorage.email
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
    if (value === 'GoogleSheet') {
      const query = {
        code: codeRun,
        type: value,
        label: 'query Node 1',
        language: 'javascript',
        link_url: '*',
        sheet_id: values.sheetId,
        sheet_name: values.sheetName,
        name_resources: '*',
        type_resources: '*',
        refreshToken: refreshToken,
      }
      dispatch(
        updateNodesAsync({ id: nodenew.id, updates: { details: { query } } }),
      )
      onClose()
    }
    if (value === 'email') {
      const query = {
        type: value,
        refreshToken: refreshToken,
        to: values.to,
        send: sendTo,
        subject: values.subject,
        body: values.body,
      }
      dispatch(
        updateNodesAsync({ id: nodenew.id, updates: { details: { query } } }),
      )
      onClose()
    }
  }
  const onSubmitQuery = () => {
    const query = {
      code: codeRun,
      type: alignValue,
      label: 'query Node 1',
      language: 'javascript',
      link_url: '*',
      sheet_id: '*',
      sheet_name: '*',
      name_resources: '*',
      type_resources: '*',
    }
    dispatch(
      updateNodesAsync({ id: nodenew.id, updates: { details: { query } } }),
    )
    onClose()
  }

  return (
    <div>
      <button
        onClick={showDrawer}
        className="w-full items-center justify-center text-xs hover:bg-slate-100  font-semibold opacity-70 hover:opacity-85 rounded p-1"
      >
        Edit query
      </button>
      <Drawer title={data?.label} onClose={onClose} open={open} width={800}>
        <div className="flex items-center  gap-3">
          {' '}
          <Select
            style={{ width: '100%' }}
            size="large"
            defaultValue={{
              value: 'GoogleSheet',
              label: 'GoogleSheet',
            }}
            onChange={handleChange}
            options={[
              {
                value: 'restapi',
                label: 'RESTQuery (restapi)',
              },
              {
                value: 'graphql',
                label: 'GraphQL (graphql)',
              },
              {
                value: 'GoogleSheet',
                label: 'GoogleSheet',
              },
              {
                value: 'email',
                label: 'Retool Email',
              },
            ]}
          />
          <Segmented
            defaultValue="CODE"
            size="large"
            style={{
              width: '100%',
            }}
            block
            onChange={(value) => setAlignValue(value)}
            options={['CODE', 'GUI']}
          />
        </div>
        {alignValue == 'CODE' && (
          <div className="mt-4">
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
              onChange={(value) => setCodeRun(value)}
              name="code-editor"
              editorProps={{ $blockScrolling: true }}
            />

            <Form.Item>
              <div className="    flex gap-4 items-center justify-end mt-4 ">
                <Button onClick={onClose}>Cancel</Button>
                <Button
                  htmlType="submit"
                  onClick={onSubmitQuery}
                  style={{ backgroundColor: '#ffffff', color: '#000000' }}
                  className="border"
                >
                  Submit
                </Button>
              </div>
            </Form.Item>
          </div>
        )}
        {alignValue == 'GUI' && (
          <div className="mt-4">
            {value == 'GoogleSheet' && (
              <div>
                <Form name="basic" onFinish={onFinish}>
                  <Form.Item label="Sheet Id" name="sheetId">
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item label="Sheet Name" name="sheetName">
                    <Input size="large" />
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
            {value == 'email' && (
              <div>
                <Form name="basic" onFinish={onFinish} layout="vertical">
                  <Form.Item label="To" name="to">
                    <Input size="large" />
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
