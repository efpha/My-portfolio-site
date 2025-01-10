import React from "react";
import './App.css';
import './mobile.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Aboutme from './Components/Aboutme';
import Experience from './Components/Experience';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="experience">
        <Experience />
      </div>
    </div>
  );
}

export default App;
