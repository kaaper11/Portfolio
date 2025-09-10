import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StartPage from "./components/startPage.jsx"
import AppArtment from "./components/appArtment.jsx";
import LPG from "./components/LPG.jsx";

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<StartPage/>} />
            <Route path="/appartment" element={<AppArtment/>} />
              <Route path="/lpg" element={<LPG/>} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
