import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Input, Typography } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { updateWorkflow } from '../../../features/workflow/update-workflow'
import { updateWorkflowAsync } from '../../../features/workflow/slice/workflowIdSlice'
import runWorkflow from '../utils/runWorkflow'
import { createRunWorkflowAsync } from '../../../features/code-runner/create-run-workflow'
import Deploy from './view-edit/deploy'
import Publish from './view-edit/publish'
import IO from './view-edit/i-o'
const { Title, Text } = Typography

const RunCodeIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-80"
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

const UpdateIcon = () => {
  return (
    <svg
      className="w-5 h-5 opacity-80 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-160"
        y="-209"
        width="1063"
        height="398"
        rx="20"
        stroke="#1C274C"
        strokeOpacity="0.05"
      />
      <path
        d="M12 8V12L14.5 14.5"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.60423 5.60414L5.0739 5.07381V5.07381L5.60423 5.60414ZM4.33785 6.87052L3.58786 6.87429C3.58992 7.28556 3.92281 7.61844 4.33408 7.62051L4.33785 6.87052ZM6.87963 7.6333C7.29384 7.63539 7.63131 7.30129 7.63339 6.88708C7.63547 6.47287 7.30138 6.1354 6.88717 6.13332L6.87963 7.6333ZM5.07505 4.3212C5.07297 3.90699 4.7355 3.5729 4.32129 3.57498C3.90708 3.57706 3.57298 3.91453 3.57507 4.32874L5.07505 4.3212ZM3.82669 10.7849C3.88294 10.3745 3.59587 9.99627 3.18549 9.94002C2.77512 9.88377 2.39684 10.1708 2.34059 10.5812L3.82669 10.7849ZM18.8623 5.13777C15.0421 1.31758 8.86882 1.27889 5.0739 5.07381L6.13456 6.13447C9.33367 2.93536 14.5572 2.95395 17.8017 6.19843L18.8623 5.13777ZM5.13786 18.8622C8.95805 22.6824 15.1314 22.7211 18.9263 18.9262L17.8656 17.8655C14.6665 21.0646 9.443 21.0461 6.19852 17.8016L5.13786 18.8622ZM18.9263 18.9262C22.7212 15.1313 22.6825 8.95796 18.8623 5.13777L17.8017 6.19843C21.0461 9.44291 21.0647 14.6664 17.8656 17.8655L18.9263 18.9262ZM5.0739 5.07381L3.80752 6.34019L4.86818 7.40085L6.13456 6.13447L5.0739 5.07381ZM4.33408 7.62051L6.87963 7.6333L6.88717 6.13332L4.34162 6.12053L4.33408 7.62051ZM5.08784 6.86675L5.07505 4.3212L3.57507 4.32874L3.58786 6.87429L5.08784 6.86675ZM2.34059 10.5812C1.93916 13.5099 2.87401 16.5984 5.13786 18.8622L6.19852 17.8016C4.27794 15.881 3.48672 13.2652 3.82669 10.7849L2.34059 10.5812Z"
        fill="#1C274C"
      />
    </svg>
  )
}

const CheckIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-85"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
        stroke="#1C274C"
        stroke-width="1.5"
      />
      <path
        d="M8.5 12.5L10.5 14.5L15.5 9.5"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

