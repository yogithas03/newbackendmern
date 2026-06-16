// Make the Syntax of using useState().

import { useState } from "react";
import { HiLightBulb } from "react-icons/hi2";

const StateClass = () => {

    const [mode,setMode]=useState(false)
    const handleClick = () =>{
        setMode(!mode);
      }
   
  return (
    <>
    <div className="flex flex-col text-center justify-center gap-4 mt-10">
   <div className=" bg-amber-950 text-white border rounded-full w-40 h-40 flex flex-col items-center justify-center">
     
        <h1>{mode?"Light is ON ":"Light is OFF"}</h1>
        <HiLightBulb color={mode? "gold" : "gray"} size={40} />
    
     
    <button onClick={handleClick} className="border p-2 px-4 rounded-md bg-green-800 text-amber-50">Click Me</button>
    </div>
    </div>

  
      
    </>
  )
}

export default StateClass
