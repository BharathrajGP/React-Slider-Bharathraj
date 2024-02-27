import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import { ReactSliderBharath } from "./components";

const App = () => {

  const input = {
    name:"Subjects",
    series: ["All", "Kannada", "English", "Maths", "Science", "Social"],
    label:true,
    color: "#D9D9D9",
    height:7,
    thumb:{
      color:"#6D47FF",
      height:7
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactSliderBharath input={input} />} />
      </Routes>
    </Router>
  );
}

export default App;
