import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingServices from "./LandingServices.jsx";
import ShoutOuts from "./ShoutOuts.jsx";


ReactDOM.createRoot(document.getElementById("ShoutoutsServices")).render(
  <React.StrictMode>
    <ShoutOuts />
    <LandingServices />
  </React.StrictMode>
);
