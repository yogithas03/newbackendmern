// Make the Object inside the useState and showing in the HTML?

import { useState } from "react"



const Object = () => {
  

    const [object,setObject]=useState({name:"Cinderella",age:25,city:"New York"})
    const changeData = () =>{
        setObject({...object,age:30})
    }

  return (
    <>
     <div className=" mt-1 flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
        <h1><span className="font-semibold">Name: </span>{object.name}</h1>
        <h1><span className="font-semibold">Age: </span>{object.age}</h1>
        <h1><span className="font-semibold">City:</span>{object.city}</h1>
        <button onClick={changeData} className="mt-5 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            > Change Data</button>

  </div>
    </div>
      
    </>
  )
}

export default Object
