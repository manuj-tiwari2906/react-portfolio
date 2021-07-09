import React from "react";
import Particles from "react-tsparticles";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import particlesOptions from "./particles.json";
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from "./components/Services";
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Particles options={particlesOptions} />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
    </div>

  );
}

export default App;
