import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import About from './Footer/About';

const SignIn = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form Submitted');
    alert("paswword is matched");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="text-l m-8 flex flex-col   items-center bg-sky-50 rounded-xl shadow-2xl w-110 py-10  h-auto w- full md:flex md:justify-center md:items-center md:ml-110 ">
        <h1 className='text-white text-2xl font-bold bg-sky-500 w-full p-5 h-18 rounded-xl shadow-xl flex justify-center items-center' >Welcome back 😊 </h1>

        {/* Form Section for Mobile */}
        <div className="w-full  p-5 ">

          <div className="mb-5">
            Phone Number:
            <input
              className="p-2 w-full border rounded-md mt-2"
              type="text"
              placeholder="Enter your Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-5">
            Password:
            <input
              className="p-2 w-full border rounded-md mt-2"
              type="password"
              placeholder="Enter your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="mt-7 bg-sky-500 transition-colors text-white  w-screen h-10 rounded-xl  hover:bg-sky-800">
              Submit
            </button>
          </div>

          {/* Sign-Up Link */}
          <p className="mt-5 text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:text-blue-800">
              Sign-Up
            </Link>
          </p>
        </div>

        
      </form>
      <About/>
      
    </>
  );
};

export default SignIn;
