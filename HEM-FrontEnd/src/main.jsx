import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TopHeader from './TopHeader.jsx'
import BottomHeader from './BottomHeader.jsx'
import LandingServices from './LandingServices.jsx'
import LandingExperience from './LandingExperience.jsx'
import LandingRandomVehicle from './LandingRandomVehicle.jsx'
import LandingReasons from './LandingReasons.jsx'
import LandingTestimonials from './LandingTestimonials.jsx'
import OnlineOffers from './OnlineOffers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TopHeader />
    <BottomHeader />
    <LandingServices />
    <LandingExperience />
    <LandingRandomVehicle />
    <LandingReasons />
    <LandingTestimonials />
    <OnlineOffers />

  </React.StrictMode>,
)
