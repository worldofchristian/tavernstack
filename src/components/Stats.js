import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const Stats = () => {
  return (
    <>
    <div 
    className="stats w-5/6 max-w-md shadow-xl">

    <div
    className='flex items-center justify-center my-4 mx-6'>
      
      <div
      className='flex-col'>
      
      <FaCheckCircle />
    
      <div 
      className="stat-title">
      Site active</div>

      <button 
      className="btn btn-primary mt-2">
      Manage</button>
      </div>

    </div>
  
    <div 
    className="stat">
      <div 
      className="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      </div>
      <div 
      className="stat-title">
      Page Views</div>
      <div 
      className="stat-value text-secondary">
      2.4k</div>
      <div 
      className="stat-title text-sm">
      last 30 days
      </div>
    </div>
  
    </div>
    </>
  )
}

export default Stats