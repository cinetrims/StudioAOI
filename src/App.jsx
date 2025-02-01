import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Aboutus from './sections/Aboutus';
import Gallery from './sections/Gallery';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Aboutus />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
