import { useState, useEffect } from 'react'
import { Button, Form, Input, Drawer, Select, Typography, Tabs } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { updateNodesAsync } from '../../../../features/workflow/update-nodes'
import './style/index.css'
import { fetchWebHookDataFromAPI } from '../../utils/api-utils/api'
import { fetchWebHookDataFromGoogleSheet } from '../../utils/google-sheet-utils/googleSheet'
import { isDataChanged } from '../../utils/helpers'
import ReactJson from 'react-json-view'
import ReactDataGrid from 'react-data-grid'

import {
  selectWebhookData,
  setWebhookData,
} from '../../../../features/webhook/webhookSlice'
const { Title, Text } = Typography
const { Option } = Select
const { TabPane } = Tabs
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
function SpreadsheetView({ jsonData }) {
  // Lấy ra các tiêu đề cột từ dữ liệu đầu tiên (nếu có)
  const columns = jsonData?.length > 0 ? Object.keys(jsonData[0]) : []

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse rounded-lg">
          <thead>
            <tr>
              {columns?.map((column, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border  hover:bg-gray-100 "
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jsonData?.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {columns.map((column, index) => (
                  <td key={index} className="px-4 py-2 border">
                    {item[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const CustomError = ({ message }) => {
  return (
    <div
      style={{
        border: '1px solid red',
        backgroundColor: '#ffe6e6',
        color: 'red',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
      }}
    >
      <strong>Error:</strong> {message}
    </div>
  )
}

const CustomSuccess = ({ message }) => {
  return (
    <div
      style={{
        border: '1px solid green',
        backgroundColor: '#e6ffe6',
        color: 'green',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
      }}
    >
      <strong>Success:</strong> {message}
    </div>
  )
}

export default function WebHookViewRun({ data, nodeId, nodenew }) {
  const dispatch = useDispatch()
  const webhookData = useSelector(selectWebhookData)

  const [open, setOpen] = useState(false)
  const [apiData, setApiData] = useState(null)
  const [sheetData, setSheetData] = useState(null)
  const [previousApiData, setPreviousApiData] = useState(null)
  const [previousSheetData, setPreviousSheetData] = useState(null)
  const [selectedDownload, setSelectedDownload] = useState(false)
  const [logs, setLogs] = useState([])
  const nodesData = useSelector((state) => state.nodes)
  const accessAPIAndGoogleSheet = async () => {
    try {
      if (nodenew.details.webhook) {
        const apiData = await fetchWebHookDataFromAPI(
          nodenew.details.webhook.url,
        )
        if (isDataChanged(previousApiData, apiData)) {
          setApiData(apiData)
          dispatch(setWebhookData(apiData))
          setPreviousApiData(apiData)
          setLogs((prevLogs) => [
            ...prevLogs,
            { type: 'success', message: 'API data fetched successfully' },
          ])
        }
      } else {
        const sheetId = nodenew.details.api.spreadsheetUrl.match(
          /spreadsheets\/d\/([a-zA-Z0-9-_]+)/,
        )[1]
        const range = nodenew.details.api.spreadsheetRange
        const sheetData = await fetchWebHookDataFromGoogleSheet(sheetId, range)
        if (isDataChanged(previousSheetData, sheetData)) {
          setSheetData(sheetData)
          setPreviousSheetData(sheetData)
          setLogs((prevLogs) => [
            ...prevLogs,
            {
              type: 'success',
              message: 'Google Sheet data fetched successfully',
            },
          ])
        }
      }
    } catch (error) {
      setLogs((prevLogs) => [
        ...prevLogs,
        { type: 'error', message: `Error: ${error.message}` },
      ])
    }
  }

  useEffect(() => {
    const intervalId = setInterval(accessAPIAndGoogleSheet, 5000)
    return () => clearInterval(intervalId)
  }, [nodenew, previousApiData, previousSheetData])

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const onShowDownload = () => {
    setSelectedDownload(!selectedDownload)
  }

  const handleDownloadJSON = () => {
    const data = apiData || sheetData
    if (data) {
      downloadFile(JSON.stringify(data, null, 2), 'application/json')
    }
  }

  const handleDownloadCSV = () => {
    const data = apiData || sheetData
    if (data) {
      const csvData = convertJSONToCSV(data)
      downloadFile(csvData, 'text/csv')
    }
  }

  const downloadFile = (data, fileType) => {
    const blob = new Blob([data], { type: fileType })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = url
    a.download = `data.${fileType === 'application/json' ? 'json' : 'csv'}`
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const convertJSONToCSV = (jsonData) => {
    const array = typeof jsonData !== 'object' ? JSON.parse(jsonData) : jsonData
    let str = ''
    const header = Object.keys(array[0]).join(',') + '\r\n'
    str += header

    array.forEach((item) => {
      let line = ''
      for (let key in item) {
        if (line !== '') line += ','
        line += item[key]
      }
      str += line + '\r\n'
    })
    return str
  }

  const isWebhook = nodenew?.details?.webhook
  const isApi = nodenew?.details?.api

  return (
    <div>
      <button onClick={showDrawer} className="rounded p-1 hover:bg-slate-100">
        <RunIcon />
      </button>
      <Drawer
        title={data?.label}
        onClose={onClose}
        open={open}
        width={900}
        style={{ overflowX: 'hidden' }}
      >
        <Tabs defaultActiveKey="4">
          <TabPane tab="Logs" key="4">
            {logs.length > 0 ? (
              logs.map((log, index) =>
                log.type === 'error' ? (
                  <CustomError key={index} message={log.message} />
                ) : (
                  <CustomSuccess key={index} message={log.message} />
                ),
              )
            ) : (
              <div>No logs available</div>
            )}
          </TabPane>
          <TabPane tab="JSON" key="2">
            <div className="flex">
              {isWebhook && (
                <div className="flex flex-col">
                  <br />
                  {apiData ? (
                    <ReactJson src={apiData} collapsed={true} />
                  ) : (
                    'No data'
                  )}
                </div>
              )}
              {isApi && (
                <div className="flex flex-col">
                  <br />
                  {sheetData ? (
                    <ReactJson src={sheetData} collapsed={true} />
                  ) : (
                    'No data'
                  )}
                </div>
              )}
            </div>
          </TabPane>
          <TabPane tab="CSV" key="3">
            <div className="flex flex-col">
              {isWebhook && (
                <div className="flex flex-col">
                  <h1>Data from API</h1>
                </div>
              )}
              {isApi && <SpreadsheetView jsonData={sheetData} />}
            </div>
          </TabPane>
          <TabPane tab="Settings" key="1">
            <Title level={5}>Download</Title>
            <div className="flex gap-2">
              <Button onClick={handleDownloadJSON}>Download JSON</Button>
              <Button onClick={handleDownloadCSV}>Download CSV</Button>
            </div>
          </TabPane>
        </Tabs>
      </Drawer>
    </div>
  )
}
