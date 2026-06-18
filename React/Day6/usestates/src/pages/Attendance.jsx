import { useState } from "react"

const Attendance = () => {

     const [incre,setIncre]=useState(0)
  return (
    <>
    <div>
        <p className=" text-blue-700 text-center"> Attendance Tracker</p>
        <p className="text-xl text-center">Total Number of Student {incre}</p>
   
    <div className="text-center">
         <button className="bg-blue-600 text-white p-6 rounded-lg w-45" onClick={()=>(setIncre(incre+1))}>Increment</button>
    </div>
   
    </div>      
    </>
  )
}

export default  Attendance