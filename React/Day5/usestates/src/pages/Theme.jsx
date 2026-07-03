import { useState } from "react"


const Theme = () => {
    const[theme,setTheme]=useState(false)
    const changeTheme = ()=>{
        setTheme(!theme)
    }
  return (
    <>
    <div className={theme?"bg-black text-white h-screen":"bg-white text-black"}>
     <p className="text-blue-700 text-center">Theme Switch</p>
     
        <p className="text-center mt-20">{theme?"Dark Mode":"Light Mode"}</p>
     
     <div className="text-center">
        <button className="bg-blue-600 text-white p-3 mt-4 rounded-lg w-45" onClick={changeTheme}>Change Theme</button>
     </div>
    </div>
      
    </>
  )
}

export default Theme
