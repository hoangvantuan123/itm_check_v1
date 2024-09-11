import { useState, useEffect } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Image,
  notification,
} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels'
import Tabs from './tabs'
import runWorkflow from '../../utils/runWorkflow'
import moment from 'moment'
const { Title, Text } = Typography
const CloseIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-75"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5L19 19M5.00003 19L12 12L19 5"
        stroke="#2D264B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const DownloadIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-75"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.21783 20.9384L7.1005 21.6792H7.1005L7.21783 20.9384ZM3.06156 16.7822L3.80232 16.6648L3.06156 16.7822ZM20.9384 16.7822L21.6792 16.8995V16.8995L20.9384 16.7822ZM16.7822 20.9384L16.8995 21.6792H16.8995L16.7822 20.9384ZM20.6 10.5496C20.3513 10.2184 19.8811 10.1516 19.5499 10.4003C19.2187 10.6491 19.1519 11.1192 19.4007 11.4504L20.6 10.5496ZM4.59931 11.4504C4.84808 11.1192 4.78126 10.6491 4.45007 10.4003C4.11888 10.1516 3.64873 10.2184 3.39996 10.5496L4.59931 11.4504ZM12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3H12.75ZM8.58768 12.534C8.33033 12.2095 7.8586 12.155 7.53403 12.4123C7.20946 12.6697 7.15497 13.1414 7.41232 13.466L8.58768 12.534ZM9.39785 14.763L8.81016 15.2289L9.39785 14.763ZM14.6022 14.763L14.0145 14.297L14.6022 14.763ZM16.5877 13.466C16.845 13.1414 16.7905 12.6697 16.466 12.4123C16.1414 12.155 15.6697 12.2095 15.4123 12.534L16.5877 13.466ZM11.7493 16.9801L11.6313 17.7208L11.6313 17.7208L11.7493 16.9801ZM12.2507 16.9801L12.3687 17.7208L12.3687 17.7208L12.2507 16.9801ZM20.25 14V15H21.75V14H20.25ZM15 20.25H9V21.75H15V20.25ZM3.75 15V14H2.25V15H3.75ZM9 20.25C8.04233 20.25 7.65082 20.2477 7.33515 20.1977L7.1005 21.6792C7.56216 21.7523 8.09965 21.75 9 21.75V20.25ZM2.25 15C2.25 15.9003 2.24767 16.4378 2.32079 16.8995L3.80232 16.6648C3.75233 16.3492 3.75 15.9577 3.75 15H2.25ZM7.33515 20.1977C5.51661 19.9096 4.09035 18.4834 3.80232 16.6648L2.32079 16.8995C2.71048 19.3599 4.64012 21.2895 7.1005 21.6792L7.33515 20.1977ZM20.25 15C20.25 15.9577 20.2477 16.3492 20.1977 16.6648L21.6792 16.8995C21.7523 16.4378 21.75 15.9003 21.75 15H20.25ZM15 21.75C15.9003 21.75 16.4378 21.7523 16.8995 21.6792L16.6648 20.1977C16.3492 20.2477 15.9577 20.25 15 20.25V21.75ZM20.1977 16.6648C19.9096 18.4834 18.4834 19.9096 16.6648 20.1977L16.8995 21.6792C19.3599 21.2895 21.2895 19.3599 21.6792 16.8995L20.1977 16.6648ZM21.75 14C21.75 12.7064 21.3219 11.5106 20.6 10.5496L19.4007 11.4504C19.9342 12.1607 20.25 13.0424 20.25 14H21.75ZM3.75 14C3.75 13.0424 4.06583 12.1607 4.59931 11.4504L3.39996 10.5496C2.67806 11.5106 2.25 12.7064 2.25 14H3.75ZM11.25 3V16H12.75V3H11.25ZM7.41232 13.466L8.81016 15.2289L9.98553 14.297L8.58768 12.534L7.41232 13.466ZM15.1898 15.2289L16.5877 13.466L15.4123 12.534L14.0145 14.297L15.1898 15.2289ZM8.81016 15.2289C9.35616 15.9176 9.80475 16.4852 10.2055 16.8875C10.6096 17.2932 11.0582 17.6294 11.6313 17.7208L11.8673 16.2395C11.7612 16.2225 11.5913 16.1532 11.2682 15.8289C10.9418 15.5012 10.5543 15.0143 9.98553 14.297L8.81016 15.2289ZM14.0145 14.297C13.4457 15.0143 13.0582 15.5012 12.7318 15.8289C12.4087 16.1532 12.2388 16.2225 12.1327 16.2395L12.3687 17.7208C12.9418 17.6294 13.3904 17.2932 13.7945 16.8875C14.1953 16.4852 14.6438 15.9175 15.1898 15.2289L14.0145 14.297ZM11.6313 17.7208C11.7534 17.7402 11.8766 17.75 12 17.75V16.25C11.9559 16.25 11.9117 16.2465 11.8673 16.2395L11.6313 17.7208ZM12 17.75C12.1234 17.75 12.2466 17.7402 12.3687 17.7208L12.1327 16.2395C12.0883 16.2465 12.0441 16.25 12 16.25V17.75ZM11.25 16V17H12.75V16H11.25Z"
        fill="#2D264B"
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

