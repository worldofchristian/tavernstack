import React from 'react'

const Hero = () => {
  return (
    <>
    <div 
    className="hero min-h-screen" 
    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
        <div 
        className="hero-overlay bg-opacity-60"></div>
        <div 
        className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 
                className="mb-5 text-5xl font-bold">
                A website platform for the nightlife industry</h1>
                  <button
                  className="btn btn-primary">
                  Get Started</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero