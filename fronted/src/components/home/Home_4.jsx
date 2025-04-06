import React from 'react';
import Home_5 from './Home_5';

const Home_4 = () => {
  return (
    <>
      {/* Desktop: Image Right | Text Left */}
      <div className=" m-10 flex flex-col items-center md:flex-row-reverse md:justify-center">
        
        {/* Image Section (Right Side on Desktop) */}
        <div className="md:w-1/2 md:pl-8 md:m-10">
          <img 
            // src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
            src="images/chai.jpeg"
            alt="Reading a book" 

            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section (Left Side on Desktop) */}
        <div className="md:w-1/2 bg-sky-50 m-5 p-5 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">How LetsGo Works</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Browse & Select", text: "Choose from our wide collection of books across various categories." },
              { step: "2", title: "Pay 20% of Price", text: "Rent books by paying just 20% of their original price." },
              { step: "3", title: "Enjoy for 5 Days", text: "Read and enjoy your books for a 5-day rental period." },
              { step: "4", title: "Return or Pay Full", text: "Return the books in good condition or pay the remaining amount if damaged." }
            ].map((item) => (
              <div key={item.step} className="flex items-start">
                <div className="bg-sky-500 text-white rounded-full w-8 h-8 flex items-center justify-center mt-1">
                  {item.step}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Slideshow Section */}
      <Home_5 />
      {/* <About /> */}

    </>
  );
};

export default Home_4;
 