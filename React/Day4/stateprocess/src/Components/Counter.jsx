// Make the COunter Program using state

import { useState } from "react"

const Counter = () => {

    const [count,setCount]=useState(0)

    const handClick = () =>{
      setCount(count+1)
    }

  return (
    <>
    <div>
        <h1 className="text-8xl text-center">{count}</h1>
        <div className="flex justify-center gap-10">
        <button onClick={handClick} className="border p-3 rounded-lg bg-gray-800 text-amber-50">Increace</button>
        <button onClick={()=>{setCount(count-1)}} className="border p-3 rounded-lg bg-gray-800 text-amber-50">Decrease</button>
        <button onClick={()=>{setCount(0)}} className="border p-3 rounded-lg bg-gray-800 text-amber-50">Reset</button>
    </div>
    </div>
      
    </>
  )
}

export default Counter
