import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/navbar/Navbar";


import "./styles/main.scss"
import "./styles/medias.scss"

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/weather-app" element={<Home />} />
            
          </Routes>
        </Router>
    
      
    </div>
  );
}

export default App;
