import { useState } from "react"
import { useNavigate } from "react-router-dom"


const StuLogin = () => {

    const navigate = useNavigate()
    const [details,setDetails]=useState({stuemail:"",stupassword:""})
   
    const handleChange = (e) => {
        setDetails({...details,[e.target.name]:e.target.value})
    }

    const handleClick = (e)=>{

        e.preventDefault()
        
        const mydata = JSON.parse(localStorage.getItem("userdata"))
        const checkauth = mydata.find((e)=>e.stuemail===details.stuemail || e.stupassword===details.stupassword)
        if(!checkauth){
            alert("check user")
            return
        }

        localStorage.setItem("auths",JSON.stringify(checkauth))

        setDetails({stuemail:"",stupassword:""})

        navigate("/dashboard")
    }







  return (
    <>
    <div className="bg-blue-950 text-white p-3 text-center">
    Login
        </div>
    <form onSubmit={handleClick} >
    <label >Student Email </label>
    <input type="email" name="stuemail" value={details.stuemail} onChange={handleChange} placeholder="Student Email" /><br />
    <label>Student Password</label>
    <input type="password" name="stupassword" value={details.stupassword} onChange={handleChange} placeholder="Student Password"/><br />
    <input type="submit" value={"Login"}/>
    </form>

      
    </>
  )
}

export default StuLogin
