import React from 'react'
import { Link } from 'react-router-dom'

const NavDropdown = ({isOpen, toggle}) => {
  return (
    <>
    <div
    className={
      isOpen ? 'grid grid-rows-3 text-center items-center bg-gray-100' : 'hidden' }
    
    onClick={toggle}>

        <Link
        className='p-4' to='/Home'>
        Home</Link>

        <Link
        className='p-4' to='/GetStarted'>
        Get Started</Link>

        <Link
        className='p-4' to='/Contact'>
        Contact</Link>

    </div>
    </>
  )
}

export default NavDropdown