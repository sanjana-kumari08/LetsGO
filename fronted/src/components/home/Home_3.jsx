import React from 'react'
import Home_4 from './Home_4'

const Home_3 = () => {
  return (
    <>
    
       <div className="bg-sky-100   flex flex-col  w-full h-auto md:flex-row">
        <div className='bg-white text-black rounded-2xl w-auto h-40 flex flex-col p-8 m-4 shadow-2xl '>
        <h3 className="text-lg font-bold mb-2">Wide Selection</h3>
        <p className="text-gray-600 text-xl">Thousands of books across multiple categories to choose from.</p> 

        </div>

        <div className='bg-white text-black rounded-2xl w-auto h-40 flex flex-col p-8 m-4 shadow-2xl'>
        <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
        <p className="text-gray-600 text-xl">Location-based delivery system with minimal charges.</p> 

        </div>

        <div className='bg-white text-black rounded-2xl w-auto h-40 flex flex-col p-8 m-4 shadow-2xl'>
        <h3 className="text-lg font-bold mb-2">Save Money</h3>
        <p className="text-gray-600 text-xl">Pay only 20% of the book's price for a 5-day rental period.</p> 

        </div>


        <div className='bg-white text-black rounded-2xl w-auto h-40 flex flex-col p-8 m-4 shadow-2xl'>
        <h3 className="text-lg font-bold mb-2">Flexible Returns</h3>
        <p className="text-gray-600 text-xl">Easy return process after your 5-day rental period ends.</p> 

        </div>
            
            </div>


            {/* yaha book slider lgana hai */}

            {/* and yha home 4 */}
            <Home_4/>
    </>
  )
}

export default Home_3
