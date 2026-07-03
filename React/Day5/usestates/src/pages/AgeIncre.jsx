import { useState } from "react"

const AgeIncre = () => {

     const [incre,setIncre]=useState(18)
  return (
    <>
    <div>
        <p className=" text-blue-700 text-center">Age Increment</p>
        <p className="text-9xl text-center text-blue-700">{incre}</p>
   
    <div className="text-center">
         <button className="bg-blue-600 text-white p-6 rounded-lg w-45" onClick={()=>(setIncre(incre+1))}>Increment</button>
    </div>
   
    </div>      
    </>
  )
}

export default AgeIncre
