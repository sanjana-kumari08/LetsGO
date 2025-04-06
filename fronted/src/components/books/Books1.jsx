import React from 'react'
 import CopyHolder from '../home/CopyHolder'
import About from '../Footer/About'
import ProductList from '../ProductList'
//  import CopyHolder from '../components/home/CopyHolder';

const Books1 = () => {
  return (
    <>
    <div className='flex flex-col justify-center'>
        <div className='flex flex-col justify-start m-5 '>
            <h1 className='text-3xl font-bold md:m-2 md:text-4xl'>Explore Our Books</h1>
            <p className='m-3 ml-1 text-gray-700 md:m-2 md:text-[18px]'>Browse through our collection of books available for rental. Pay only 20% of the price for a 5-day rental.</p>
        </div>
    </div>
    {/* <CopyHolder/> */}

    <CopyHolder/>
    <ProductList/>

    <About/>
    
      
    </>
  )
}

export default Books1
