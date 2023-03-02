import React from "react";

import Home from "./pages/Home";
import NavBar from "./components/navbar/Navbar";


import "./styles/main.scss"
import "./styles/medias.scss"

function App() {
  return (
    <div className="App">
        
          <NavBar />
          <Home />
    
      
    </div>
  );
}

export default App;
