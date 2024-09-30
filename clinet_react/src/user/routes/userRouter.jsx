import { useEffect, useState, useRef } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
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
import UsersSettings from '../pages/usersSettings'
import Default from '../pages/default'
import TimeTracking from '../pages/TimeTracking'
import TechniqueMenu from '../pages/techniqueMenu'
import Unauthorized from '../pages/unauthorized'
import Spinner from '../pages/load'
import ErrorServer from '../pages/errorServer'
import Cookies from 'js-cookie'
import PhoneWork from '../pages/phoneWork'
import Personnel from '../pages/personnel'
import PhoneNotifications from '../pages/phoneNotifications'
import PassFormPage from '../pages/passFormPage'
import MultiStepFormPage from '../pages/multiStepFormPage'
import WorkerDeclarationPassForm from '../pages/workerDeclarationPassForm'
import WorkerDeclarationMultiStepForm from '../pages/workerDeclarationMultiStepForm'
import EmployeeRecruitment from '../pages/employeeRecruitment'
import WorkerRecruitmentPage from '../pages/workerRecruitment'
import SuccessNotification from '../pages/successNotification'
import { useTranslation } from 'react-i18next'
import { RefreshToken } from '../../features/auth/API/refreshToken'
import { GetUserPermissions } from '../../features/auth/API/getPermissions'
import { checkActionPermission } from '../../permissions'
import DetailUserHrRecruitment from '../pages/detailUserHrRecruitment'
import DetailUserHrInterview from '../pages/detailUserHrInterview'

const { Content } = Layout

const UserRouter = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userPermissions, setUserPermissions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showSpinner, setShowSpinner] = useState(false)
  const skippedRoutes = [
    '/public/apply/recruitment/phone',
    '/public/apply/form/1',
    '/public/apply/information/phone',
    '/public/apply/form/2',
    '/public/apply/thong-bao',
  ]

  // Hàm kiểm tra trạng thái đăng nhập
  const checkLoginStatus = () => {
    const token = Cookies.get('accessToken')
    const userInfo = localStorage.getItem('userInfo')

    if (token && userInfo) {
      setIsLoggedIn(true)
    } else {
      Cookies.remove('accessToken')
      localStorage.removeItem('userInfo')
      navigate('/u/login')
    }
  }

  useEffect(() => {
    if (!skippedRoutes.includes(location.pathname)) {
      checkLoginStatus()
    }
  }, [location.pathname])

  const fetchPermissions = async () => {
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
        navigate('/u/login')
      }
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      fetchPermissions()
    }
  }, [isLoggedIn])

  if (loading) return <Spinner />
  if (error) return <ErrorServer />

  return (
    <Routes>
      {/* Các route không yêu cầu đăng nhập */}

      <Route
        path="/public/apply/recruitment/phone"
        element={<PassFormPage />}
      />
      <Route
        path="/public/apply/information/phone"
        element={<WorkerDeclarationPassForm />}
      />
      <Route path="/public/apply/form/1" element={<MultiStepFormPage />} />
      <Route
        path="/public/apply/form/2"
        element={<WorkerDeclarationMultiStepForm />}
      />
      <Route path="/public/apply/thong-bao" element={<SuccessNotification />} />

      {/* Router riêng tư */}
      <Route path="u/login" element={<Login />} />
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
                      element={<Profile permissions={userPermissions} />}
                    />
                    <Route
                      path="u/action=1/general_settings"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'setting',
                          'view',
                        ) ? (
                          <GeneralSettings permissions={userPermissions} />
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
                          <Notifications />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />
                    <Route
                      path="u/phone/notifications"
                      element={<PhoneNotifications />}
                    />
                    <Route
                      path="u/action=2/users"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'setting-1-2',
                          'view',
                        ) ? (
                          <UsersSettings permissions={userPermissions} />
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
                          <GroupsUsersSettings permissions={userPermissions} />
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
                          <TechniqueMenu permissions={userPermissions} />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />
                    <Route
                      path="/a/action=8/personnel"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'setting-2-1-2',
                          'view',
                        ) ? (
                          <Personnel />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />
                    <Route
                      path="/u/action=17/employee-recruitment-data"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'hr-recruitment-1-1',
                          'view',
                        ) ? (
                          <EmployeeRecruitment permissions={userPermissions} />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />
                    <Route
                      path="/u/action=18/worker-recruitment-data"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'hr-recruitment-1-2',
                          'view',
                        ) ? (
                          <WorkerRecruitmentPage
                            permissions={userPermissions}
                          />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />
                    <Route
                      path="/u/action=18/worker-recruitment-data/detail/:id"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'hr-recruitment-1-2',
                          'view',
                        ) ? (
                          <DetailUserHrRecruitment />
                        ) : (
                          <Unauthorized />
                        )
                      }
                    />
                    <Route
                      path="/u/action=19/worker-interview-data/detail/:id"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'hr-recruitment-1-1',
                          'view',
                        ) ? (
                          <DetailUserHrInterview />
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
