import React from 'react'

const Bookings = () => {
  return (
    <>
    <div 
    className="stats w-5/6 max-w-md shadow-xl">

    <div
    className='flex items-center justify-center my-4 mx-8'>
      
      <div
      className='flex-col'>

      <button 
      className="btn btn-primary mt-2">
      Manage</button>
      </div>

    </div>
  
    <div className="stat">
        <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
        </div>
    <div className="stat-title">Bookings</div>
    <div className="stat-value">5</div>
    <div className="stat-desc">Upcoming</div>
    </div>
  
    </div>
    </>
  )
}

export default Bookings