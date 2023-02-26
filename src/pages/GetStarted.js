import React from 'react'
import Nav2 from '../components/home/Nav2'

const GetStarted = () => {
  return (
    <>
    <Nav2 />

    <div
    className='flex items-center justify-center mb-12'>

        <div
        className='flex-col'>

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
            How many guests can you accomodate?</h2>
            
            <select 
            className="select shadow-xl w-full mt-2 max-w-xs">
                <option disabled selected>Pick one</option>
                <option>Less than 100</option>
                <option>100 to 500</option>
                <option>500+</option>
            </select>

            <h2 
            className="text-sm mt-12 font-medium tracking-wide">
            Current website (if available)</h2>
            
            <input type="text" placeholder="Type here" className="input mt-2 w-full max-w-xs shadow-xl" />

            <h2 
            className="text-sm mt-12 font-medium tracking-wide">
            Email</h2>
            
            <input type="text" placeholder="Type here" className="input mt-2 w-full max-w-xs shadow-xl" />
            

        </div>
    </div>
    
    <div
    className='flex items-center justify-center'>
        <button className="btn btn-primary">Send</button>
    </div>
    </>
  )
}

export default GetStarted