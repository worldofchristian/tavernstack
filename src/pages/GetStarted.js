import React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavDropdown from '../components/NavDropdown';

const GetStarted = () => {

    const [isOpen, setOpen ] = useState(true)

    const toggle = () => {
        setOpen(!isOpen)
    }

  return (
    <>
    <Navbar toggle={toggle} />
    <NavDropdown isOpen={!isOpen} toggle={toggle} />

    <div
    className='flex items-center justify-center mb-20'>
        
        <div
        className='flex-col'>

            <div
            className='shadow-xl rounded-2xl w-full p-6 mt-2 max-w-sm'>

                <h1 
                className="text-xl mt-2 font-medium tracking-wide"
                >starter</h1>
                <h1 
                className="text-5xl font-bold tracking-wide"
                >$20
                <span
                className='text-sm font-medium'
                >/month</span></h1>
                
                <div
                className='flex-col mt-4'>
                    <div
                    className='flex mt-2 gap-4 items-center text-center'>
                        <svg 
                        className='max-w-[11%]'
                        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <h2 
                        className="text-sm font-medium tracking-wide"
                        >Single page</h2>
                    </div>
                    <div
                    className='flex mt-2 gap-4 items-center text-center'>
                        <svg 
                        className='max-w-[11%]'
                        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <h2 
                        className="text-sm font-medium tracking-wide"
                        >Menu editor</h2>
                    </div>

                </div>

            </div>

            <div
            className='shadow-xl rounded-2xl w-full p-6 mt-2 max-w-sm'>

                <h1 
                className="text-xl mt-2 font-medium tracking-wide">
                Pro</h1>
                <h1 
                className="text-5xl font-bold tracking-wide">
                $35
                <span
                className='text-sm font-medium'>/month</span></h1>
                
                <div
                className='flex-col mt-4'>
                    <div
                    className='flex mt-2 gap-4 items-center text-center'>
                        <svg 
                        className='max-w-[11%]'
                        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <h2 
                        className="text-sm font-medium tracking-wide">
                        3 pages</h2>
                    </div>
                    <div
                    className='flex mt-2 gap-4 items-center text-center'>
                        <svg 
                        className='max-w-[11%]'
                        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <h2 
                        className="text-sm font-medium tracking-wide">
                        Menu editor</h2>
                    </div>
                    <div
                    className='flex mt-2 gap-4 items-center text-center'>
                        <svg 
                        className='max-w-[11%]'
                        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <h2 
                        className="text-sm font-medium tracking-wide">
                        Bookings </h2>
                    </div>
                    <div
                    className='flex mt-2 gap-4 items-center text-center'>
                        <svg 
                        className='max-w-[11%]'
                        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <h2 
                        className="text-sm font-medium tracking-wide">
                        Analytics</h2>
                    </div>

                </div>

            </div>

            <h2 
            className="text-sm mt-12 font-medium tracking-wide">
            Which best describes your business?</h2>
            
            <select 
            className="select shadow-xl w-full mt-2 max-w-xs">
                <option disabled selected>Pick one</option>
                <option>Restaurant</option>
                <option>Nightclub</option>
                <option>Venue</option>
                <option>Pub</option>
            </select>

            <h2 
            className="text-sm mt-12 font-medium tracking-wide">
            Current website (if available)</h2>
            
            <input 
            type="text" placeholder="Type here" 
            className="input mt-2 w-full max-w-xs shadow-xl" />

            <h2 
            className="text-sm mt-12 font-medium tracking-wide">
            Email</h2>
            
            <input type="text" placeholder="Type here" className="input mt-2 w-full max-w-xs shadow-xl" />
            
            <h2 
            className="text-sm mt-12 font-medium tracking-wide">
            Comments</h2>
            
            <input type="text" placeholder="Type here" className="input mt-2 w-full max-w-xs shadow-xl" />
        
        </div>
    </div>
    
    <div
    className='flex mb-20 items-center justify-center'>
        <button className="btn btn-primary">Send</button>
    </div>

    <Footer />
    </>
  )
}

export default GetStarted