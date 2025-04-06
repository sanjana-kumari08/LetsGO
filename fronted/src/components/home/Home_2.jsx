import React from 'react';
import Home_3 from './Home_3';




const Home_2 = () => {
  return (
    <>
      <div className="bg-sky-100 m-2 p-3 flex flex-col items-center md:flex-row-reverse md:h-auto">
        
        {/* Right Side - Image (For Desktop) */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            // src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
            src="/images/read.avif"
            alt="Books collection" 
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>

        {/* Left Side - Text (For Desktop) */}
        <div className="md:w-1/2 flex flex-col justify-center items-start md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover and Rent <span className="text-sky-500">Books</span> at 20% of the Price
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Explore thousands of books across various categories. Rent for 5 days and return hassle-free.
          </p>
          <div className="flex space-x-4">
            <button className="bg-sky-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-sky-600">
              Browse Books
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300">
              View Categories
            </button>
          </div>
        </div>

      </div>
      <Home_3 />
    </>
  );
};

export default Home_2;
