import { useState } from "react"

const StudentName = () => {

    const [update,setUpdate]=useState("sudhan")
    const handleClick = ()=>{
        setUpdate("Ravi")
    }
  return (
    <>
    <div>
         <p className=" text-blue-700 text-center"> Student Name Update</p>
    </div>
    <div className="text-center mt-4">
        <p><span className="font-bold">Name:</span> {update}</p>
        <button className="bg-blue-600 text-white p-3 rounded-lg w-40 mt-7" onClick={handleClick}>Change Name</button>
    </div>


        
      
    </>
  )
}

export default StudentName