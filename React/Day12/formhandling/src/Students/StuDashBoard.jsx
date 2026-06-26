import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const StuDashBoard = () => {

    const navigate = useNavigate()
    const [user,setUser]=useState({})
    

    const myData = JSON.parse(localStorage.getItem("auths"))

    if(!user.stuname){
        navigate("/login")
    }

    useEffect(()=>{
        const datas = () =>{
            setUser(myData)
        }

        datas()
    },[])


    const signOut = ()=>{


        localStorage.removeItem("auths")

        navigate("/login")
    }







  return (
    <>

    <p>Welcome TO Dashboard</p>

    <p>Student Email:{user.stuemail}</p>
    <p>Student Password:{user.stupassword}</p>
    <button onClick={signOut}>SIGNOUT</button>
      
    </>
  )
}

export default StuDashBoard
