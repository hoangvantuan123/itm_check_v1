import { useEffect, useState, useRef } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
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

const UserRouter = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const intervalRef = useRef(null)
  const [userPermissions, setUserPermissions] = useState([]);
  useEffect(() => {
    const refreshInterval = 1000 * 60 * 40

    const refreshToken = async () => {
      const token = localStorage.getItem('token_1h')
      if (token) {
        try {
          const result = await RefreshToken(token)
          console.log(result)
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
  }, [])
  useEffect(() => {
    const token = localStorage.getItem('token_1h')
    const userInfo = localStorage.getItem('userInfo')
    if (token && userInfo) {
      setIsLoggedIn(true)
    } else {
      localStorage.removeItem('token_1h')
      localStorage.removeItem('userInfo')
      navigate('/u/login')
    }
  }, [navigate])


  const fetchData = async () => {
    const response = await GetUserPermissions()
    if (response.success) {
      setUserPermissions(response.data)
    } else {
      setError(response.message)
      setUserPermissions([])
    }
  }
  useEffect(() => {
    fetchData()

  }, [])
 

  return (
    <Routes>
      <Route path="u/login" element={<Login />} />
      <Route path="u/register/Q9xT7ZvJ3KpF5Rm8" element={<Register />} />
      {isLoggedIn && (
        <Route
          path="/*"
          element={
            <Layout style={{ minHeight: '100vh' }}>
              <Sidebar permissions={userPermissions} />
              <Layout>
                <Content>
                  <Routes>
                    <Route path="u/home" element={<Default />} />
                    <Route
                      path={`u/profile/${JSON.parse(localStorage.getItem('userInfo'))?.login || 'none'}`}
                      element={<Profile />}
                    />
                    <Route
                      path={`u/action=1/general_settings`}
                      element={<GeneralSettings />}
                    />
                    <Route path={`u/notifications`} element={<Default />} />
                    <Route
                      path={`u/action=2/users`}
                      element={<UsersSettings />}
                    />
                    <Route
                      path={`u/action=3/groups_users`}
                      element={<GroupsUsersSettings />}
                    />
                    <Route path={`u/phone/work`} element={<Default />} />
                    <Route
                      path={`u/action=6/time_tracking`}
                      element={<TimeTracking />}
                    />
                    <Route path={`u/action=7/payroll`} element={<Default />} />
                    <Route
                      path={`u/action=4/technique_access`}
                      element={<Default />}
                    />
                    <Route
                      path={`u/action=5/technique_menu`}
                      element={<TechniqueMenu />}
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
