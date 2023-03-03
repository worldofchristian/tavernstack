import React from 'react';
import { 
  About, CTA, Example, FAQ, Footer, Hero, Navbar
} from '../components';

const Home = () => {
  return (
    <>
    <div
    className='flex-col bg-gray-100'>
        <Navbar />
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