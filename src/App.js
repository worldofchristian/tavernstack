import React, { useState } from 'react';

import Navbar from './components/Navbar';
import NavDropdown from './components/NavDropdown';
import Hero from './components/Hero';
import About from './components/About';
import Example from './components/Example';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {

  const [isOpen, setOpen ] = useState(true)

    const toggle = () => {
        setOpen(!isOpen)
    }

  return (
    <>
    <Navbar toggle={toggle} />
    <NavDropdown isOpen={!isOpen} toggle={toggle} />

    <div
    className='flex-col bg-gray-100'>
        
        <Hero />
        
        <About />
        <Example />
        <CTA /> 
        <FAQ />

        <div
        className='flex items-center justify-center'>
          <Footer />
        </div>

    </div>
    </>
  );
}

export default App;
