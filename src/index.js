import { createRoot } from 'react-dom/client'

import './index.scss'
import App from './components/App'

const ROOT = createRoot(document.getElementById('root'))
ROOT.render(<App />)
