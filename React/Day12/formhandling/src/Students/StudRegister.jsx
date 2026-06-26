import { useState } from "react"
import { useNavigate } from "react-router-dom"


const StudRegister = () => {

    const [details,setDetails]=useState({stuname:"",stuemail:"",stupassword:""})
    const [save,setSave]=useState([])
    const navigate = useNavigate()

    const handleChange = (e) =>{

        setDetails({...details,[e.target.name]:e.target.value})
    
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const mydata = JSON.parse(localStorage.getItem("userdata")) || []

        const checkEmail = mydata.find((e)=>e.userEmail === details.userEmail)
        if(checkEmail){
            alert("check email")
            return
        }

        mydata.push(details)

        localStorage.setItem("userdata",JSON.stringify(mydata))

        alert("data Added!!")
        

        setDetails({stuname:"",stuemail:"",stupassword:""})

         navigate("/login")
       
    }


return (
    <>

    <form onSubmit={handleSubmit}>
    <label>Student Name</label>
    <input type="text" name="stuname" value={details.stuname} onChange={handleChange} placeholder="Student Name"/><br />
    <label>Student Email</label>
    <input type="email" name="stuemail" value={details.stuemail} onChange={handleChange} placeholder="Student Email"/><br />
    <label>Student Password</label>
    <input type="password" name="stupassword" value={details.stupassword} onChange={handleChange} placeholder="Student Password"/><br />
    <input type="submit" value={"Register"}/>
    </form>
      
    </>
  )
}

export default StudRegister
