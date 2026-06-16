// Make the array and showing in the below

import { useState } from "react"

const Array = () => {
 const [array,setArray]=useState(["React","Html","js","Bootstrap","css"])

const changeArray = () =>{
    setArray([...array,"mern"])
}

  return (
    <>
    <div className="text-center">
    <h1 className="text-3xl">Course List</h1>
    {array.map((e,i)=>(
        <li key={i}>{e}</li>
    ))}
    <button onClick={changeArray} className="border p-2 px-4 rounded-md bg-green-800 text-amber-50">Change Array</button>
     </div> 
    </>
  )
}

export default Array
