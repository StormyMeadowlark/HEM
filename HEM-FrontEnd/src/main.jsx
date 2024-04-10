import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TopHeader from './TopHeader.jsx'
import BottomHeader from './BottomHeader.jsx'
import LandingServices from './LandingServices.jsx'
import LandingExperience from './LandingExperience.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TopHeader />
    <BottomHeader />
    <LandingServices />
    <LandingExperience />
  </React.StrictMode>,
)
