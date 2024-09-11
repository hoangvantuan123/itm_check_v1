import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { Layout } from 'antd'
import Sidebar from '../components/sildebar-frame/sidebar'
import Home from '../pages/home'
import Login from '../auth/login'
import Templates from '../pages/templates'

const { Content } = Layout

const UserRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'))
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/u/login')  
    }
  }, [isLoggedIn, navigate])

  return (
    <Routes>
      <Route path="u/login" element={<Login />} />
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
                    <Route path="u/templates" element={<Templates />} />
                    {/* Thêm các route khác ở đây */}
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
