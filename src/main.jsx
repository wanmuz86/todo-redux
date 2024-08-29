import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReduxProvider from './ReduxProvider.jsx'


createRoot(document.getElementById('root')).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>,
)
