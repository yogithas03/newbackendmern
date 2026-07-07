import { useRef } from "react"


const Display = () => {

    const dataref =useRef()

    const handleClick = () =>{
        dataref.current.innerHTML="welcome to Page!!"
    }

  return (
    <>
    
    <div>
         <button className="bg-green-800 text-white p-3" onClick={handleClick}>show & hide</button>
         <p ref={dataref}></p>
    </div>
    
      
    </>
  )
}

export default Display
