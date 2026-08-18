import {adding,getting,updatting} from './api/axios.js'
import { useEffect, useState } from "react"


const App = () => {
 
  const emptyEmployee = {empname: "",
  dob: "",
  qualification: [],
  gender: "",
  department: "",
  address: "",
  email: "",
  phonenumber: "",
  salary: ""}
  const [emp,setEmp]=useState(emptyEmployee)
  const [show,setshow]=useState([])
  const [edit,setEdit]=useState(null)



  const gettingData = async()=>{
    try {
      const response = await getting()
      alert(response.data.data)

    } catch (error) {
      console.log("error",error.response?. data?.msg || error.message)
    }
  }

  useEffect(()=>{
        gettingData()
  },[])

  const handleChange =(e)=>{
    setEmp({...emp,[e.target.name]:e.target.value})
  }

  const handleAdd =async(e)=>{
    e.preventDefault()
    try {
  
      const response = await adding(emp)
      alert(response.data.msg)
      setEmp(emptyEmployee)
      gettingData()

      
    } catch (error) {
      console.log("error",error.message)
      alert(error.response?.data?.msg || "something went wrong")
    }
  }

  const editData = (user)=>{
    setEmp({empname:user.empname,dob:user.dob,qualifiaction:user.qualifiaction || [],gender:user.gender})
    setEdit(user._id)
  }

  const handleupdate =async(e)=>{
    e.preventDefault()
    try {

      const response = await updatting(edit,emp)
      alert(response.data.msg)
      setEmp(emptyEmployee)
      setEdit(null)
      gettingData()
      
    } catch (error) {
       console.log("error",error.message)
      alert(error.response?.data?.msg||"something went wrong")
    }
  }

  const deleteData =async(userid)=>{
  try {

    const response = await deletting(userid)

    alert(response.data.msg)
    gettingData()
    
  } catch (error) {
     console.log("error",error.message)
      alert(error.response?.data?.msg|| "something went wrong")
  }
  }
  return (
    <>

    <form>
      <input type="text" value={emp.empname} placeholder="enter the name" name="empname" onChange={handleChange}/>
      <input type="date" value={emp.dob} placeholder="enter the name" name="dob" onChange={handleChange}/>

      <h4>Qualification</h4>
      <label>
        <input type='checkbox' value='B.E' checked={emp.qualification.includes("B.E")} onChange={handelQualification} />
      </label>
      <label>
        <input type='checkbox' value='BCA' checked={emp.qualification.includes("BCA")} onChange={handelQualification}/>
      </label>
      <label>
        <input type='checkbox' value='B.E,IT' checked={emp.qualification.includes("B.E ,IT")} onChange={handelQualification}/>
      </label>
      <h4>Gender</h4>
      <label>
        <input type='radio' name='gender' value='Male' checked={emp.gender==="Male"} onChange={handleChange}/>
      </label>
      <label>
        <input type='radio' name='gender' value='Female' checked={emp.gender==="Female"} onChange={handleChange}/>
      </label>
       <label>
        <input type='radio' name='gender' value='other' checked={emp.gender==="other"} onChange={handleChange}/>
      </label><br />
      <select name='state' value={emp.department} onChange={handleChange}>
        <option value="department">select Department</option>
        <option value="IT">IT</option>
      </select>
     

      {edit?<button onClick={handleupdate}>update</button>:<button onClick={handleAdd}>Add</button>}

    </form>

    {show.map((e)=>(
      <div key={e._id}>
          <p>{e.empname}</p>
          <p>{e.empdob}</p>
          <p>{e.qualifiaction?.join(",")}</p>
          <P>{e.gender}</P>
          <button onClick={()=>editData(e)}>Edit</button> <br />
          <button onClick={()=>deleteData(e._id)}>Delete</button>
      </div>
    ))}
      
    </>
  )
}

export default App
