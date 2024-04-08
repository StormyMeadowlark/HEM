import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TopHeader from './TopHeader.jsx'
import BottomHeader from './BottomHeader.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TopHeader />
    <BottomHeader />
    <App />
  </React.StrictMode>,
)
