import { useState } from "react"


const Employee = () => {
    const [login,setLogin]=useState(false)
    const changeLog=()=>{
        setLogin(!login)
    }
  return (
    <>
    <div>
     <p className=" text-blue-700 text-center">Employee Status</p>
     <div className="text-center text-2xl mt-5">
        <p>{login?"Active":"Inactive"}</p>
     </div>
     <div className="text-center">
        <button className="bg-blue-600 text-white p-3 mt-15 rounded-lg w-34" onClick={changeLog}>Click</button>
     </div>

    </div>
      
    </>
  )
}

export default Employee