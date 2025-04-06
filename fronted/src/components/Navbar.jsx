import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './home/Cart';
// import { addToCart } from '../redux/CartSlice';
import { useSelector } from "react-redux";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.cartItems.length);


  return (
    <>
      <nav className="w-full h-20 bg-sky-500 flex justify-between items-center px-6 text-white text-xl sticky top-0 ">
        {/* Left Side - Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10">
            <img
              src="https://cdn-icons-gif.flaticon.com/12743/12743777.gif"
              alt="Logo"
            />
          </div>
          <div className="text-xl font-bold">LetsGO</div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/books" className="hover:text-gray-200">Books</Link>
          </li>
          <li>
            <Link to="/categories" className="hover:text-gray-200">Categories</Link>
          </li>


          {/* cart components */}

          <li className='relative'>
            <Link to ="cart"> 
           
            <span><img className='w-7 h-7'
             src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"></img></span>

             {/* yha se cart ka logic start hai */}
             {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
              </Link>
            </li>
{/* ends here */}
              <li>
            <Link to="/signin">
              <button className="bg-white text-sky-400 w-20 h-10 rounded hover:bg-sky-50 hover:text-sky-700">
                SignIn
              </button>
            </Link>
          </li>
        </ul>

        {/* 3 line Menu for Mobile */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu - Open/Close on Click */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-sky-600 absolute w-full left-0 top-20 p-5`}
      >
        <ul className="flex flex-col space-y-4 text-white text-lg">
          <li>
            <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/books" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Books</Link>
          </li>
          <li>
            <Link to="/categories" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Categories</Link>
          </li>


          
          <li>
            <Link to="/signin" onClick={() => setIsOpen(false)}>
              <button className="bg-white text-sky-400 w-20 h-10 rounded hover:bg-sky-50 hover:text-[#AB4459]">
                SignIn
              </button>
            </Link>
          </li>
          <Cart/>

        </ul>
      </div>
    </>
  );
};

export default Navbar;
