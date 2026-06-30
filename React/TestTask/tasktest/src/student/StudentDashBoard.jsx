import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const StudentDashBoard = () => {

    const navigate = useNavigate()
    const [user,setUser]=useState({})
    

    const myData = JSON.parse(localStorage.getItem("storedata"))

    

    useEffect(()=>{
        const datas = () =>{
            setUser(myData)
        }

        datas()
    },[])


    const signOut = ()=>{


        localStorage.removeItem("storedata")

        navigate("/")
    }







  return (
    <>

    <p>Welcome TO Dashboard</p>

    <p>Student Name:{user.name}</p>
    <p>Student Password:{user.age}</p>
    <p>Student Password:{user.course}</p>
    <p>Student Password:{user.city}</p>
    <button onClick={signOut}>SIGNOUT</button>
      
    </>
  )
}

export default StudentDashBoard
