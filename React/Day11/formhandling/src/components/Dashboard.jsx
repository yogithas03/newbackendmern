import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Dashboard = () => {

    const navigate = useNavigate()

    const [userdatas,setUserDatas]=useState({})

    const myData = JSON.parse(localStorage.getItem("auth"))

    if(!userdatas.userName){
        navigate("/login")
    }


    useEffect(()=>{
     const  datas = ()=>{
        setUserDatas(myData)
    }

    datas()

    },[])


    const logout = () =>{

        localStorage.removeItem("auth")

        navigate("/login")

    }





  return (
    <>

    <p>dashboard</p>

    <h2>userEmail:{userdatas.userEmail}</h2>
    <h3>userPassword:{userdatas.userPassword}</h3>
    <button onClick={logout}>LOGOUT</button>
      
    </>
  )
}

export default Dashboard
