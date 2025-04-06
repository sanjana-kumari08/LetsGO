import React from 'react'
import { Link } from 'react-router-dom'
// import Bekar from './Bekar'

const About = () => {
  return (
    <>
      <div className='bg-gray-800 w-full h-full flex flex-col md:flex-row md:justify-between p-5 md:h-50 '>
        
        <div className='flex flex-col m-5 p-5 md:w-1/2'>
          <h1 className='text-white text-xl font-bold'>LetsGo</h1>
          <p className='text-[#A9BFA8] mt-5 text-[17px]'>Rent books at 20% of the price for 5 days. Return in good condition or pay the full amount.</p>
        </div>

        <div className='flex flex-col m-5 p-5 md:w-1/2'>
          <h1 className='text-white text-xl font-bold'>Quick Links</h1>
          <ul className='text-[#A9BFA8] mt-5 text-[17px] flex flex-col justify-evenly'>
            <Link to ="/">Home</Link >
            <Link to ="/books">Books</Link>
            <Link to ="/categories">Categories</Link>

          </ul>
        </div>

      </div>
      {/* <Bekar/> */}


    </>
  )
}

export default About
