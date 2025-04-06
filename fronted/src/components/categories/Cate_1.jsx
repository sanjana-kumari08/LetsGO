import React from 'react'
import CopyHolder from '../home/CopyHolder';
import About from '../Footer/About';

const Cate_1 = () => {
  return (
    <>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-col justify-start m-5 '>
            <h1 className='text-3xl font-bold md:m-2 md:text-4xl'>Book Categories</h1>
            <p className='m-3 text-gray-700 md:m-2 md:text-[18px]'>Explore our wide range of book categories. Find your next favorite read!</p>
        </div>
    </div>
    <CopyHolder/>
    <About/>
    
    </>
  )
}

export default Cate_1;
