import { useEffect, useState } from 'react'
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

const UserRouter = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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

  return (
    <Routes>
      <Route path="u/login" element={<Login />} />
      <Route path="u/register" element={<Register />} />
      {isLoggedIn && (
        <Route
          path="/*"
          element={
            <Layout style={{ minHeight: '100vh' }}>
              <Sidebar />
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
                    <Route
                      path={`u/notifications`}
                      element={<Default />}
                    />
                    <Route
                      path={`u/action=2/users`}
                      element={<UsersSettings />}
                    />
                    <Route
                      path={`u/action=3/groups_users`}
                      element={<GroupsUsersSettings />}
                    />
                    <Route
                      path={`u/phone/work`}
                      element={<Default />}
                    />
                    <Route
                      path={`u/action=6/time_tracking`}
                      element={<Default />}
                    />
                    <Route
                      path={`u/action=7/payroll`}
                      element={<Default />}
                    />
                    <Route
                      path={`u/action=4/technique_access`}
                      element={<Default />}
                    />
                    <Route
                      path={`u/action=5/technique_menu`}
                      element={<Default />}
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
