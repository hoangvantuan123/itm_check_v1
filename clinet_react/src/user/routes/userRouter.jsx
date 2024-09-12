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
import WorkTimeTracking from '../pages/workTimeTracking'
const { Content } = Layout
import { useTranslation } from 'react-i18next'
const UserRouter = () => {
  const { t } = useTranslation()
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userNameLogin = userFromLocalStorage?.login || 'none'
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('userInfo'),
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/u/login')
    }
  }, [isLoggedIn, navigate])

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
                    <Route path="u/home" element={<Home />} />
                    <Route
                      path={`u/profile/${userNameLogin}`}
                      element={<Profile />}
                    />
                    <Route
                      path={`u/action=1/general_settings`}
                      element={<Setting />}
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
