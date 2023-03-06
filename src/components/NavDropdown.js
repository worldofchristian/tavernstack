import React from 'react'

const NavDropdown = ({isOpen, toggle}) => {
  return (
    <>
    <div
    className={
      isOpen ? 'grid grid-rows-3 sticky top-16 z-10 text-center items-center justify-center bg-opacity-70 backdrop-blur-lg shadow-xl' : 'hidden' }
    
    onClick={toggle}>

          <a
          className='p-4' href='/'>
          Home</a>

          <a
          className='p-4' href='/getstarted'>
          Plans</a>

          <a
          className='p-4' href='/contact'>
          Contact</a>
          
          <div
          className='flex items-center justify-center my-6'>

            <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
            style={{ height: 36, width: 36 }}
            onClick={toggle}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </div>
        
    </div>
    </>
  )
}

export default NavDropdown