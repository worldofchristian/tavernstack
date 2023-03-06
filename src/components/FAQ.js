import React from 'react'

const FAQ = () => {
  return (
    <>
    <section className="bg-white-100 text-gray-800 mt-24 mb-24">
	    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		    
            <p 
            className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works</p>
		    <h2 
            className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions</h2>

		    <div 
            className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
			    
                <details>
				<summary 
                className="py-2 outline-none cursor-pointer focus:underline">
                What does Tavernstack do?</summary>
				<div 
                className="px-4 pb-4">
					<p>Tavernstack is a web devlopment agency that focuses on bars and restaurants</p>
				</div>
			    </details>
			
                <details>
				<summary 
                className="py-2 outline-none cursor-pointer focus:underline">
                Can I use the app with my own website?</summary>
				<div 
                className="px-4 pb-4">
					<p>Yes, our starter plan is hosted as a single page application that you can link to from an existing website</p>
				</div>
			    </details>
			    <details>
				<summary 
                className="py-2 outline-none cursor-pointer focus:underline">
                What is a stack?</summary>
				<div 
                className="px-4 pb-4 space-y-2">
					<p>A stack is a term for the collection of tools you would use to do something. Tavernstack lets you pick and choose 
                        which features you need for your website, that way you only pay for what you use</p>
				</div>
			</details>
		    </div>
	    </div>
    </section>
    </>
  )
}

export default FAQ