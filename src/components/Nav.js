import React from 'react'

const Nav = () => {
  return (
    <>
    <nav className="sticky top-0 z-10 backdrop-filter bg-opacity-30 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                
                <span className="text-2xl text-gray-900 font-semibold">tavernstack</span>
                
                <div className="flex space-x-4 text-gray-900">
                    <button className="btn btn-active btn-primary">Log out</button>
                </div>
            
            </div>
        </div>
    </nav>
    </>
  )
}

export default Nav