import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Projects />
      <Contact />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
