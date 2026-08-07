import { useState } from "react"
import { registerData } from "../api/axios"
import { useNavigate } from "react-router-dom"


const Login = () => {

  const navigate = useNavigate()
  const [datas,setDatas]=useState({username:"",useremail:"",userpassword:""})
 

  const handleChange =(e)=>{
    setDatas({...datas,[e.target.name]:e.target.value})
  }

  const handleSubmit =async(e)=>{
      e.preventDefault()
    try {
      const userDatas = await registerData(datas)
      alert(userDatas.data.msg)
      setDatas({username:"",useremail:"",userpassword:""})
      navigate("/login")

    } catch (error) {

      alert(error.response.data.msg)
      
    }

  }
  return (
    <>
    <form onSubmit={handleSubmit}>

      <input type="text" name="username" value={datas.username} placeholder="enter the name" onChange={handleChange} />
      <input type="text" name="useremail" value={datas.useremail} placeholder="enter the email" onChange={handleChange} />
      <input type="text" name="userpassword" value={datas.userpassword} placeholder="enter the password" onChange={handleChange} />
      <input type="submit" name="login" />
    </form>
      
    </>
  )
}

export default Login
