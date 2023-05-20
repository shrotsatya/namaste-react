import React from "react";
import ReactDOM  from "react-dom/client";

const heading=React.createElement('h1',{}, ['I am Satyam...']);
const root =  ReactDOM.createRoot(document.getElementById('heading_first'));
root.render(heading);