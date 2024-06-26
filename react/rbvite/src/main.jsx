import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CountProvide } from './hooks/count-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvide>
    <App />
    </CountProvide>
  </React.StrictMode>,
)