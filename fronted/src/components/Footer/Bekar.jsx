import React, { useState } from 'react'

const Bekar = () => {
    const [text,setText]= useState("");
     const[theme,setTheme] = useState("dark")

    // let theme = "dark";

    // function handler(){
    //   if(theme=="dark"){
    //     document.body.style.backgroundColor= "white";
    //     document.body.style.color= "black";

    //     theme = "white";
    //   }
    //   else {
    //     document.body.style.backgroundColor="black";
    //     document.body.style.color= "white";
    //     theme = "dark";


    //   }
      
    // }

    // by 2nd method ussstate
    const handler = ()=>{
      if(theme==="dark"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        setTheme("light");
      }
      else{
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        setTheme("dark");  
      }
    }
    
  return (
    <>
     <h1 className="text-3xl font-bold">
        {theme === "dark" ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </h1>
    <button onClick={handler}
    >click</button>
       <h1 className='bg-red-700'>this is all about my titke page to count</h1>
      <input 
      type= "text"
      value={text} onChange={(e)=>setText(e.target.value)}
       placeholder='enter text'></input>
      <h2>this is word count {text.length} and character {text.split("  ")} count</h2>
    </>
  )
}

export default Bekar
