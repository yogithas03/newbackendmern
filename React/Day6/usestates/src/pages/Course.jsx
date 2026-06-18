import { useState } from "react"


const Course = () => {
    const [value,setValue]=useState('mern')
    const changeValue = ()=>{

        setValue("React Native")
    }
  return (
    <>
    <div>
        <p className=" text-blue-700 text-center">Course Selection</p>
        <p className="text-center">{value}</p>
    </div>
    <div className="text-center">
            <button className="bg-blue-600 text-white p-3 mt-4 rounded-lg w-45 " onClick={changeValue}>Change Value</button>
    </div>
    


      
    </>
  )
}

export default Course
