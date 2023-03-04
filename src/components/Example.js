import React from 'react';
import looseysdropshadow from '../img/looseysdropshadow.png'

const Example = () => {
  return (
    <>
    <section 
    className="py-6 bg-gray-100 text-gray-900">
	    <div 
        className="container mb-24 mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
		    <h1 
            className="text-3xl font-semibold leading-tight text-center lg:text-left">
            See how Loosey's uses tavernstack</h1>
            <div 
            className='items-center justify-center'>
                <img 
                className='mx-auto max-w-[80%]' 
                src={looseysdropshadow} 
                alt='looseys logo'/>
            </div>
		    <button 
            className="px-8 py-3 text-lg font-semibold rounded bg-indigo-600 text-gray-50">
            View Site</button>
	    </div>
    </section>
    </>
  )
}

export default Example