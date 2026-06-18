import { useState } from "react"


const Nullish = () => {

  const [themechange,setThemeChange] = useState(null)

 const changeNull = ()=>{

    const data = themechange === null?"React":null;
    setThemeChange(data)
    
   

 }

 
 

  return (
    <>
    <p>
        {themechange ?? <h1 className="bg-black p-10 h-100 text-white flex justify-center items-center">This is Nullish</h1>}
        <button onClick={changeNull} className="mx-10 p-2 rounded bg-black text-white m-2">click to null value change</button>
    </p>
    </>
  )
}

export default Nullish