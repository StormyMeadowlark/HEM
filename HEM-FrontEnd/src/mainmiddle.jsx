import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingExperience from "./LandingExperience.jsx";
import ExperienceCTA from "./ExperienceCTA.jsx";

ReactDOM.createRoot(document.getElementById("middleroot")).render(
  <React.StrictMode>
    <LandingExperience />
    <ExperienceCTA />
  </React.StrictMode>
);
