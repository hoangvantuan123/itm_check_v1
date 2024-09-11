import { Button, Modal, Menu, Input, Form, Typography } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const { Title, Text } = Typography

export default function KeyMenu01() {
  const dispatch = useDispatch()
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const [firstName, setFirstName] = useState(userFromLocalStorage?.firstName)
  const [lastName, setLastName] = useState(userFromLocalStorage?.lastName)
  const [email, setEmail] = useState(userFromLocalStorage?.email || '')
  const onFinish = (values) => {
    setEmail(values.email)
  }
  const handleLogout = (record) => {
    const newPath = `/u/login`
    window.location.href = newPath
  }
  return (
    <div>
      <Title level={4}>Personal Settings</Title>
      <div>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Title level={5}>Information</Title>
          <div className="flex items-center gap-4">
            <Form.Item label="First name" name="first_name">
              <Input size="large" />
            </Form.Item>

            <Form.Item label="Last name" name="last_name">
              <Input size="large" value={lastName} />
            </Form.Item>
          </div>
          <Form.Item label="Email" name="email" className=" w-[42%]">
            <Input size="large" disabled placeholder={email} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className=" px-7" size="default">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="mt-4">
        <Title level={5}>Security</Title>
        <Button size="default">Google Login</Button>
      </div>
      <div className="mt-4">
        <Title level={5}> Logout history</Title>
        <Button size="default" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  )
}
