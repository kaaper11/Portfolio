import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StartPage from "./components/startPage.jsx"

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<StartPage/>} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
