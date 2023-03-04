import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Example from '../components/Example';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
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
  )
}

export default Home