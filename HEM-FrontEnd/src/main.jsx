import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TopHeader from "./TopHeader.jsx";
import BottomHeader from "./BottomHeader.jsx";
import Features from './Features.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TopHeader />
    <BottomHeader />
    <Features />
  </React.StrictMode>
);
