import { useState } from "react"

const Counter = () => {
    
    const [count,setCount]=useState(0)
  return (
    <>
    <div>
        <p className=" text-blue-700 text-center">Counter Application</p>
        <div>
            <p className="text-9xl text-center text-blue-700">{count}</p>
            <div className="flex justify-center gap-10 mt-15">
            <button className="bg-blue-600 text-white p-6 rounded-lg w-45" onClick={()=>(setCount(count+1))}>Increment</button>
            <button className="bg-blue-600 text-white p-6 rounded-lg w-45" onClick={()=>(setCount(count-1))}>Decrement</button>
            <button className="bg-blue-600 text-white p-6 rounded-lg w-45" onClick={()=>(setCount(0))}>Reset</button>
        </div>
        </div>


    </div>
        
      
    </>
  )
}

export default Counter
