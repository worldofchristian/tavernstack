import React from 'react';
import About from '../components/home/About';
import CTA from '../components/home/CTA';
import Example from '../components/home/Example';
import FAQ from '../components/home/FAQ';
import Footer from '../components/home/Footer';
import Hero from '../components/home/Hero';
import Nav2 from '../components/home/Nav2';

const Home = () => {
  return (
    <>
    <div
    className='flex-col bg-gray-100'>
        <Nav2 />
        <Hero />
        <About />
        <Example />
        <CTA /> 
        <FAQ />
        <Footer />
    </div>
    </>
  )
}

export default Home