import { useState } from 'react'
import { Button, Form, Input, Drawer, Select, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { updateNodesAsync } from '../../../../features/workflow/update-nodes'
import './style/index.css'

const { Title, Text } = Typography
const { Option } = Select

export default function WebHookTrigger({ data, nodeId, nodenew }) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [inputType, setInputType] = useState('webhook')
  const [authType, setAuthType] = useState('Bearer')
  const [authValue, setAuthValue] = useState('')
  const [url, setUrl] = useState('')
  const [method, setMethod] = useState('POST')
  const [body, setBody] = useState('')
  const [spreadsheetUrl, setSpreadsheetUrl] = useState('')
  const [spreadsheetRange, setSpreadsheetRange] = useState('')
  const [spreadsheetTable, setSpreadsheetTable] = useState('')
  const [headers, setHeaders] = useState({
    'Content-Type': 'application/json',
    Authorization: `${authType} ${authValue}`,
  })

  const nodesData = useSelector((state) => state.nodes)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const handleInputTypeChange = (value) => {
    setInputType(value)
  }

  const handleAuthTypeChange = (value) => {
    setAuthType(value)
    setHeaders({
      ...headers,
      Authorization: `${value} ${authValue}`,
    })
  }

  const handleAuthValueChange = (e) => {
    setAuthValue(e.target.value)
    setHeaders({
      ...headers,
      Authorization: `${authType} ${e.target.value}`,
    })
  }

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const handleMethodChange = (value) => {
    setMethod(value)
  }

  const handleBodyChange = (e) => {
    setBody(e.target.value)
  }

  const handleSpreadsheetUrlChange = (e) => {
    setSpreadsheetUrl(e.target.value)
  }

  const handleSpreadsheetRangeChange = (e) => {
    setSpreadsheetRange(e.target.value)
  }
  const handleSpreadsheetTableChange = (e) => {
    setSpreadsheetTable(e.target.value)
  }

  const onFinish = () => {
    const node = nodesData.data.find((node) => node.id === nodeId)
    const updatedNode = {
      ...node,
      details: {
        [inputType]: {
          url,
          method,
          headers,
          body: method !== 'GET' ? body : undefined,
          spreadsheetUrl,
          spreadsheetTable,
          spreadsheetRange,
        },
      },
    }

    dispatch(updateNodesAsync({ id: nodeId, updates: updatedNode }))
    onClose()
  }

  return (
    <div>
      <button
        onClick={showDrawer}
        className="w-full items-center justify-center text-xs hover:bg-slate-100 font-semibold opacity-70 hover:opacity-85 rounded p-1"
      >
        Edit Webhook
      </button>
      <Drawer title={data?.label} onClose={onClose} open={open} width={500}>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item label="Input Type" name="inputType" required>
            <Select
              defaultValue={inputType}
              style={{ width: '100%' }}
              size="large"
              onChange={handleInputTypeChange}
              options={[
                { value: 'webhook', label: 'Webhook' },
                { value: 'api', label: 'Sheet URL' },
              ]}
            />
          </Form.Item>

          {inputType === 'webhook' && (
            <>
              <Form.Item label="URL" name="url" required>
                <Input value={url} onChange={handleUrlChange} size="large" />
              </Form.Item>

              <Form.Item label="Method" name="method" required>
                <Select
                  defaultValue={method}
                  style={{ width: '100%' }}
                  size="large"
                  onChange={handleMethodChange}
                  options={[
                    { value: 'POST', label: 'POST' },
                    { value: 'GET', label: 'GET' },
                    { value: 'PUT', label: 'PUT' },
                  ]}
                />
              </Form.Item>

              {method !== 'GET' && (
                <Form.Item label="Body" name="body">
                  <Input.TextArea
                    value={body}
                    onChange={handleBodyChange}
                    rows={4}
                    size="large"
                  />
                </Form.Item>
              )}

              <Form.Item label="Content-Type" name="contentType" required>
                <Select
                  defaultValue={headers['Content-Type']}
                  style={{ width: '100%' }}
                  size="large"
                  onChange={(value) =>
                    setHeaders({ ...headers, 'Content-Type': value })
                  }
                  options={[
                    { value: 'application/json', label: 'application/json' },
                    { value: 'application/xml', label: 'application/xml' },
                    { value: 'text/plain', label: 'text/plain' },
                  ]}
                />
              </Form.Item>

              <Form.Item label="Authentication Type" name="authType" required>
                <Select
                  defaultValue={authType}
                  style={{ width: '100%' }}
                  size="large"
                  onChange={handleAuthTypeChange}
                  options={[
                    { value: 'Bearer', label: 'Bearer' },
                    { value: 'Basic', label: 'Basic' },
                  ]}
                />
              </Form.Item>

              <Form.Item label="Authentication Value" name="authValue" required>
                <Input
                  value={authValue}
                  onChange={handleAuthValueChange}
                  size="large"
                />
              </Form.Item>
            </>
          )}

          {inputType === 'api' && (
            <>
              <Form.Item
                label="Google Sheet URL"
                name="spreadsheetUrl"
                required
              >
                <Input
                  value={spreadsheetUrl}
                  onChange={handleSpreadsheetUrlChange}
                  size="large"
                />
              </Form.Item>
              <Form.Item label="Table" name="sheetTable">
                <Input
                  value={spreadsheetTable}
                  onChange={handleSpreadsheetTableChange}
                  size="large"
                />
              </Form.Item>
              <Form.Item label="Range" name="spreadsheetRange">
                <Input
                  value={spreadsheetRange}
                  onChange={handleSpreadsheetRangeChange}
                  size="large"
                />
              </Form.Item>
            </>
          )}

          <Form.Item>
            <div className="flex gap-4 items-center justify-end">
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
      </Drawer>
    </div>
  )
}
