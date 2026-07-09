import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"


const Login = () => {


  const {login}=useContext(AuthContext)

  const navigate =useNavigate()
  const [logdata,setLogData]=useState({userEmail:"",userPassword:""})

  const handleChange =(e)=>{
    setLogData({...logdata,[e.target.name]:e.target.value})
  }

  const handleSubmit =(e)=>{

      e.preventDefault()

      const getData = JSON.parse(localStorage.getItem("userData")) || []

      const checkData =getData.find((e)=>e.userEmail === logdata.userEmail && e.userPassword === logdata.userPassword)

     if(checkData){

      login(checkData)
      navigate("/home")

     }else{
      alert("Invalid User")
     }




  }







  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="email" value={logdata.userEmail} name="userEmail" placeholder="Enter the Email" onChange={handleChange}/>
       <input type="password" value={logdata.userPassword} name="userPassword" placeholder="Enter the Password" onChange={handleChange}/>
       <input type="submit" value={"Login"}/>
    </form>
      
    </>
  )
}

export default Login