const Logo = () => {
  return (
    <svg
      className="w-5 h-5 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5C1.41905 4.25 2.63429 2.6 4.14286 2M16.7143 2C18.2381 2.4 21.6286 3.56 23 5"
        stroke="black"
        stroke-opacity="0.3"
        stroke-linecap="round"
      />
      <path
        d="M6.63962 13.5414L6.24078 13.8429C6.36458 14.0066 6.57588 14.0781 6.77365 14.0231C6.97141 13.968 7.11545 13.7977 7.13689 13.5936L6.63962 13.5414ZM7.75699 2.90041L8.25425 2.95262C8.25607 2.93532 8.25699 2.91793 8.25699 2.90052L7.75699 2.90041ZM10.5505 1.12694L10.7169 0.65541V0.65541L10.5505 1.12694ZM11.6678 5.85591L11.1723 5.78901C11.1717 5.7939 11.1711 5.7988 11.1706 5.80371L11.6678 5.85591ZM11.1092 11.1767L10.612 11.1245C10.5972 11.2654 10.6429 11.406 10.7377 11.5113C10.8325 11.6166 10.9675 11.6767 11.1092 11.6767V11.1767ZM21.7242 18.2707L21.2415 18.1403L21.7242 18.2707ZM1.05292 11.7679L1.53952 11.6529L1.05292 11.7679ZM7.13689 13.5936L8.25425 2.95262L7.25972 2.84819L6.14236 13.4891L7.13689 13.5936ZM8.25699 2.90052C8.257 2.86778 8.28265 2.72781 8.39175 2.51702C8.49356 2.3203 8.64534 2.10687 8.83886 1.92678C9.21468 1.57703 9.72346 1.36541 10.3842 1.59847L10.7169 0.65541C9.62938 0.271846 8.74146 0.651381 8.1576 1.19474C7.87127 1.4612 7.65247 1.76981 7.50364 2.05738C7.36209 2.33088 7.25705 2.63746 7.25699 2.90029L8.25699 2.90052ZM10.3842 1.59847C10.9319 1.79163 11.2214 2.35478 11.3099 3.24528C11.3963 4.11333 11.2667 5.08981 11.1723 5.78901L12.1633 5.92281C12.2552 5.24252 12.4049 4.15006 12.305 3.14628C12.2074 2.16495 11.8451 1.05336 10.7169 0.65541L10.3842 1.59847ZM11.1706 5.80371L10.612 11.1245L11.6065 11.2289L12.1651 5.90812L11.1706 5.80371ZM11.1092 11.6767H17.2547V10.6767H11.1092V11.6767ZM17.2547 11.6767C19.6704 11.6767 22.2128 14.5438 21.2415 18.1403L22.2069 18.401C23.3236 14.2661 20.426 10.6767 17.2547 10.6767V11.6767ZM21.2415 18.1403C20.8709 19.5127 20.0924 20.6107 19.2138 21.3642C18.3239 22.1275 17.3776 22.5 16.6959 22.5V23.5C17.6905 23.5 18.8592 22.9858 19.8648 22.1233C20.8817 21.2511 21.7793 19.9845 22.2069 18.401L21.2415 18.1403ZM16.6959 22.5H8.87436V23.5H16.6959V22.5ZM8.87436 22.5C7.55695 22.5 3.75698 21.0384 1.53952 11.6529L0.566319 11.8829C2.81833 21.4146 6.83994 23.5 8.87436 23.5V22.5ZM1.53952 11.6529C1.45149 11.2803 1.5221 11.0231 1.63076 10.8809C1.72955 10.7516 1.92393 10.6328 2.29233 10.6658C3.07748 10.736 4.47279 11.5044 6.24078 13.8429L7.03846 13.2398C5.23087 10.849 3.60811 9.77948 2.38144 9.66973C1.74393 9.6127 1.18396 9.81843 0.836073 10.2739C0.498046 10.7164 0.429629 11.3043 0.566319 11.8829L1.53952 11.6529Z"
        fill="black"
      />
    </svg>
  )
}


