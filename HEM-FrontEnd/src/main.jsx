import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TopHeader from "./TopHeader.jsx";
import BottomHeader from "./BottomHeader.jsx";
import LandingServices from './LandingServices.jsx'
import LandingExperience from './LandingExperience.jsx'
import Features from './Features.jsx';
import ShoutOuts from './ShoutOuts.jsx';
import ExperienceCTA from './ExperienceCTA.jsx';
import RandomVehicleSectionTitle from './RandomVehicleSectionTitle.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TopHeader />
    <BottomHeader />
    <Features />
    <ShoutOuts />
    <LandingServices />
    <LandingExperience />
    <ExperienceCTA />
    <RandomVehicleSectionTitle />
  </React.StrictMode>
);
