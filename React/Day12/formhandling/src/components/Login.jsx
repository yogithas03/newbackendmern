import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {


  const navigate = useNavigate()
  const [datas,setDatas]=useState({userEmail:"",userPassword:""})
  const [saveData,setSaveData]= useState([])

  const handleChange = (e) =>{

    setDatas({...datas,[e.target.name]:e.target.value})

  }

  const handleSubmit = (e) =>{

    e.preventDefault()

    if(datas.userEmail === "" || datas.userPassword === ""){
      alert("fill the input")
      return
    }

    const storeData = JSON.parse(localStorage.getItem("userdatas"))

    const authcheck = storeData.find((e)=>e.userEmail === datas.userEmail && e.userPassword === datas.userPassword)

    if(!authcheck){
      alert("Incorrect mail & password")
      return
    }

    localStorage.setItem("auth",JSON.stringify(authcheck))

    setDatas({userEmail:"",userPassword:""})

    navigate("/dashboard")
  }





  return (
    <>

     <form onSubmit={handleSubmit}>
        
        <input type="email" name="userEmail" value={datas.userEmail} onChange={handleChange}placeholder="Enter the User Email"/><br />
        <input type="password" name="userPassword" value={datas.userPassword} onChange={handleChange} placeholder="Enter the User Password"/><br />
        <input type="submit" value={"login"}/>
    </form>

      
    </>
  )
}

export default Login
