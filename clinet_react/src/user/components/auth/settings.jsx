import { Button, Modal, Menu, Input, Form, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Avatar, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import KeyMenu01 from './menu-key/key-01'
import KeyMenu02 from './menu-key/key-02'

const { Title, Text } = Typography
const { SubMenu } = Menu
export default function Setting() {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))

  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [selectedMenuKey, setSelectedMenuKey] = useState('2')

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleMenuClick = ({ key }) => {
    setSelectedMenuKey(key)
  }

  const renderContent = () => {
    switch (selectedMenuKey) {
      case '2':
        return <KeyMenu01 />
      case '4':
        return <KeyMenu02 />
      case '5':
        return <div>Nội dung của menu 4</div>
      default:
        return null
    }
  }
  return (
    <div>
      <div
        onClick={showModal}
        className="flex items-center gap-2 rounded-lg px-4 py-1 cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <Avatar shape="square" icon={<UserOutlined />} />
        <Text className="text-sm font-medium">Tuan Hoang</Text>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1300}
        centered
        footer={null}
      >
        <div className="flex h-[600px]  overflow-hidden  ">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1', 'sub2']}
            style={{ width: '256px', borderRight: 0 }}
            className="h-full overflow-auto scrollable-content  overflow-y-auto scroll-container"
            onClick={handleMenuClick}
            selectedKeys={[selectedMenuKey]}
          >
            <SubMenu key="sub1" title="Personal">
              <Menu.Item key="2">Account</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Organization">
              <Menu.Item key="4">Users</Menu.Item>
              <Menu.Item key="5">Permissions</Menu.Item>
              <Menu.Item key="6">Environments</Menu.Item>
              <Menu.Item key="7">API</Menu.Item>
              <Menu.Item key="8">IAM Credentials</Menu.Item>
              <Menu.Item key="9">Billing</Menu.Item>
              <Menu.Item key="10">Branding</Menu.Item>
              <Menu.Item key="11">Business</Menu.Item>
              <Menu.Item key="12">Themes</Menu.Item>
              <Menu.Item key="13">Source Control</Menu.Item>
              <Menu.Item key="14">Enterprise</Menu.Item>
              <Menu.Item key="15">Advanced</Menu.Item>
              <Menu.Item key="16">Beta</Menu.Item>
              <Menu.Item key="17">Retool Events</Menu.Item>
              <Menu.Item key="18">Retool AI</Menu.Item>
            </SubMenu>
          </Menu>

          <div style={{ padding: '24px' }} className="w-full">
            {renderContent()}
          </div>
        </div>
      </Modal>
    </div>
  )
}
