import { useState } from "react"
import { useNavigate } from "react-router-dom"


const StudentRegister = () => {

    const [details,setdetails]=useState({name:"",age:"",course:"",city:""})
    const navigate = useNavigate()
  

    const handleChange = (e) =>{
        setdetails({...details,[e.target.name]:e.target.value})
    }

    const handleClick = (e) =>{

        e.preventDefault()

        const myData = JSON.parse(localStorage.getItem("storedata")) || []

        myData.push(details)

        localStorage.setItem("storedata",JSON.stringify(myData))

        alert("Data Stored.....")

        setdetails({name:"",age:"",course:"",city:""})

        navigate("/dash")
    
    }

return (
    <>
    <div className="bg-blue-950 text-white p-3 text-center">
    Login
        </div>
    <form onSubmit={handleClick} >
    <label >Student Name </label>
    <input type="text" name="name" value={details.name} onChange={handleChange} placeholder="Student Name" /><br />
    <label >Student Age </label>
    <input type="number" name="age" value={details.age} onChange={handleChange} placeholder="Student Age" /><br />
    <label>Student Course</label>
    <input type="text" name="course" value={details.course} onChange={handleChange} placeholder="Student Course"/><br />
    <label>Student City</label>
    <input type="text" name="city" value={details.city} onChange={handleChange} placeholder="Student City"/><br />
    <input type="submit" value={"Register"}/>
    </form>

      
    </>
  )
}

export default StudentRegister
