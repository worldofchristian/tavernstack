import React from 'react'

const CTA = () => {
  return (
    <>
    <section 
    className="py-6 bg-indigo-600 text-gray-50">
	    <div 
        className="container my-24 mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
		    
            <h1 
            className="text-5xl font-bold leading-none text-center">
            Create your own stack</h1>
		        
            <p 
            className="pt-2 pb-8 text-xl font-regular text-center">
            Free initial build, then add or remove features as you need them</p>
		        
            <a href='/getstarted'>
              <button 
              className="px-8 py-3 text-lg font-semibold rounded bg-gray-100 text-gray-900">
              View Plans</button>
            </a>
	    
        </div>
    </section>
    </>
  )
}

export default CTA