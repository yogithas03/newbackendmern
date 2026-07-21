import { useState } from "react"

 
 const EmployeeRegister = () => {

    const [datas,setDatas]=useState({name:"",email:"",department:""})

    const [show,setShow]=useState([])

    const handleChange =(e)=>{
        setDatas({...datas,[e,target.name]:e.target.value})
    }

    const handleClick=(e)=>{
        e.preventDefault()
        if(datas.name===""||datas.email===""||datas.department===""){
            alert("Please Fill All Fields")
            return
        }

        setShow(show)

        

    }
   return (
     <>
     <form onSubmit={handleClick}>
        <input type="text" name="name" placeholder="Employee Name" value={datas.name} onChange={handleChange}/>
        <br /><br />
        <input type="email" name="email" placeholder="Email" value={datas.email} onChange={handleChange}/>
        <br/><br/>
        <input type="text" name="department" placeholder="Department" value={datas.department} onChange={handleChange}/>
        <br/><br/>
        <input type="submit" value={"register"}/>
    </form>
       
     </>
   )
 }
 
 export default EmployeeRegister
 