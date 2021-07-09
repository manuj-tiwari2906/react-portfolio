import React from "react";
import Particles from "react-tsparticles";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import particlesOptions from "./particles.json";
import Navbar from './components/Navbar';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Particles options={particlesOptions} />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