const ThreePaneLayout = ({ handleOnClickShowRuncode }) => {
  const [selectedButton, setSelectedButton] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const datalog = useSelector((state) => state.runWorkflow.data)
  const [workflowResult, setWorkflowResult] = useState(null)
  const [selectedLog, setSelectedLog] = useState(null)
  const [selectedDetail, setSelectedDetail] = useState(null)

  const handleLogClick = (log) => {
    setSelectedLog(log)
    setSelectedDetail(null)
  }
  const handleDetailClick = (detail) => {
    setSelectedDetail(detail)
  }
  useEffect(() => {
    setSelectedButton('button1')
  }, [])
  const buttonContent = {
    button1: selectedDetail ? (
      <div className="p-2">
        <h2>{selectedDetail.nodeId}</h2>
        <p>{selectedDetail.result && JSON.stringify(selectedDetail.result)}</p>
      </div>
    ) : (
      <div className="p-2">
        <h2>No data selected</h2>
      </div>
    ),

    button2: 'Nội dung cho nút 2',
    button3: 'Nội dung cho nút 3',
    button4: selectedDetail ? (
      <div className="p-2">
        <h2>{selectedDetail.nodeId}</h2>
        <p>{selectedDetail.result && JSON.stringify(selectedDetail.result)}</p>
      </div>
    ) : (
      <div className="p-2">
        <h2>No data selected</h2>
      </div>
    ),
  }

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName)
  }
  return (
    <div className="w-full h-full ">
      <PanelGroup direction="horizontal" className=" h-screen">
        <Panel defaultSize={30} minSize={20} className=" border-r ">
          <div className="h-9 bg-white border-b p-2">
            <Text strong>Log</Text>
          </div>
          <div className="p-2 w-full overflow-hidden h-screen ">
            <div className=" h-[60%] flex  flex-col flex-1 overflow-auto scrollable-content scroll-container">
              {datalog.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleLogClick(item)}
                  className="flex items-center text-sm mb-2 gap-2 rounded-lg p-2 px-2 cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <LoadSuccess />
                  <p>{moment(item.runTime).format('LLL')}</p>
                </div>
              ))}
            </div>
          </div>
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={20} minSize={20} className="border-r">
          <div className="h-9 bg-white border-b p-2">
            <Text strong>Blocks</Text>
          </div>
          <div className="p-2 w-full overflow-hidden h-screen ">
            <div className=" h-[60%] flex  flex-col flex-1 overflow-auto scrollable-content scroll-container">
              {selectedLog &&
                selectedLog.details.map((detail) => (
                  <div
                    key={detail.nodeId}
                    onClick={() => handleDetailClick(detail)}
                    className="flex items-center  text-sm  mb-2 gap-2 rounded-lg p-2  px-2 cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <p>{detail.type}</p>
                  </div>
                ))}
            </div>
          </div>
        </Panel>
        <PanelResizeHandle />
        <Panel minSize={40} className=" border-r ">
          <div className="h-9 bg-white border-b p-1 ">
            <div className="flex items-center justify-between cursor-pointer">
              <Tabs
                handleButtonClick={handleButtonClick}
                selectedButton={selectedButton}
              />
              <div className="flex items-center gap-2">
                <a className="flex items-center  justify-center gap-2 rounded-lg  text-xs px-2  py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  all
                </a>
                <a className="flex items-center  justify-center gap-2 rounded-lg  text-xs px-2  py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  success
                </a>{' '}
                <a className="flex items-center  justify-center gap-2 rounded-lg  text-xs px-2  py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  error
                </a>
                <a className="flex items-center  justify-center gap-2 rounded-lg  text-xs px-2  py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  logs
                </a>
                <a className="ml-4">
                  <DownloadIcon />
                </a>
                <a onClick={handleOnClickShowRuncode}>
                  <CloseIcon />
                </a>
              </div>
            </div>
          </div>
          {selectedButton && (
            <div classNamee="p-2">
              <p>{buttonContent[selectedButton]}</p>
            </div>
          )}
        </Panel>
      </PanelGroup>
    </div>
  )
}

export default ThreePaneLayout
