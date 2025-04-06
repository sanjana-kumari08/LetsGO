import React from 'react'
import About from '../Footer/About'

const Home_5 = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center  bg-[#F5EFFF]  '>
         {/* yah pr niche wali slide hogi */}
         <h2 className="text-3xl font-bold text-gray-800 m-4 ">Ready to Start Reading?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto p-4">
            Join thousands of readers who are saving money while enjoying their favorite books with LetsGo.
          </p>
          <a
          href="/books" className=" text-[18px] flex justify-center items-center bg-sky-500 rounded-2xl w-40 h-12 text-white mb-6 ">
            Explore All Books
          </a>
      </div>
      <About/>
      
    </>
  )
}

export default Home_5
