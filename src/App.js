import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