const More = () =>{
  return (
    <svg  className="w-4 h-4 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_218_4466)">
<rect x="9" width="6" height="6" rx="3" fill="#52536D"/>
<rect x="9" y="9" width="6" height="6" rx="3" fill="#52536D"/>
<rect x="9" y="18" width="6" height="6" rx="3" fill="#52536D"/>
</g>
<defs>
<clipPath id="clip0_218_4466">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

  )
}
const HeaderItem = ({ handleOnClickShowRuncode, projectId }) => {
  const dispatch = useDispatch()
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userId = userFromLocalStorage.id
  const { id } = useParams()
  const workflowData = useSelector((state) => state.workflow.data)
  const nodesData = useSelector((state) => state.nodes.data)
  const edgesData = useSelector((state) => state.edges.data)
  const [isRunning, setIsRunning] = useState(false)

  const [workflowResult, setWorkflowResult] = useState(null)
  const [inputValue, setInputValue] = React.useState(
    workflowData?.data?.name_edges,
  )
  const [showIcon, setShowIcon] = useState(false)
  const [showMoreLogo, setShowMoreLogo] = useState(false)
  
  useEffect(() => {
    setInputValue(workflowData?.data?.name_edges)
  }, [workflowData])

  const handleChange = (e) => {
    setInputValue(e.target.value)
    setShowIcon(e.target.value.length > 0)
  }
  const handleEditClick = () => {
    const workflowId = workflowData?.data?.id
    const userId = workflowData?.data?.userId
    const updates = {
      name_edges: inputValue,
      isPublic: false,
      url_image: '',
    }

    try {
      dispatch(updateWorkflowAsync({ id: workflowId, userId, updates }))
      setShowIcon(false)
    } catch (error) {
      console.error('Error updating workflow:', error.message)
    }
  }
  const handleShowMore = () => {
    setShowMoreLogo(!showMoreLogo)
  }
  const runTime = new Date().toISOString()

  const handleRunWorkflow = async () => {
    if (isRunning) {
      console.log('Workflow is already running.')
      return
    }

    setIsRunning(true)

    try {
      const result = await runWorkflow(nodesData, edgesData)
      setWorkflowResult(result)
      const dataToSend = {
        project_id: id,
        name_workflow: workflowData?.data?.name_edges,
        user_id: userId,
        runTime: runTime,
        details: result,
      }

      dispatch(createRunWorkflowAsync(dataToSend))
    } catch (error) {
      console.error('Error running workflow:', error)
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <div className="w-full h-12 bg-white flex items-center  p-2 border-b">
      <div
        className="flex-1 text-left  cursor-pointer flex  items-center  gap-2"
        onClick={handleShowMore}
      >
        <Logo />
      </div>
      {showMoreLogo && (
        <>
          <div className=" w-auto bg-white border shadow rounded-lg  h-auto p-1 top-11 absolute z-50">
            <ul className="space-y-1">
              <li>
                <a
                  href="/u/workflows"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Back to home </span>
                </a>
              </li>
              <li className=" h-[0.5px] bg-slate-200 w-full "></li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Resources </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Query library </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-normal"> Workflows </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-normal"> Retool Database </span>
                </a>
              </li>
              <li className=" h-[0.5px] bg-slate-200 w-full "></li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-normal"> Settings </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-normal"> Audit logs </span>
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
      <div className="flex-1 flex justify-center">
        <Input
          className=""
          value={inputValue}
          onChange={handleChange}
          style={{ width: '70vw', maxWidth: 500, textAlign: 'center' }}
          suffix={
            showIcon && (
              <button
                onClick={handleEditClick}
                className=" hover:text-gray-500"
              >
                {' '}
                save
              </button>
            )
          }
        />
      </div>
      <ul className=" flex-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 lg:p-0 flex items-center  justify-end gap-2">
        <li>
          <a
            onClick={() => {
              handleOnClickShowRuncode()
              handleRunWorkflow()
            }}
            className="flex items-center  justify-center gap-2 rounded-lg px-4 py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="text-sm font-medium flex items-center gap-2">
              <RunCodeIcon />
              Run
            </span>
          </a>
        </li>
        <li>
          <Deploy />
        </li>
        <li>
          <Publish />
        </li>
        <li>
          <IO/>
        </li>
      </ul>
    </div>
  )
}

export default HeaderItem
