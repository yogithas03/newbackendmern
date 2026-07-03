import { useState } from "react"


const ShowHide = () => {
    const[showhide,setShowHide]=useState(true)
    const showHide =()=>{
        setShowHide(!showhide)
    }
  return (
    <>
    <div>
     <p className=" text-blue-700 text-center">Show / Hide Content</p>
     <p>{showhide?"React (also known as React.js or ReactJS) is a free, open-source front-end JavaScript library used to build dynamic and interactive user interfaces (UIs)":" "}</p>
    </div>
      <div className="text-center">
         <button className="bg-blue-600 text-white p-3  mt-6 rounded-lg w-45" onClick={showHide}>Show/Hide</button>
    </div>
      
    </>
  )
}

export default ShowHide
