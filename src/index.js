import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.scss'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'
import App from './components/App'

const store = configureStore({ reducer })
const ROOT = createRoot(document.getElementById('root'))

ROOT.render(
  <Provider store={store}>
    <App />
  </Provider>
)

// const { toggleCheck, toggleSort } = bindActionCreators(actions, dispatch)
