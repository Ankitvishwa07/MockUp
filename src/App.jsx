import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Section from "./pages/Section";
import Timeline from "./Timeline";
import HulkPage from "./HulkPage";
import IronMan from "./IronMan";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/scroll" element={<Section />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/hulk" element={<HulkPage />} />
        <Route path="/ironman" element={<IronMan />} />
      </Routes>
    </Router>
  );
}

export default App;