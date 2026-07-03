import { useState } from "react"



const EmployeeForm = () => {

    const [datas,setDatas]=useState({empName:"",designation:"",department:"",salary:"",city:""})
   
     const [submit,setSubmit]=useState([])


    const handleChange = (e) => {
        setDatas({...datas,[e.target.name]:e.target.value})
        console.log(datas)
    }
   
    const handleSubmit = (e) =>{
        e.preventDefault()
       
         setSubmit((prev)=>[...prev,datas])
    }



  return (
    <>
    <div className="bg-blue-900 text-white text-3xl text-center mt-9 p-3">
        <h1>Employee Form</h1>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="flex items-center gap-4 ">
    <label htmlFor="" className="text-right text-x w-150">Employee Name:</label>
    <input type="text" name="empName" className="border-2 p-2 mt-3" value={datas.empName} onChange={handleChange} placeholder="enter name"/></div>

     <div className="flex items-center gap-4 ">
    <label htmlFor="" className="text-right text-x w-150"> Designation:</label>
    <input type="text" name="designation" className="border-2 p-2 mt-3" value={datas.designation} onChange={handleChange} placeholder="enter designation"/></div>

     <div className="flex items-center gap-4 ">
    <label htmlFor="" className="text-right text-x w-150">Department:</label>
    <input type="text" name="department" className="border-2 p-2 mt-3" value={datas.department} onChange={handleChange} placeholder="enter department"/></div>

     <div className="flex items-center gap-4 ">
    <label htmlFor="" className="text-right text-x w-150">Salary:</label>
    <input type="number" name="salary" className="border-2 p-2 mt-3" value={datas.salary} onChange={handleChange} placeholder="enter salary"/></div>

     <div className="flex items-center gap-4 ">
    <label htmlFor="" className="text-right text-x w-150">City:</label>
    <input type="text" name="city" className="border-2 p-2 mt-3" value={datas.city} onChange={handleChange} placeholder="enter city"/></div>

    <div className="flex justify-center mt-4 ">
        <button className="bg-green-900 text-white p-2 w-25 rounded-lg" type="submits">Submit</button>
        </div>



    </form>
        
        
    
        {submit.map((e,i)=>{
          return( <div key={i+1}>
                <p>Employee Name:{e.empName}</p>
                <p>Designation:{e.designation}</p>
                <p>Department:{e.department}</p>
                <p>Salary:{e.salary}</p>
                <p>City:{e.city}</p>
        </div>)
        })}
    
      
    </>
  )
}

export default EmployeeForm
