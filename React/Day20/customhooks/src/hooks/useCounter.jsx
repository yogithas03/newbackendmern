import { useState } from "react"

const useCounter = () => {


const [counter,setCounter]=useState(0)

const handleIncrease = ()=>{
    setCounter((prev)=>prev+1)
}

const handleDecrease =()=>{
   
        setCounter((prev)=>prev-1)
    
   
}

const handleReset = ()=>{
    setCounter(0)
}





  return {counter,handleIncrease,handleDecrease,handleReset}



}

export default useCounter
