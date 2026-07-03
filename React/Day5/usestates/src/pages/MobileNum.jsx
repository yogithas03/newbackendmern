import { useState } from "react"


const MobileNum = () => {
   
    const [num,setNum]=useState(undefined)
    const changeNum = ()=>{
        const data = num === undefined ?"9876543210" : undefined;
        setNum(data)
    }



  return (
    <>
    <div>
        <p className="text-blue-700 text-center">Mobile Number</p>
        <p className="text-center">{num}</p>
        <div className="text-center">
            <button className="bg-blue-600 text-white p-3 mt-4 rounded-lg w-45 " onClick={changeNum}>Change User</button>
        </div>


    </div>
      
    </>
  )
}

export default MobileNum