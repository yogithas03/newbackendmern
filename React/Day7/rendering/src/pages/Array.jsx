import { useState } from "react"


const Array = () => {
   
    const [arr,setArr]=useState(["React","HTML","CSS","Javascript","Boostrap","Mysql",["Tailwind"]])
    const changeArr = () =>{
    //  const changeArr = (index) =>{

      let edit =[...arr]
      edit[6][0] ="Java"
      // edit[index]='hey u clicked'
      setArr(edit)
      
    }
    
    
  return (
    <>
    <div className="bg-purple-950 text-2xl text-amber-50 flex justify-center gap-10 p-2">
        {arr.map((e,i)=>(
         <p className="bg-amber-50 text-purple-950 rounded-xl p-3 text-center" onClick={()=>changeArr(i)} key={i+1}>{e}</p>
        ))}
        </div>
        <div className="text-center bg-green-700 text-green-950 w-50 mt-6 ml-130 rounded-lg ">
        <button onClick={changeArr}>Change Array</button>
        </div>

    
      
    </>
  )
}

export default Array
