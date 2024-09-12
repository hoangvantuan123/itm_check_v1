import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react' // Import useEffect để xử lý responsive
import SidebarContent from './styled-components/toggle-sidebar'
import AuthUser from '../auth'
import { useTranslation } from 'react-i18next'
const { Sider, Footer } = Layout
const { SubMenu } = Menu // Import SubMenu từ Menu
const menuStyle = {
  borderInlineEnd: 'none',
}

const HomeIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="Home-2--Streamline-Solar-Ar"
      className="w-5 h-5 opacity-65 "
    >
      <path
        d="M1.0605 12.2231C1.0605 9.7196 1.0605 8.4679 1.6284 7.4303C2.1964 6.3926 3.2341 5.7486 5.3094 4.4606L7.4973 3.1027C9.6911 1.7412 10.788 1.0605 12 1.0605C13.212 1.0605 14.3089 1.7412 16.5027 3.1027L18.6906 4.4606C20.766 5.7486 21.8036 6.3926 22.3715 7.4303C22.9395 8.4679 22.9395 9.7196 22.9395 12.2231V13.8871C22.9395 18.1544 22.9395 20.2881 21.6579 21.6138C20.3763 22.9395 18.3134 22.9395 14.1879 22.9395H9.8121C5.6865 22.9395 3.6238 22.9395 2.3421 21.6138C1.0605 20.2881 1.0605 18.1544 1.0605 13.8871V12.2231Z"
        stroke="#000000"
        strokeWidth="1.5"
      ></path>
      <path
        d="M12 15.2819V18.5637"
        stroke="#000000"
        strokeLinecap="round"
        strokeWidth="1.5"
      ></path>
    </svg>
  )
}
const BoxIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="Box-Minimalistic--Streamline-Solar-Ar"
      className="w-5 h-5 opacity-65 "
    >
      <path
        d="M15.9138 2.5723L18.1017 3.7204C20.4556 4.9557 21.6325 5.5733 22.286 6.6831C22.9395 7.7929 22.9395 9.174 22.9395 11.936V12.064C22.9395 14.826 22.9395 16.2071 22.286 17.3169S20.4556 19.0443 18.1017 20.2796L15.9138 21.4277C13.9933 22.4355 13.033 22.9395 12 22.9395C10.967 22.9395 10.0067 22.4356 8.0861 21.4277L5.8982 20.2796C3.5444 19.0443 2.3675 18.4268 1.714 17.317C1.0605 16.2071 1.0605 14.826 1.0605 12.064V11.936C1.0605 9.174 1.0605 7.7929 1.714 6.6831C2.3675 5.5733 3.5444 4.9557 5.8982 3.7204L8.0862 2.5723C10.0067 1.5644 10.967 1.0605 12 1.0605C13.033 1.0605 13.9933 1.5644 15.9138 2.5723Z"
        stroke="#000000"
        strokeLinecap="round"
        strokeWidth="1.5"
      ></path>
      <path
        d="M21.8456 7.0772L12 12M12 12L2.1544 7.0772M12 12V22.3926"
        stroke="#000000"
        strokeLinecap="round"
        strokeWidth="1.5"
      ></path>
    </svg>
  )
}

const UserIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="User-Circle--Streamline-Solar-Ar"
      className="w-5 h-5 opacity-65 "
    >
      <path
        stroke="#000000"
        d="M8.7181 8.7181C8.7181 11.2445 11.453 12.8235 13.6409 11.5603C14.6563 10.9741 15.2819 9.8906 15.2819 8.7181C15.2819 6.1918 12.547 4.6128 10.3591 5.876C9.3437 6.4622 8.7181 7.5456 8.7181 8.7181"
        strokeWidth="1.5"
      ></path>
      <path
        stroke="#000000"
        d="M1.0605 12C1.0605 20.4213 10.1767 25.6845 17.4698 21.4739C20.8545 19.5198 22.9395 15.9083 22.9395 12C22.9395 3.5787 13.8233 -1.6845 6.5302 2.5261C3.1455 4.4802 1.0605 8.0917 1.0605 12"
        strokeWidth="1.5"
      ></path>
      <path
        d="M18.53 20.7516C18.356 17.5885 17.3875 15.2819 12 15.2819C6.6126 15.2819 5.6441 17.5885 5.47 20.7516"
        stroke="#000000"
        strokeLinecap="round"
        strokeWidth="1.5"
      ></path>
    </svg>
  )
}

const SettingIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="Settings--Streamline-Solar-Ar"
      className="w-5 h-5 opacity-65 "
    >
      <path
        stroke="#000000"
        d="M8.7181 12C8.7181 14.5264 11.453 16.1054 13.6409 14.8422C14.6563 14.2559 15.2819 13.1725 15.2819 12C15.2819 9.4736 12.547 7.8946 10.3591 9.1578C9.3437 9.7441 8.7181 10.8275 8.7181 12"
        strokeWidth="1.5"
      ></path>
      <path
        d="M13.9313 1.227C13.5291 1.0605 13.0195 1.0605 12 1.0605C10.9805 1.0605 10.4709 1.0605 10.0687 1.227C9.5327 1.4491 9.1067 1.875 8.8847 2.4111C8.7833 2.6558 8.7436 2.9404 8.7281 3.3556C8.7053 3.9657 8.3924 4.5304 7.8637 4.8356C7.335 5.1409 6.6895 5.1295 6.1497 4.8442C5.7825 4.6501 5.5161 4.5421 5.2535 4.5075C4.6782 4.4318 4.0964 4.5877 3.636 4.9409C3.2908 5.2059 3.0359 5.6473 2.5262 6.5302C2.0165 7.413 1.7616 7.8544 1.7048 8.2859C1.6291 8.8612 1.785 9.4431 2.1382 9.9034C2.2994 10.1136 2.526 10.2901 2.8777 10.5111C3.3947 10.836 3.7274 11.3895 3.7274 12C3.7273 12.6105 3.3947 13.1639 2.8777 13.4886C2.526 13.7097 2.2993 13.8864 2.1381 14.0966C1.7848 14.5569 1.6289 15.1387 1.7047 15.714C1.7615 16.1454 2.0164 16.5869 2.5261 17.4698C3.0358 18.3526 3.2907 18.7941 3.6359 19.059C4.0963 19.4122 4.6781 19.5681 5.2534 19.4924C5.516 19.4578 5.7823 19.3498 6.1496 19.1558C6.6894 18.8705 7.3349 18.8591 7.8637 19.1643C8.3924 19.4696 8.7053 20.0343 8.7281 20.6445C8.7436 21.0596 8.7833 21.3442 8.8847 21.5889C9.1067 22.125 9.5327 22.551 10.0687 22.773C10.4709 22.9395 10.9806 22.9395 12 22.9395C13.0195 22.9395 13.5291 22.9395 13.9313 22.773C14.4673 22.551 14.8933 22.125 15.1153 21.5889C15.2167 21.3442 15.2564 21.0596 15.2719 20.6444C15.2947 20.0343 15.6075 19.4696 16.1362 19.1643C16.665 18.859 17.3105 18.8705 17.8504 19.1558C18.2176 19.3498 18.4839 19.4577 18.7464 19.4923C19.3217 19.5681 19.9036 19.4122 20.3639 19.059C20.7092 18.794 20.9641 18.3526 21.4738 17.4697C21.9835 16.5868 22.2384 16.1454 22.2952 15.714C22.3709 15.1387 22.215 14.5568 21.8618 14.0964C21.7005 13.8863 21.4739 13.7096 21.1222 13.4886C20.6053 13.1639 20.2726 12.6104 20.2726 11.9999S20.6053 10.8361 21.1222 10.5113C21.474 10.2903 21.7007 10.1137 21.8619 9.9034C22.2151 9.4431 22.371 8.8613 22.2953 8.286C22.2385 7.8545 21.9837 7.4131 21.4739 6.5302C20.9642 5.6474 20.7093 5.2059 20.3641 4.941C19.9037 4.5878 19.3218 4.4319 18.7465 4.5076C18.484 4.5422 18.2177 4.6501 17.8504 4.8442C17.3106 5.1295 16.6651 5.1409 16.1364 4.8357C15.6075 4.5304 15.2947 3.9656 15.2719 3.3555C15.2564 2.9404 15.2167 2.6558 15.1153 2.4111C14.8933 1.875 14.4673 1.4491 13.9313 1.227Z"
        stroke="#000000"
        strokeWidth="1.5"
      ></path>
    </svg>
  )
}
const WorkIcon = () => {
  return (
    <svg
      viewBox="-0.5 -0.5 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="Case-Minimalistic--Streamline-Solar-Ar"
      className="w-5 h-5 opacity-65"
    >
      <path
        d="M8.867437500000001 3.0558125H6.1325625C5.2055 3.0558125 4.445125 3.0558125 3.8141874999999996 3.0930625000000003C2.690125 3.159375 1.976875 3.3438125000000003 1.4638125 3.856875C0.6628125 4.657875000000001 0.6628125 5.947125 0.6628125 8.5255625S0.6628125 12.3933125 1.4638125 13.1943125C2.264875 13.995375000000001 3.5540624999999997 13.995375000000001 6.1325625 13.995375000000001H8.867437500000001C11.445875000000001 13.995375000000001 12.7351875 13.995375000000001 13.536125000000002 13.1943125C14.337187499999999 12.3933125 14.337187499999999 11.104062500000001 14.337187499999999 8.5255625C14.337187499999999 5.947125 14.337187499999999 4.657875000000001 13.5361875 3.856875C13.023187499999999 3.3438125000000003 12.3098125 3.159375 11.185875000000001 3.0930625000000003C10.554875 3.0558125 9.794500000000001 3.0558125 8.867437500000001 3.0558125Z"
        stroke="#000000"
        strokeWidth="1"
      ></path>
      <path
        d="M3.8143124999999998 3.0930625000000003C4.3773125 3.0787500000000003 4.874 2.683125 5.0655625 2.1535C5.0714375 2.13725 5.077500000000001 2.119125 5.0895624999999995 2.082875L5.107125 2.03025C5.135999999999999 1.9436875 5.150375 1.9004375000000002 5.1658124999999995 1.8620625C5.362875000000001 1.371875 5.824625 1.0390625 6.351875 1.0071875C6.393187500000001 1.0046249999999999 6.438812499999999 1.0046249999999999 6.5300625 1.0046249999999999H8.47025C8.561499999999999 1.0046249999999999 8.6070625 1.0046249999999999 8.648375 1.007125C9.1756875 1.0390625 9.6374375 1.371875 9.8345 1.8620625C9.849875 1.9004375000000002 9.8643125 1.9436875 9.893125000000001 2.03025L9.91075 2.082875C9.92275 2.1190625 9.928812500000001 2.13725 9.93475 2.1535C10.126312500000001 2.683125 10.6229375 3.0787500000000003 11.186 3.0930625000000003"
        stroke="#000000"
        strokeWidth="1"
      ></path>
      <path
        d="M14.106000000000002 4.915375C12.0480625 6.2529375 11.019125 6.921749999999999 9.934375 7.2588125C8.348875 7.751375 6.651249999999999 7.751375 5.0656875 7.2588125C3.981 6.921749999999999 2.9520625000000003 6.2529375 0.8941250000000001 4.915375"
        stroke="#000000"
        strokeLinecap="round"
        strokeWidth="1"
      ></path>
      <path
        d="M4.765125 6.4744375V7.841875"
        stroke="#000000"
        strokeLinecap="round"
        strokeWidth="1"
      ></path>
      <path
        d="M10.234875 6.4744375V7.841875"
        stroke="#000000"
        strokeLinecap="round"
        strokeWidth="1"
      ></path>
    </svg>
  )
}
const NotificationIcon = () => {
  return (
    <svg
      viewBox="-0.5 -0.5 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="Notification-Unread-Lines--Streamline-Solar-Ar"
     className="w-5 h-5 opacity-65 "
    >
  
      <path
        d="M14.337187499999999 6.4744375V7.5C14.337187499999999 10.723062500000001 14.337187499999999 12.334624999999999 13.335875 13.335875C12.3346875 14.337187499999999 10.723062500000001 14.337187499999999 7.5 14.337187499999999C4.276875 14.337187499999999 2.665375 14.337187499999999 1.6640625 13.335875C0.6628125 12.3346875 0.6628125 10.723062500000001 0.6628125 7.5C0.6628125 4.276875 0.6628125 2.665375 1.6640625 1.6640625C2.665375 0.6628125 4.276875 0.6628125 7.5 0.6628125H8.5255625"
        stroke="#000000"
        stroke-linecap="round"
        stroke-width="1"
      ></path>
      <path
        stroke="#000000"
        d="M10.234875 2.7139375C10.234875 4.2929375 11.944187500000002 5.279812499999999 13.311625 4.4903125C13.94625 4.1239375 14.337187499999999 3.44675 14.337187499999999 2.7139375C14.337187499999999 1.135 12.6279375 0.148125 11.2604375 0.9376249999999999C10.6258125 1.3039999999999998 10.234875 1.981125 10.234875 2.7139375"
        stroke-width="1"
      ></path>
      <path
        d="M4.0813749999999995 8.867437500000001H10.234875"
        stroke="#000000"
        stroke-linecap="round"
        stroke-width="1"
      ></path>
      <path
        d="M4.0813749999999995 11.2604375H8.1836875"
        stroke="#000000"
        stroke-linecap="round"
        stroke-width="1"
      ></path>
    </svg>
  )
}
const Sidebar = () => {
  const location = useLocation()
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userNameLogin = userFromLocalStorage?.login || 'none'
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { t } = useTranslation()
  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  // Xử lý responsive
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize() // Gọi lần đầu tiên khi component mount
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (location.pathname === '/u/login') {
    return null
  }

  return (
    <>
      {!isMobile ? (
        <Sider
          width={230}
          theme="light"
          collapsed={collapsed}
          onCollapse={toggleSidebar}
          className="p-1 border-r-[1px]"
        >
          <SidebarContent collapsed={collapsed} toggleSidebar={toggleSidebar} />
          <AuthUser collapsed={collapsed} />
          <Menu
            style={menuStyle}
            theme="light"
            defaultSelectedKeys={['home']}
            className="border-r-0"
          >
            {/* Menu cha - Home */}
            <Menu.Item key="home">
              <Link to="/u/home" className="flex items-center justify-start">
                <span
                  className={`icon-wrapper ${collapsed ? ' justify-center mt-2' : ''}`}
                >
                  <HomeIcon />
                </span>
                {!collapsed && (
                  <span className="ml-3">{t('side_bar.home')}</span>
                )}
              </Link>
            </Menu.Item>

            {/* Menu có nhiều cấp */}

            <SubMenu
              key="work"
              title={
                <span className="flex items-center gap-3">
                  <span
                    className={`icon-wrapper ${collapsed ? ' justify-center mt-2' : ''}`}
                  >
                    <WorkIcon />
                  </span>
                  {!collapsed && <span>{t('side_bar.work')}</span>}
                </span>
              }
            >
              <Menu.Item key="work-1-1">
                <Link
                  to="/u/action=6/time_tracking"
                  className="flex items-center justify-start"
                >
                  {t('side_bar.time_tracking')}
                </Link>
              </Menu.Item>

              <Menu.Item key="work-1-2">
                <Link
                  to="/u/action=7/payroll"
                  className="flex items-center justify-start"
                >
                  {t('side_bar.payroll')}
                </Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="setting"
              title={
                <span className="flex items-center gap-3">
                  <span
                    className={`icon-wrapper ${collapsed ? ' justify-center mt-2' : ''}`}
                  >
                    <SettingIcon />
                  </span>
                  {!collapsed && <span>{t('side_bar.setting')}</span>}
                </span>
              }
            >
              <Menu.Item key="setting-1-1">
                <Link
                  to="/u/action=1/general_settings"
                  className="flex items-center justify-start"
                >
                  {t('side_bar.general_settings')}
                </Link>
              </Menu.Item>

              <Menu.Item key="setting-1-2">
                <Link
                  to="/u/action=2/users"
                  className="flex items-center justify-start"
                >
                  {t('side_bar.users')}
                </Link>
              </Menu.Item>
              <Menu.Item key="setting-1-3">
                <Link
                  to="/u/action=3/groups_users"
                  className="flex items-center justify-start"
                >
                  {t('side_bar.groups_users')}
                </Link>
              </Menu.Item>

              <SubMenu
                key="setting-2-1"
                title={
                  <span className="flex items-center gap-3">
                    {' '}
                    {t('side_bar.technique')}
                  </span>
                }
              >
                <Menu.Item key="setting-2-1-1">
                  <Link
                    to="/u/action=4/technique_access"
                    className="flex items-center justify-start"
                  >
                    {t('side_bar.technique_access')}
                  </Link>
                </Menu.Item>

                <Menu.Item key="setting-2-1-2">
                  <Link
                    to="/u/action=5/technique_menu"
                    className="flex items-center justify-start"
                  >
                    {t('side_bar.technique_menu')}
                  </Link>
                </Menu.Item>
              </SubMenu>
            </SubMenu>
            {/*   <SubMenu
              key="submenu1"
              title={
                <span className="flex items-center gap-3">
                  <span
                    className={`icon-wrapper ${collapsed ? ' justify-center mt-2' : ''}`}
                  >
                    <HomeIcon />
                  </span>
                  {!collapsed && 'Menu Cha'}
                </span>
              }
            >
              <Menu.Item key="submenu1-1">
                <Link to="/u/item1" className="flex items-center justify-start">
                  Menu Item 1
                </Link>
              </Menu.Item>

              <Menu.Item key="submenu1-2">
                <Link to="/u/item2" className="flex items-center justify-start">
                  Menu Item 2
                </Link>
              </Menu.Item>

              <SubMenu
                key="submenu1-submenu2"
                title={
                  <span className="flex items-center gap-3">Menu Con</span>
                }
              >
                <Menu.Item key="submenu1-2-1">
                  <Link
                    to="/u/subitem1"
                    className="flex items-center justify-start"
                  >
                    Menu Con 1
                  </Link>
                </Menu.Item>

                <Menu.Item key="submenu1-2-2">
                  <Link
                    to="/u/subitem2"
                    className="flex items-center justify-start"
                  >
                    Menu Con 2
                  </Link>
                </Menu.Item>
              </SubMenu>
            </SubMenu> */}
          </Menu>
        </Sider>
      ) : (
        <Footer className="fixed bottom-0 w-full bg-white border-t-[1px] border-b-0 pt-3  pb-4 p-0">
          <div className="flex justify-around w-full space-x-4">
            <div className="flex-1 text-center">
              <Link to="/u/home" className="flex flex-col items-center">
                <HomeIcon />
                <span className="mt-2  font-semibold">
                  {' '}
                  {t('footer_app.home')}
                </span>
              </Link>
            </div>
            <div className="flex-1 text-center">
              <Link to="/u/phone/work" className="flex flex-col items-center">
                <WorkIcon />
                <span className="mt-2  font-semibold">
                  {t('side_bar.work')}
                </span>
              </Link>
            </div>
            <div className="flex-1 text-center">
              <Link to="/u/phone/item2" className="flex flex-col items-center">
                <NotificationIcon />
                <span className="mt-2  font-semibold"> {t('side_bar.notifications')}</span>
              </Link>
            </div>
            <div className="flex-1 text-center ">
              <Link
                to={`u/profile/${userNameLogin}`}
                className="flex flex-col items-center"
              >
                <UserIcon />
                <span className="mt-2 font-semibold">
                  {t('footer_app.profile')}
                </span>
              </Link>
            </div>
          </div>
        </Footer>
      )}
    </>
  )
}

export default Sidebar
