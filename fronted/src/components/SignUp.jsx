import React, { useState } from 'react';
import About from './Footer/About';
import { Link } from 'react-router-dom';
  // import Bekar from './Footer/bekar';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const[phone,setPhone] = useState("")

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
    const[error, setError]= useState("null");

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const adduser = {username,phone,email,password,cpassword};
    const response = await fetch('http://localhost:1200/api/signup' ,{
      method:"POST",
      body:JSON.stringify(adduser),
      headers:{
        "content-Type":"application/json"
      },
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
      alert(" Data is  not Submitted !"); 

      // sucess("")
    }
    if (response.ok) {
      console.log(result);
      setError("");
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");
      setCpassword("");
      alert("🎉 Data is Submitted Successfully!"); 


      
    }
   

  
    
  }

  return (
    <>
      <form
      onSubmit={handleSubmit} className="text-l flex flex-col  items-center bg-sky-50 w-110 py-10 justify-center m-8 border-blue-300 shadow-2xl rounded-2xl md:flex-col md:ml-110">
        {/* Form Section for Mobile (default) */}
        <h1 className='text-white text-2xl font-bold bg-sky-500 w-full h-25 rounded-xl shadow-xl flex justify-center items-center' >  Create an Account👋 </h1>

        <div className="w-full  p-5 ">
           <div className="mb-5 realtive">
            Username:
            <input
              className="p-2 w-full border rounded-md mt-2 pl-10"
              type="text"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              
            />

           
          </div> 





          <div className="mb-5">
            Phone Number:
            <input
              className="p-2 w-full border rounded-md mt-2"
              type="text"
              placeholder="Enter your phone numnber"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-5">
            Email:
            <input
              className="p-2 w-full border rounded-md mt-2"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            Password:
            <input
              className="p-2 w-full border rounded-md mt-2"
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-5">
            Confirm Password:
            <input
              className="p-2 w-full border rounded-md mt-2"
              type="password"
              placeholder="Confirm your  password"
              required
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button 
            className="mt-7 bg-sky-500 transition-colors text-white  w-screen h-10 rounded-xl  hover:bg-sky-800">
             {''}
              Sign Up

            </button>
          </div>

           <p className="mt-5 text-center">
                      Already have an account?{' '}
                      <Link to="/signin" className="text-blue-600 hover:text-blue-800">
                        Sign-In
                      </Link>
                    </p> 
        </div>

       
      </form>
      <About/>

      {/* this bekar pg is only for my learning purpose */}
      {/* <Bekar/> */}


    </>
  );
};

export default SignUp;
