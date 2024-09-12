import { Button, Modal, Menu, Input, Form, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { Avatar, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import KeyMenu01 from './menu-key/key-01'
import KeyMenu02 from './menu-key/key-02'
import KeyMenu03 from './menu-key/key-03'

const { Title, Text } = Typography
const { SubMenu } = Menu
export default function Setting({ userNameLogin }) {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const { t } = useTranslation()
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
        return <KeyMenu03 />
      default:
        return null
    }
  }
  return (
    <div>
      <div
        onClick={showModal}
        className="flex items-center gap-2 rounded-lg px-4 py-3 cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <Avatar shape="square" icon={<UserOutlined />} />
        <Text className="text-sm font-medium">{userNameLogin}</Text>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1300}
        centered
        footer={null}
      >
        <div className="flex h-[700px]  overflow-hidden  ">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1', 'sub2']}
            style={{ width: '256px', borderRight: 0 }}
            className="h-full overflow-auto scrollable-content  overflow-y-auto scroll-container"
            onClick={handleMenuClick}
            selectedKeys={[selectedMenuKey]}
          >
            <SubMenu key="sub1" title={t('model_setting.personal')}>
              <Menu.Item key="2">{t('model_setting.account')}</Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" title={t('model_setting.setting')} >
              <Menu.Item key="4" >{t('model_setting.personalized_customization')}</Menu.Item>
              <Menu.Item key="5">{t('model_setting.account_security')}</Menu.Item>
              <Menu.Item key="6">{t('model_setting.job_information')}</Menu.Item>
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
