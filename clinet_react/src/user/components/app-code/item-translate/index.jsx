import { useState, useEffect } from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-xcode' // Thay đổi theme thành 'xcode'
import DeployCode from '../deploy'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RunnerAppCode } from '../../../../features/code-runner/API/app-code'
import { updateProjectAsync } from '../../../../features/app-code/update-project'
import { fetchOneCodeUser } from '../../../../features/app-code/fetch-finone-code'
import { createBuildCoreAsync } from '../../../../features/app-code-runner/create-run-fun'
import { Button, message } from 'antd'

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

export default function Translate() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const projectData = useSelector((state) => state.appCode.userData)
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userId = userFromLocalStorage.id
  const [codeRun, setCodeRun] = useState('')
  const [selectedFunction, setSelectedFunction] = useState('')
  const [functionNames, setFunctionNames] = useState([])
  const [timeoutId, setTimeoutId] = useState(null)
  const [isCodeChanged, setIsCodeChanged] = useState(false) // Thêm biến trạng thái isCodeChanged

  useEffect(() => {
    if (
      projectData &&
      projectData.fun_code &&
      projectData.fun_code.code &&
      !isCodeChanged
    ) {
      setCodeRun(projectData.fun_code.code)
    }
  }, [projectData, isCodeChanged]) // Thêm isCodeChanged vào dependencies của useEffect

  useEffect(() => {
    dispatch(fetchOneCodeUser(id))
    extractFunctionNames()
  }, [dispatch, id])

  const extractFunctionNames = () => {
    const regex = /function\s+([^\(]+)/g
    const functions = []
    let match
    while ((match = regex.exec(codeRun)) !== null) {
      functions.push(match[1])
    }
    setFunctionNames(functions)
  }

  const onChangeCode = (newValue) => {
    setCodeRun(newValue)
  }

  const onSaveCodeClick = () => {
    dispatch(
      updateProjectAsync({
        id,
        updates: { fun_code: { code: codeRun } },
      }),
    )
      .then((core) => {
        message.success('Save successful')
      })
      .catch((error) => {
        message.error('Save error')
      })
  }

  const onSelectFunction = (e) => {
    setSelectedFunction(e.target.value)
    const startIndex = codeRun.indexOf(`function ${e.target.value}`)
    const endIndex = codeRun.indexOf('}', startIndex) + 1
    const selectedFunctionCode = codeRun.substring(startIndex, endIndex)
    setCodeRun(selectedFunctionCode)
    extractFunctionNames()
  }

  const handleRunCodeClick = () => {
    RunnerAppCode(codeRun, '')
      .then((result) => {
        const core = {
          app_code_id: id,
          user_id: userId,
          details: result?.result,
          fun_code: codeRun,
        }
        dispatch(createBuildCoreAsync(core))

        message.success('successful')
      })
      .catch((error) => {
        message.error('error')
      })
  }

  return (
    <div style={{ height: '100vh' }}>
      <div className="border-b w-full p-1 justify-end">
        <ul className=" flex-1 w-full  justify-end lg:p-0 flex gap-2">
          <li>
            <a
              onClick={onSaveCodeClick}
              className="flex items-center  justify-center gap-2 rounded-lg px-4 py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium flex items-center gap-2">
                Save
              </span>
            </a>
          </li>
          <li>
            <a
              onClick={handleRunCodeClick}
              className="flex items-center  justify-center gap-2 rounded-lg px-4 py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium flex items-center gap-2">
                <RunCodeIcon />
                Run
              </span>
            </a>
          </li>

          <li>
            <DeployCode
              selectedFunction={selectedFunction}
              onSelectFunction={onSelectFunction}
              functionNames={functionNames}
              projectData={projectData}
              codeRun={codeRun}
            />
          </li>
          <li></li>
        </ul>
      </div>{' '}
      <AceEditor
        name="code-editor"
        mode="javascript"
        theme="xcode" // Thay đổi theme thành 'xcode'
        style={{
          width: '100%',
          height: '100%',
        }}
        value={codeRun}
        onChange={onChangeCode}
        fontSize={16}
        lineHeight={28}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        editorProps={{ $blockScrolling: 'Infinity' }} // Thay đổi $blockScrolling
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  )
}
