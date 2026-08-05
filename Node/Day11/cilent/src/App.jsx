import { useState } from "react"
import { addData } from "./api/axios"




const App = () => {

  const [empdatas,setEmpDatas]= useState({employeeName:"",email:"",department:"",salary:"",mobileNumber:""})


  const handleChange=(e)=>{
    setEmpDatas({...empdatas,[e.target.name]:e.target.value})
  }

  const handleAdd = async(e)=>{

    e.preventDefault()

    try {

      const addDatas = await addData(empdatas)   
      
      console.log(addDatas)

      alert(addDatas.data.msg)
       
      setEmpDatas({employeeName:"",email:"",department:"",salary:"",mobileNumber:""})
    } catch (error) {

      console.log('error',error.message)
      
    }
  }



  return (
    <>

    <form>

      <input type='text' value={empdatas.employeeName} name='employeeName' onChange={handleChange} placeholder='employeeName'/><br/><br />
      <input type='email' value={empdatas.email} name='email' onChange={handleChange} placeholder='email' /><br /><br />
      <input type='text' value={empdatas.department} name='department' onChange={handleChange} placeholder='department' /><br /><br />
      <input type='number' value={empdatas.salary} name='salary' onChange={handleChange} placeholder='salary' /><br /><br />
      <input type='number' value={empdatas.mobileNumber} name='mobileNumber' onChange={handleChange} placeholder='mobileNumber'  /><br /><br />
      <button onClick={handleAdd}>ADD</button>

    </form>


      
    </>
  )
}

export default App
