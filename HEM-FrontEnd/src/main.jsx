import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TopHeader from "./TopHeader.jsx";
import BottomHeader from "./BottomHeader.jsx";
import LandingExperience from "./LandingExperience.jsx";
import Features from "./Features.jsx";
import LandingServices from "./LandingServices.jsx";
import ShoutOuts from "./ShoutOuts.jsx";
import LandingTestimonials from "./LandingTestimonials.jsx";
import OnlineOffers from "./OnlineOffers.jsx";
import Footer from "./Footer.jsx";
import LandingRandomVehicle from "./LandingRandomVehicle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TopHeader />
    <BottomHeader />
    <Features />
    <ShoutOuts />
    <LandingServices />
    <LandingRandomVehicle />
    <LandingExperience />
    <LandingTestimonials />
    <OnlineOffers />
    <Footer />
  </React.StrictMode>
);
