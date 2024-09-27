import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

const PrivateRoute = ({ userPermissions, requiredPermissions }) => {
  const token = Cookies.get('accessToken')
  const userInfo = localStorage.getItem('userInfo')

  if (!token || !userInfo) {
    return <Navigate to="/u/login" replace />
  }

  if (requiredPermissions && userPermissions) {
    const hasPermission = requiredPermissions.every((permission) =>
      userPermissions.includes(permission),
    )
    if (!hasPermission) {
      return <Navigate to="/unauthorized" replace />
    }
  }

  return <Outlet />
}

export default PrivateRoute
