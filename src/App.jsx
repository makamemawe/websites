// eslint-disable-next-line no-unused-vars
import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import { Hero } from './components/Hero';
import './components/Navbar';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Work from './components/Work';


const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Work />
      <Contact />
    </div>
  )
}

export default App