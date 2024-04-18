import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingReasons from './LandingReasons.jsx'
import LandingTestimonials from './LandingTestimonials.jsx'
import OnlineOffers from './OnlineOffers.jsx'

ReactDOM.createRoot(document.getElementById("root2")).render(
  <React.StrictMode>
    <LandingReasons />
    <LandingTestimonials />
    <OnlineOffers />
  </React.StrictMode>
);
