import React from 'react'

const Rating = () => {
  return (
    <>
    <div 
    className="flex w-5/6 max-w-md p-4 rounded-xl items-center justify-center gap-5 bg-base-100 shadow-xl">
        <div
        className='flex-col'>
            
            <h2 
            className="text-xl font-semibold mb-2">
            Google Reviews</h2>
            
            <div
            className='flex gap-4'>

                <div 
                className="stat-value text-secondary">
                4.1</div>

                <div className="rating rating-lg">
                    <input type="radio" name="rating-9" className="rating-hidden" />
                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                    <input type="radio" name="rating-9" className="mask mask-star-2" checked/>
                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Rating