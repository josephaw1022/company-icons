import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@josephaw1022/company-icons-web';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
