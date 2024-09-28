import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserRouter from './user/routes/userRouter'

const App = () => {
  return (
    <div className="h-screen overflow-hidden ">
      <UserRouter />
    </div>
  )
}

export default App
