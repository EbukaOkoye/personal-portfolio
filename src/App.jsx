import { useState } from 'react'
import Navigation from './Components/Navbar/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import  Banner from './Components/Banner/Banner';
import Skills from './Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  

  return (
    <div className="App">
      <Navigation />

      <Banner />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  )
}

export default App
