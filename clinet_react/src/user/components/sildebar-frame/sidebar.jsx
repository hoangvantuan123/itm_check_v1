import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react' // Import useState hook

import SidebarContent from './styled-components/toggle-sidebar'
import LogoWorkFlow from './styled-components/logo'
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons'
import AuthUser from '../auth'
import NewWorkFlow from './new-workflow'

const { Sider, Footer } = Layout
const menuStyle = {
  borderInlineEnd: 'none',
}
const WorkflowsIcon = () => {
  return (
    <svg
      className="w-5 h-5 opacity-65 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 6.5C2.5 4.29086 4.29086 2.5 6.5 2.5C8.70914 2.5 10.5 4.29086 10.5 6.5C10.5 8.70914 8.70914 10.5 6.5 10.5C4.29086 10.5 2.5 8.70914 2.5 6.5Z"
        stroke="#1C274C"
        strokeWidth="1.5"
      />
      <path
        d="M13.5 17.5C13.5 15.2909 15.2909 13.5 17.5 13.5C19.7091 13.5 21.5 15.2909 21.5 17.5C21.5 19.7091 19.7091 21.5 17.5 21.5C15.2909 21.5 13.5 19.7091 13.5 17.5Z"
        stroke="#1C274C"
        strokeWidth="1.5"
      />
      <path
        d="M21.5 6.5C21.5 4.61438 21.5 3.67157 20.9142 3.08579C20.3284 2.5 19.3856 2.5 17.5 2.5C15.6144 2.5 14.6716 2.5 14.0858 3.08579C13.5 3.67157 13.5 4.61438 13.5 6.5C13.5 8.38562 13.5 9.32843 14.0858 9.91421C14.6716 10.5 15.6144 10.5 17.5 10.5C19.3856 10.5 20.3284 10.5 20.9142 9.91421C21.5 9.32843 21.5 8.38562 21.5 6.5Z"
        stroke="#1C274C"
        strokeWidth="1.5"
      />
      <path
        d="M10.5 17.5C10.5 15.6144 10.5 14.6716 9.91421 14.0858C9.32843 13.5 8.38562 13.5 6.5 13.5C4.61438 13.5 3.67157 13.5 3.08579 14.0858C2.5 14.6716 2.5 15.6144 2.5 17.5C2.5 19.3856 2.5 20.3284 3.08579 20.9142C3.67157 21.5 4.61438 21.5 6.5 21.5C8.38562 21.5 9.32843 21.5 9.91421 20.9142C10.5 20.3284 10.5 19.3856 10.5 17.5Z"
        stroke="#1C274C"
        strokeWidth="1.5"
      />
    </svg>
  )
}
const SearchIcon = () => {
  return (
    <svg
      className="w-5 h-5 opacity-65 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="9" stroke="#1C274C" strokeWidth="1.5" />
      <path
        d="M21.812 20.9748C21.7493 21.0695 21.636 21.1828 21.4094 21.4094C21.1828 21.636 21.0695 21.7493 20.9748 21.812C20.4202 22.1793 19.6699 21.99 19.3559 21.4036C19.3023 21.3035 19.2563 21.15 19.1643 20.843C19.0638 20.5076 19.0136 20.3398 19.0038 20.2218C18.9466 19.5268 19.5268 18.9466 20.2218 19.0038C20.3398 19.0136 20.5075 19.0638 20.843 19.1643C21.15 19.2563 21.3035 19.3023 21.4036 19.3559C21.99 19.6699 22.1793 20.4202 21.812 20.9748Z"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const TemplateIcon = () => {
  return (
    <svg
      className="w-5 h-5 opacity-65 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6V18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18V6Z"
        stroke="#1C274C"
        strokeWidth="1.5"
      />
      <path
        d="M7 19H5"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.3137 4.92912L11.1716 7.07121C10.5935 7.64927 10.3045 7.9383 10.1522 8.30585C10 8.67339 10 9.08214 10 9.89964L10 19.5565L18.9705 10.586C19.9606 9.59594 20.4556 9.10091 20.6411 8.53009C20.8042 8.02798 20.8042 7.48712 20.6411 6.98501C20.4556 6.41419 19.9606 5.91917 18.9705 4.92912C17.9805 3.93908 17.4855 3.44406 16.9146 3.25859C16.4125 3.09544 15.8717 3.09544 15.3695 3.25859C14.7987 3.44406 14.3037 3.93908 13.3137 4.92912Z"
        stroke="#1C274C"
        strokeWidth="1.5"
      />
      <path
        d="M6 22L18 22C19.4001 22 20.1002 22 20.635 21.7275C21.1054 21.4878 21.4878 21.1054 21.7275 20.635C22 20.1002 22 19.4001 22 18C22 16.5999 22 15.8998 21.7275 15.365C21.4878 14.8946 21.1054 14.5122 20.635 14.2725C20.1002 14 19.4001 14 18 14L15.5 14"
        stroke="#1C274C"
        strokeWidth="1.5"
      />
    </svg>
  )
}
const ExecutionsIcon = () => {
  return (
    <svg
      className="w-5 h-5 opacity-65 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 22V16L17 18"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 16L21 18"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.95002 6.26001L8.90002 15.73"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.1101 6.26001L12.0601 15.73"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.53003 9.41992H16"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 12.5801H15.47"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

const SettingIcon = () => {
  return (
    <svg
      className="w-5 h-5 opacity-65 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const BookIcon = () => {
  return (
    <svg
      className="w-5 h-5 opacity-65 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 7H16"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.5H13"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const SupportIcon = () => {
  return (
    <svg
      className="w-5 h-5 opacity-65 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 6.19995V10C11.21 10.05 10.05 11.21 10 14H6.2C3.2 14 2 12.8 2 9.80005V6.19995C2 3.19995 3.2 2 6.2 2H9.8C12.8 2 14 3.19995 14 6.19995Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.96001 5.86996C6.43001 5.50996 5.73001 5.50998 5.20001 5.88998"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.96 5.86996C10.43 5.50996 9.73001 5.50998 9.20001 5.88998"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.15999 11.42H5.83999C5.53999 11.42 5.29999 11.18 5.29999 10.88C5.29999 9.39 6.50999 8.18005 7.99999 8.18005C8.63999 8.18005 9.22999 8.40002 9.68999 8.77002"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 14.2V17.8C22 20.8 20.8 22 17.8 22H14.2C11.2 22 10 20.8 10 17.8V14C10.05 11.21 11.21 10.05 14 10H17.8C20.8 10 22 11.2 22 14.2Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.96 13.62C14.43 13.98 13.73 13.98 13.2 13.6"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.96 13.62C18.43 13.98 17.73 13.98 17.2 13.6"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.84 16.1801H18.16C18.46 16.1801 18.7 16.42 18.7 16.72C18.7 18.21 17.49 19.42 16 19.42C14.51 19.42 13.3 18.21 13.3 16.72C13.3 16.42 13.54 16.1801 13.84 16.1801Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const AutomaticIcon = () => {
  return (
    <svg
      className="w-5 h-5 opacity-65 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8V13"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 2H15"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.9 18.5V17.34C14.9 15.91 15.92 15.32 17.16 16.04L18.16 16.62L19.16 17.2C20.4 17.92 20.4 19.09 19.16 19.81L18.16 20.39L17.16 20.97C15.92 21.69 14.9 21.1 14.9 19.67V18.5Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
const AppCodeIcon = () => {
  return (
    <svg
      className="w-5 h-5 opacity-65 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.89088 15.75C6.61088 15.75 6.35088 15.6 6.22088 15.34C6.03088 14.97 6.18088 14.52 6.56088 14.33C7.43088 13.9 8.17088 13.24 8.70088 12.44C8.88088 12.17 8.88088 11.83 8.70088 11.56C8.16088 10.76 7.42088 10.1 6.56088 9.67002C6.18088 9.49002 6.03088 9.04002 6.22088 8.66002C6.40088 8.29002 6.85088 8.14002 7.22088 8.33002C8.32088 8.88002 9.26088 9.71002 9.94088 10.73C10.4509 11.5 10.4509 12.5 9.94088 13.27C9.26088 14.29 8.32088 15.12 7.22088 15.67C7.12088 15.72 7.00088 15.75 6.89088 15.75Z"
        fill="#292D32"
      />
      <path
        d="M17 15.75H13C12.59 15.75 12.25 15.41 12.25 15C12.25 14.59 12.59 14.25 13 14.25H17C17.41 14.25 17.75 14.59 17.75 15C17.75 15.41 17.41 15.75 17 15.75Z"
        fill="#292D32"
      />
      <path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="#292D32"
      />
    </svg>
  )
}
const Sidebar = () => {
  const location = useLocation()

  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  if (location.pathname === '/u/login') {
    return null
  }
  return (
    <Sider
      width={230}
      theme="light"
      collapsed={collapsed}
      onCollapse={toggleSidebar}
      className="p-1  border-r-[1px]"
    >
      <SidebarContent collapsed={collapsed} toggleSidebar={toggleSidebar} />
      <AuthUser collapsed={collapsed} />
      <Menu
        style={menuStyle}
        theme="light"
        defaultSelectedKeys={['workflows']}
        className="border-r-0"
      >
        <Menu.Item key="workflows">
          <Link to="/u/workflows" className="flex items-center">
            {collapsed ? (
              <span className="mt-3">
                <WorkflowsIcon />
              </span>
            ) : (
              <span className=" flex items-center  gap-3">
                <WorkflowsIcon /> Workflows
              </span>
            )}
          </Link>
        </Menu.Item>

        <Menu.Item key="templates">
          <Link to="/u/templates" className="flex items-center">
            {' '}
            {collapsed ? (
              <span className="mt-3">
                <TemplateIcon />
              </span>
            ) : (
              <span className=" flex items-center  gap-3">
                <TemplateIcon /> Templates
              </span>
            )}
          </Link>
        </Menu.Item>
        <Menu.Item key="executions">
          <Link to="/u/executions" className="flex items-center ">
            {' '}
            {collapsed ? (
              <span className="mt-3">
                <ExecutionsIcon />
              </span>
            ) : (
              <span className=" flex items-center  gap-3">
                <ExecutionsIcon /> Workflow executions
              </span>
            )}
          </Link>
        </Menu.Item>
        <Menu.Item key="automatic">
          <Link to="/u/automatic" className="flex items-center ">
            {' '}
            {collapsed ? (
              <span className="mt-3">
                <AutomaticIcon />
              </span>
            ) : (
              <span className=" flex items-center  gap-3">
                <AutomaticIcon /> Automatic
              </span>
            )}
          </Link>
        </Menu.Item>
        <Menu.Item key="appcode">
          <Link to="/u/appcode" className="flex items-center ">
            {' '}
            {collapsed ? (
              <span className="mt-3">
                <AppCodeIcon />
              </span>
            ) : (
              <span className=" flex items-center  gap-3">
                <AppCodeIcon /> App Code
              </span>
            )}
          </Link>
        </Menu.Item>
        <Menu.Item key="docs">
          <Link to="/u/docs" className="flex items-center">
            {collapsed ? (
              <span className="mt-3">
                <BookIcon />
              </span>
            ) : (
              <span className=" flex items-center  gap-3">
                <BookIcon /> Learning & Socials
              </span>
            )}
          </Link>
        </Menu.Item>
        <Menu.Item key="support">
          <Link to="/u/support" className="flex items-center">
            {collapsed ? (
              <span className="mt-3">
                <SupportIcon />
              </span>
            ) : (
              <span className=" flex items-center  gap-3">
                <SupportIcon /> Support
              </span>
            )}
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
