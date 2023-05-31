import React from "react";
import {HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import AllGames from "./Pages/AllGames";
import About from "./Pages/About";
import ComingSoon from "./Pages/ComingSoon";
import News from "./Pages/News";
import FormLogReg from "./Form/Form";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/allgames" element={<AllGames />} />
          <Route path="/about" element={<About />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/about" element={<About/>} />
          <Route path="/news" element={<News />} />
          <Route path="/signin" element={<FormLogReg />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
