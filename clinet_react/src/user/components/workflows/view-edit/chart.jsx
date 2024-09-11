import { useState, useRef, useEffect } from 'react'
import {
  Drawer,
  Select,
  Typography,
  Input,
  Button,
  InputNumber,
  Switch,
  Slider,
  message,
  Table,
} from 'antd'
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from 'chart.js'
import * as htmlToImage from 'html-to-image'
import { useDispatch, useSelector } from 'react-redux'
import { updateNodesAsync } from '../../../../features/workflow/update-nodes'
import { selectWebhookData } from '../../../../features/webhook/webhookSlice'
import { fetchWebHookDataFromAPI } from '../../utils/api-utils/api'
import { fetchWebHookDataFromGoogleSheet } from '../../utils/google-sheet-utils/googleSheet'
const { Option } = Select
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
)
import ReactJson from 'react-json-view'
const { Title, Text } = Typography

const ChartEdit = ({ data, nodeId, nodenew, nodesData }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const webhookData = useSelector(selectWebhookData)

  const [chartType, setChartType] = useState('bar')
  const [chartTitle, setChartTitle] = useState('Sample Chart')
  const [backgroundColor, setBackgroundColor] = useState('rgba(75,192,192,0.4)')
  const [borderColor, setBorderColor] = useState('rgba(75,192,192,1)')
  const [chartWidth, setChartWidth] = useState(400)
  const [chartHeight, setChartHeight] = useState(400)
  const [fontSize, setFontSize] = useState(12)
  const [showLegend, setShowLegend] = useState(true)
  const [legendPosition, setLegendPosition] = useState('top')
  const [showGridLines, setShowGridLines] = useState(true)
  const [borderWidth, setBorderWidth] = useState(1)
  const [animation, setAnimation] = useState(true)
  const [dataCommonProps, setDataCommonProps] = useState(null)
  const [calculationType, setCalculationType] = useState('total')
  const [convertedData, setConvertedData] = useState()
  const [jsonData, setJsonData] = useState({})
  const [showData, setShowData] = useState(false)
  const [selectedNodeId, setSelectedNodeId] = useState(
    nodenew?.details?.database_connection || null,
  )
  const filteredNodes = nodesData.data.filter((node) => node.type === 'webhook')
  const nodeWebHook = nodesData.data.find((node) => node.id === selectedNodeId)
  const [apiData, setApiData] = useState(null)
  const [sheetData, setSheetData] = useState(null)
  const [previousApiData, setPreviousApiData] = useState(null)
  const [previousSheetData, setPreviousSheetData] = useState(null)
  const [logs, setLogs] = useState([])

  const accessAPIAndGoogleSheet = async () => {
    try {
      if (nodeWebHook?.details?.webhook) {
        const apiData = await fetchWebHookDataFromAPI(
          nodeWebHook.details.webhook.url,
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
        const sheetId = nodeWebHook?.details?.api?.spreadsheetUrl.match(
          /spreadsheets\/d\/([a-zA-Z0-9-_]+)/,
        )[1]
        const range = nodeWebHook?.details?.api?.spreadsheetRange
        const sheetData = await fetchWebHookDataFromGoogleSheet(sheetId, range)
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
    } catch (error) {
      setLogs((prevLogs) => [
        ...prevLogs,
        { type: 'error', message: `Error: ${error.message}` },
      ])
    }
  }
  useEffect(() => {
    const intervalId = setInterval(accessAPIAndGoogleSheet, 4000)
    return () => clearInterval(intervalId)
  }, [nodeWebHook, previousApiData, previousSheetData])

  const handleSelectChange = (value) => {
    setSelectedNodeId(value)
  }
  const [xAxis, setXAxis] = useState([])
  const chartRef = useRef(null)

  const [chartData, setChartData] = useState({
    labels: Object.keys(jsonData),
    datasets: [
      {
        label: chartTitle,
        backgroundColor,
        borderColor,
        borderWidth,
        hoverBackgroundColor: backgroundColor,
        hoverBorderColor: borderColor,
        data: Object.values(jsonData),
      },
    ],
  })

  useEffect(() => {
    if (sheetData && sheetData.length > 0) {
      const calculate = () => {
        const groupedData = sheetData.reduce((acc, item) => {
          Object.keys(item).forEach((key) => {
            if (key !== '') {
              acc[key] = (acc[key] || 0) + item[key]
            }
          })
          return acc
        }, {})

        if (calculationType === 'average') {
          const count = sheetData.length
          Object.keys(groupedData).forEach((key) => {
            groupedData[key] /= count
          })
        } else if (calculationType === 'ratio') {
          const total = Object.values(groupedData).reduce(
            (acc, val) => acc + val,
            0,
          )
          Object.keys(groupedData).forEach((key) => {
            groupedData[key] = (groupedData[key] / total) * 100
          })
        }

        setJsonData(groupedData)
      }

      calculate()
    } else {
      setJsonData({})
    }
  }, [sheetData, calculationType])

  useEffect(() => {
    updateChartData(jsonData)
    const Props = {
      ref: chartRef,
      data: chartData,
      width: chartWidth,
      height: chartHeight,
      options: {
        plugins: {
          legend: {
            display: showLegend,
            position: legendPosition,
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            grid: {
              display: showGridLines,
            },
            ticks: {
              font: {
                size: fontSize,
              },
            },
          },
          y: {
            grid: {
              display: showGridLines,
            },
            ticks: {
              font: {
                size: fontSize,
              },
            },
          },
        },
        animation: {
          duration: animation ? 1000 : 0,
        },
      },
    }
    setDataCommonProps(Props)
  }, [
    chartTitle,
    backgroundColor,
    borderColor,
    borderWidth,
    fontSize,
    showLegend,
    legendPosition,
    showGridLines,
    animation,
    jsonData,
  ])

  const handleChange = (e) => {
    setChartType(e.target.value)
  }

  const handleDataChange = (e) => {
    try {
      const newData = JSON.parse(e.target.value)
      setJsonData(newData)
      updateChartData(newData)
    } catch (error) {
      console.error('Invalid JSON')
    }
  }

  const updateChartData = (data) => {
    const formattedData = {
      labels: Object.keys(data),
      datasets: [
        {
          label: chartTitle,
          backgroundColor,
          borderColor,
          borderWidth,
          hoverBackgroundColor: backgroundColor,
          hoverBorderColor: borderColor,
          data: Object.values(data),
        },
      ],
    }
    setChartData(formattedData)
  }

  const options = filteredNodes.map((node) => ({
    value: node.id,
    label: node.data.label,
  }))

  const renderChart = () => {
    const commonProps = {
      ref: chartRef,
      data: chartData,
      width: chartWidth,
      height: chartHeight,
      options: {
        plugins: {
          legend: {
            display: showLegend,
            position: legendPosition,
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            grid: {
              display: showGridLines,
            },
            ticks: {
              font: {
                size: fontSize,
              },
            },
          },
          y: {
            grid: {
              display: showGridLines,
            },
            ticks: {
              font: {
                size: fontSize,
              },
            },
          },
        },
        animation: {
          duration: animation ? 1000 : 0,
        },
      },
    }
    switch (chartType) {
      case 'bar':
        return <Bar {...commonProps} />
      case 'line':
        return <Line {...commonProps} />
      case 'pie':
        return <Pie {...commonProps} />
      case 'doughnut':
        return <Doughnut {...commonProps} />
      case 'radar':
        return <Radar {...commonProps} />
      case 'polarArea':
        return <PolarArea {...commonProps} />
      default:
        return <Bar {...commonProps} />
    }
  }

  const onClose = () => {
    setOpen(false)
  }

  const showDrawer = () => {
    setOpen(true)
  }

  const downloadChartImage = () => {
    if (chartRef.current) {
      htmlToImage
        .toPng(chartRef.current.canvas)
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.href = dataUrl
          link.download = 'chart.png'
          link.click()
        })
        .catch((error) => {
          console.error('Failed to download chart image:', error)
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
              database_connection: selectedNodeId,
              chart_type: chartType,
              chart_title: chartTitle,
              background_color: backgroundColor,
              border_color: borderColor,
              chart_data: chartData,
            },
          },
        }),
      )
      message.success('Dữ liệu đã được lưu thành công!')
    } catch (error) {
      message.error('Đã xảy ra lỗi khi lưu dữ liệu. Vui lòng thử lại sau!')
    }
  }
  const dataSource = xAxis.map((key, index) => ({
    key: index,
    xAxis: key,
  }))

  return (
    <div>
      <button
        onClick={showDrawer}
        className="w-full items-center justify-center text-xs hover:bg-slate-100 font-semibold opacity-70 hover:opacity-85 rounded p-1"
      >
        Edit Chart
      </button>
      <Drawer
        title={
          <div className="flex justify-between items-center">
            <span>{data?.label}</span>
            <button
              onClick={handleSave}
              className="flex items-center gap-1 hover:bg-slate-100 border rounded-lg p-1 px-2"
            >
              <Text strong>Save</Text>
            </button>
          </div>
        }
        onClose={onClose}
        open={open}
        width={1500}
      >
        <div className="flex gap-4">
          <div className="w-2/3 p-4 border rounded shadow-sm">
            {/* Database Connection */}
            <div className="mb-4">
              <Title level={4}>Connection: </Title>
              <div className="flex items-center gap-3">
                <Text className="w-[300px]">Database Connection</Text>
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
            </div>

            <div>
              <div style={{ marginBottom: '16px' }}>
                <Select
                  defaultValue="total"
                  onChange={(value) => setCalculationType(value)}
                >
                  <Option value="total">Tính Tổng</Option>
                  <Option value="average">Tính Trung Bình</Option>
                  <Option value="ratio">Tính Tỉ Lệ</Option>
                </Select>
              </div>
              <div className="w-60 overflow-auto">
                {jsonData ? (
                  <ReactJson
                    src={jsonData}
                    collapsed={true}
                    indentWidth={2}
                    name={false}
                  />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
            <Title level={4} className="mt-10">
              Chart Configuration:{' '}
            </Title>
            {/* Chart Configuration */}
            <div className="mb-4 flex flex-col">
              <label htmlFor="chartType">Select Chart Type: </label>
              <Select
                value={chartType}
                onChange={(value) => setChartType(value)}
              >
                <Option value="bar">Bar</Option>
                <Option value="line">Line</Option>
                <Option value="pie">Pie</Option>
                <Option value="doughnut">Doughnut</Option>
                <Option value="radar">Radar</Option>
                <Option value="polarArea">Polar Area</Option>
              </Select>
            </div>

            <div className="mb-4">
              <label>Chart Title: </label>
              <Input
                value={chartTitle}
                onChange={(e) => setChartTitle(e.target.value)}
              />
            </div>

            {/* Chart Styling */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label>Border Width: </label>
                <InputNumber
                  min={1}
                  max={10}
                  value={borderWidth}
                  onChange={(value) => setBorderWidth(value)}
                />
              </div>

              <div>
                <label>Font Size: </label>
                <Slider
                  min={8}
                  max={32}
                  value={fontSize}
                  onChange={(value) => setFontSize(value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label>Show Legend: </label>
                <Switch
                  checked={showLegend}
                  onChange={(checked) => setShowLegend(checked)}
                />
              </div>

              <div>
                <label>Legend Position: </label>
                <Select
                  value={legendPosition}
                  onChange={(value) => setLegendPosition(value)}
                >
                  <Option value="top">Top</Option>
                  <Option value="bottom">Bottom</Option>
                  <Option value="left">Left</Option>
                  <Option value="right">Right</Option>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label>Show Grid Lines: </label>
                <Switch
                  checked={showGridLines}
                  onChange={(checked) => setShowGridLines(checked)}
                />
              </div>

              <div>
                <label>Animation: </label>
                <Switch
                  checked={animation}
                  onChange={(checked) => setAnimation(checked)}
                />
              </div>
            </div>

            <Title level={4} className="mt-10">
              {' '}
              Download:{' '}
            </Title>
            <div className="flex gap-2">
              <Button onClick={downloadChartImage}>Download Chart Image</Button>
              <Button onClick={() => setShowData(!showData)}>
                {showData ? 'Hide Data' : 'Show Data'}
              </Button>
            </div>

            {showData && (
              <div className="mt-4">
                <pre>{JSON.stringify(jsonData, null, 2)}</pre>
              </div>
            )}
          </div>

          <div className="w-2/3 p-4 border rounded shadow-sm">
            {renderChart()}
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default ChartEdit
