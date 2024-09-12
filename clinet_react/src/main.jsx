import ReactDOM from 'react-dom'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store'
import './index.css'
import '../i18n.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
