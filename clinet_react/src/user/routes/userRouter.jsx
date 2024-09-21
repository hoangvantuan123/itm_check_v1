import { useEffect, useState, useRef } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from 'react-router-dom'
import { Layout } from 'antd'
import Sidebar from '../components/sildebar-frame/sidebar'
import Home from '../pages/home'
import Login from '../auth/login'
import Register from '../auth/register'
import Profile from '../pages/profile'
import Setting from '../pages/settingAdmin'
import GeneralSettings from '../pages/generalSettings'
import Notifications from '../pages/notifications'
import WorkTimeTracking from '../pages/workTimeTracking'
import GroupsUsersSettings from '../pages/groupsUserSettings'
const { Content } = Layout
import { useTranslation } from 'react-i18next'
import UsersSettings from '../pages/usersSettings'
import Default from '../pages/default'
import { RefreshToken } from '../../features/auth/API/refreshToken'
import TimeTracking from '../pages/TimeTracking'
import TechniqueMenu from '../pages/techniqueMenu'
import { GetUserPermissions } from '../../features/auth/API/getPermissions'
import { checkActionPermission } from '../../permissions'
import Unauthorized from '../pages/unauthorized'
import Spinner from '../pages/load'
import ErrorServer from '../pages/errorServer'
import Cookies from 'js-cookie'
import PhoneWork from '../pages/phoneWork'

const UserRouter = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const intervalRef = useRef(null)
  const [userPermissions, setUserPermissions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showSpinner, setShowSpinner] = useState(false)
  /*  useEffect(() => {
    const refreshInterval = 1000 * 60 * 40

    const refreshToken = async () => {
      const token = localStorage.getItem('token_1h')
      if (token) {
        try {
          const result = await RefreshToken(token)
          if (!result.success) {
            console.error(result.message)
          }
        } catch (error) {
          console.error('Error refreshing token:', error)
        }
      }
    }

    intervalRef.current = setInterval(refreshToken, refreshInterval)

    return () => clearInterval(intervalRef.current)
  }, []) */
  useEffect(() => {
    const token = Cookies.get('accessToken')
    const userInfo = localStorage.getItem('userInfo')
    if (token && userInfo) {
      setIsLoggedIn(true)
    } else {
      Cookies.remove('accessToken')
      localStorage.removeItem('userInfo')
      navigate('/u/login')
    }
  }, [navigate])

  const fetchData = async () => {
    setLoading(true)
    setShowSpinner(false)

    try {
      const response = await GetUserPermissions()
      if (response.success) {
        setUserPermissions(response.data)
        setError(null)
      } else {
        setError(response.message)
        Cookies.remove('accessToken')
        localStorage.removeItem('userInfo')
      }
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isLoggedIn === true) {
      fetchData()
    }
  }, [isLoggedIn])

  if (loading) {
    return <Spinner />
  }
  if (error) {
    return <ErrorServer />
  }
  return (
    <Routes>
      <Route path="u/login" element={<Login />} />
      {/*  <Route path="u/register/Q9xT7ZvJ3KpF5Rm8" element={<Register />} /> */}
      {isLoggedIn && (
        <Route
          path="/*"
          element={
            <Layout style={{ minHeight: '100vh' }}>
              <Sidebar permissions={userPermissions} />
              <Layout>
                <Content>
                  <Routes>
                    <Route
                      path="u/home"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'home',
                          'view',
                        ) ? (
                          <Default />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />
                    <Route
                      path={`u/profile/${JSON.parse(localStorage.getItem('userInfo'))?.login || 'none'}`}
                      element={<Profile />}
                    />
                    <Route
                      path="u/action=1/general_settings"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'setting',
                          'view',
                        ) ? (
                          <GeneralSettings />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />

                    <Route
                      path="u/notifications"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'notifications',
                          'view',
                        ) ? (
                          <Default />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />
                    <Route
                      path="u/action=2/users"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'setting-1-2',
                          'view',
                        ) ? (
                          <UsersSettings />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />
                    <Route
                      path="u/action=3/groups_users"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'setting-1-3',
                          'view',
                        ) ? (
                          <GroupsUsersSettings />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />

                    <Route path={`u/phone/work`} element={<PhoneWork />} />

                    <Route
                      path="u/action=6/time_tracking"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'work-1-1',
                          'view',
                        ) ? (
                          <TimeTracking />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />
                    <Route
                      path="u/action=7/payroll"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'work-1-2',
                          'view',
                        ) ? (
                          <Default />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />
                    <Route
                      path="u/action=4/technique_access"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'setting-2-1-1',
                          'view',
                        ) ? (
                          <Default />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />
                    <Route
                      path="u/action=5/technique_menu"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'setting-2-1-2',
                          'view',
                        ) ? (
                          <TechniqueMenu />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />
                  </Routes>
                </Content>
              </Layout>
            </Layout>
          }
        />
      )}
    </Routes>
  )
}

const App = () => (
  <Router>
    <UserRouter />
  </Router>
)

export default App
