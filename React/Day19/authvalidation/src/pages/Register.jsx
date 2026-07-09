import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {

    const navigate = useNavigate()

  const [registerData,setRegisterData] = useState({userName:"",userEmail:"",userPassword:""})
  const [dataBase,setDataBase] = useState([])
  const handleChange = (e)=>{

     setRegisterData({...registerData,[e.target.name]:e.target.value})

  }
 
  const handleSubmit = (e)=>{

    e.preventDefault()

    if(registerData.userName === "" || registerData.userEmail === "" || registerData.userPassword===""){
        alert("Fill the Empty input")
        return
    } 
  
     
    const myData = JSON.parse(localStorage.getItem("userData")) || []

   const checkEmail =  myData.find((e)=>e.userEmail === registerData.userEmail)

   if(checkEmail){
    alert("Your Email Id is alredy register Try New")
    return
   }

    myData.push(registerData)

    // setDataBase(myData)

    localStorage.setItem("userData",JSON.stringify(myData))
   
    alert('Succfully Added')

    setRegisterData({userName:"",userEmail:"",userPassword:""})
     
    navigate("/login")

  }

  return (
  <>
    <div>
      <h2>
        Register
      </h2>
    </div>
   
   <div>
    <form onSubmit={handleSubmit}>
      
      <input type="text" name="userName" onChange={handleChange} value={registerData.userName} placeholder='User Name' />
      <input type="text" name="userEmail" onChange={handleChange} value={registerData.userEmail} placeholder='User Email' />
      <input type="password" name="userPassword" onChange={handleChange} value={registerData.userPassword} placeholder='User Password' />
      <input type="submit" value={"Register"} />
    </form>
   </div>

  </>
  )
}

export default Register