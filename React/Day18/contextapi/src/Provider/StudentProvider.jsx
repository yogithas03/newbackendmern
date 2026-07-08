import { useState } from "react"
import StudentContext from "../Context/StudentContext"


const StudentProvider = ({children}) => {


    const [datas,setDatas]=useState([])
    const handleClick=()=>{
        setDatas([
 {
   id:1,
   name:"Sudhan",
   course:"MERN"
 },
 {
   id:2,
   name:"Ravi",
   course:"React"
 }])
    }
  return (
    <>
    <StudentContext.Provider value={{datas,handleClick}}>
        {children}
    </StudentContext.Provider>
      
    </>
  )
}

export default StudentProvider
