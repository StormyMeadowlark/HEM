import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingServices from "./LandingServices.jsx";
import LandingExperience from "./LandingExperience.jsx";
import ShoutOuts from "./ShoutOuts.jsx";
import ExperienceCTA from "./ExperienceCTA.jsx";

ReactDOM.createRoot(document.getElementById("middleroot")).render(
  <React.StrictMode>
    <ShoutOuts />
    <LandingServices />
    <LandingExperience />
    <ExperienceCTA />
  </React.StrictMode>
);
