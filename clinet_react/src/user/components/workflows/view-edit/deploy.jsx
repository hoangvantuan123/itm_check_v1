import { Button, Modal, Menu, Input, Form, notification } from 'antd'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCornWorkflowAsync } from '../../../../features/deploy-workflow/create-deploy'
import { fetchWorkflowUserDeploy } from '../../../../features/deploy-workflow/fetch-user-workflow-deploy'
import { updateCornWorkflowAsync } from '../../../../features/deploy-workflow/update-deploy'
const AddNode = () => {
  return (
    <svg
      className="w-5 h-5 opacity-65 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16V8"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default function Deploy() {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))

  const userId = userFromLocalStorage.id
  const dispatch = useDispatch()
  const { id } = useParams()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const workflowData = useSelector((state) => state.workflow.data)
  const nodesData = useSelector((state) => state.nodes.data)
  const edgesData = useSelector((state) => state.edges.data)
  const dataDeployWorkflow = useSelector(
    (state) => state.deployWorkflow.userData,
  )
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    dispatch(fetchWorkflowUserDeploy(userId))
  }, [userId])

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/api/google/login'
  }
  const handlePageAccuracy = () => {
    window.location.href = '/u/accuracy/google'
  }

  localStorage.removeItem('workflowId')
  //localStorage.setItem('workflowId', workflowData?.data?.id);
  const handleDeployWorkflow = async () => {
    setIsLoading(true)
    try {
      const refreshToken = userFromLocalStorage.refreshToken
      if (!refreshToken || refreshToken === '') {
        await handlePageAccuracy()
        localStorage.setItem('workflowId', workflowData?.data?.id)
      } else {
        const workflow = {
          user_id: userFromLocalStorage.id,
          workflow_id: id,
          name_workflow: workflowData?.data?.name_edges,
          refreshToken: refreshToken,
          description: inputValue,
          nodes: nodesData,
          edges: edgesData,
        }
        const isWorkflowExist = dataDeployWorkflow.some(
          (workflow) => workflow.workflow_id === id,
        )

        // Nếu có, không thực hiện hàm handleDeployWorkflow()
        if (isWorkflowExist) {
          notification.error({
            message: 'Error',
            description: 'Workflow with the already exists.',
          })
          handleCancel()
        } else {
          await dispatch(createCornWorkflowAsync(workflow))
          localStorage.removeItem('workflowId')
          notification.success({
            message: 'Successfully',
            description: 'Workflow with the already exists.',
          })
          handleCancel()
        }
      }
    } catch (error) {
      console.error('Error deploy workflow:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <a
        onClick={showModal}
        className="flex items-center  justify-center gap-2 rounded-lg px-4 py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <span className="text-sm font-medium">Deploy</span>
      </a>
      <Modal
        title="Deploy workflow"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className=" flex  gap-3 items-center justify-end">
            <button
              key="cancel"
              onClick={handleCancel}
              className="py-1 px-5 border rounded-lg"
            >
              Cancel
            </button>
            <button
              key="ok"
              type="primary"
              onClick={handleDeployWorkflow}
              className=" py-1 px-5 border rounded-lg text-white bg-cyan-800 hover:bg-cyan-900"
            >
              Deploy
            </button>
          </div>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Description" tooltip="This is a required field">
            <Input
              type="text"
              size="large"
              value={inputValue}
              onChange={handleInputChange}
            />
          </Form.Item>
          {isLoading && <p>Loading...</p>}
        </Form>
      </Modal>
    </div>
  )
}
