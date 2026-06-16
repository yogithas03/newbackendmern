import { useState } from "react"


const ArrayOfObject = () => {
 
    const [arrayob]=useState([
    {
      id: 1,
      name: "John",
      age: 20,
    },
    {
      id: 2,
      name: "Jane",
      age: 22,
    },
    {
      id: 3,
      name: "Mike",
      age: 21,
    },
  ])
  


  return (
    <>
    <div className=" border text-center bg-amber-500 text-yellow-950 rounded-lg p-5">
        {arrayob.map((arr)=>(
        <div key={arr.id}>
            <h1>ID:{arr.id}</h1>
            <h1>Name:{arr.name}</h1>
            <h1>Age:{arr.age}</h1>
        </div>
        ))}
    </div>

    
      
    </>
  )
}

export default ArrayOfObject
