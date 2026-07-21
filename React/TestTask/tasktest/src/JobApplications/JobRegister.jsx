import { useState } from "react"


const JobRegister = () => {

    const [store,setStore]=useState({name:"",email:"",skills:"",experience:""})

    const handleChange =(e)=>{
        setStore({...store,[e.target.name]:e.target.value})
    }

    const handleSubmit =(e)=>{

        e.preventDefault()

        if(store.name === "" || store.email === "" || store.skills === "" || store.experience === ""){
            alert("fill the all required blank")
            return 
        }

        const storeData = JSON.parse(localStorage.getItem("registerList")) || []

        storeData.push(store)

        localStorage.setItem("registerList",JSON.stringify(storeData))

         alert("Data Stored In LocalStorage!!!")

        setStore({name:"",email:"",skills:"",experience:""})




    }

  
    



  return (
    <>
    <h1 className="bg-blue-800 text-white p-2 text-center">Job Application Portal</h1>


    <form onSubmit={handleSubmit} className="text-center mt-4">
        <input type="text" name="name" placeholder="Candidate Name" value={store.name} onChange={handleChange} className="border-2 p-2 rounded-lg mt-2"/><br/>
        <input type="email" name="email" placeholder="Candidate Email" value={store.email} onChange={handleChange} className="border-2 p-2 rounded-lg mt-2"/><br/>
        <input type="text" name="skills" placeholder="Candidate Skills" value={store.skills} onChange={handleChange} className="border-2 p-2 rounded-lg mt-2" /><br/>
        <input type="text" name="experience" placeholder="Candidate Experience" value={store.experience} onChange={handleChange} className="border-2 p-2 rounded-lg mt-2"/><br/>
        <input type="submit" value={"register"} className="bg-green-700 text-white p-3 rounded-lg mt-2"/>
    </form>
      
    </>
  )
}

export default JobRegister
