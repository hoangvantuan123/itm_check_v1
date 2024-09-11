import { Button, Modal, Menu, Input, Form, message } from 'antd'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createProjectAsync } from '../../../../features/app-code/create-project'
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
export default function NewProject() {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
    setInputValue('')
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  const handleOpenWorkflow = (record) => {
    const newPath = `/u/appcode/${record}`
    window.location.href = newPath
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const projectData = {
      name_code: inputValue,
      type: false,
      description: '',
      refreshToken: userFromLocalStorage?.refreshToken,
      user_id: userFromLocalStorage?.id,
      trigger: '',
      fun_code: '',
    }
    dispatch(createProjectAsync(projectData))
      .then((project) => {
        message.success('successful')
        handleCancel()
        setTimeout(() => {
          handleOpenWorkflow(project.payload.id)
        }, 2000)
      })
      .catch((error) => {
        console.error('Failed to create workflow:', error.message)
      })
  }

  return (
    <div>
      <div
        onClick={showModal}
        className=" px-5 py-[9px] bg-green-900 rounded-md  text-white cursor-pointer"
      >
        Add Project
      </div>
      <Modal
        title="New Project"
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
              onClick={handleSubmit}
              className=" py-1 px-5 border rounded-lg text-white bg-cyan-800 hover:bg-cyan-900"
            >
              Create
            </button>
          </div>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Name" tooltip="This is a required field">
            <Input
              type="text"
              size="large"
              value={inputValue}
              onChange={handleInputChange}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
