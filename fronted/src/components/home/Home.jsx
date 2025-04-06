

import React from 'react';
import Home_2 from './Home_2';

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center m-10 text-sm">
        {/* Text Block */}
        <div className="mb-5 md:mb-0 md:text-xl">
          Lets explore something new
        </div>

        {/* Search Input with Icon */}
        <div className="relative w-full md:w-2/5">
          <input
            className="w-full md:w-full h-auto p-4 pl-10 border rounded-md"
            type="search"
            placeholder="Search by Authors, Meditation, Love, etc..."
          />
          {/* Icon Inside Search */}
          <img
            src="https://cdn-icons-png.freepik.com/256/10023/10023966.png?ga=GA1.1.1750261658.1740877616&semt=ais_hybrid"
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 "
          />
        </div>
      </div>
      <Home_2/>
    </>
  );
};

export default Home;

