import React from 'react'
import screen from "../img/screen.png";

const About = () => {
  return (
    <>
    <div 
    className="flex-col bg-white text-gray-800">
	    <div 
        className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">

		    
            
            <dl 
            className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
			    
                <div 
                className="flex">
				    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-cyan-600">
					    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				    </svg>
				    <div 
                    className="ml-3">
                        <dt 
                        className="text-lg font-medium">
                        Manage your menu</dt>
                        <dd 
                        className="mt-2 text-gray-600">
                        Make faster changes with an easy to use editor app</dd>
				    </div>

			    </div>
			    
                <div 
                className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-cyan-600">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div className="ml-3">
                        <dt 
                        className="text-lg font-medium">
                        Take bookings</dt>
                        <dd 
                        className="mt-2 text-gray-600">
                        Accept inquiries for room rentals and private functions</dd>
                        </div>
				</div>

                <div 
                className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-cyan-600">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div className="ml-3">
                        <dt 
                        className="text-lg font-medium">
                        Take bookings</dt>
                        <dd 
                        className="mt-2 text-gray-600">
                        Accept inquiries for room rentals and private functions</dd>
				</div>

			</div>

		    </dl>
	</div>

    <div
    className='flex items-center justify-center'>
        <div 
        className="mockup-phone mt-20 mb-20">
            <div 
            className="camera"></div> 
                <div 
                className="display bg-white">
                    <div 
                    className="artboard artboard-demo phone-1 mt-10">
                        <img
                        className='mb-10'
                        src={screen}
                        alt="app screenshot" />
                    </div>
                </div>
        </div>
    </div>
    
</div>
    </>
  )
}

export default About