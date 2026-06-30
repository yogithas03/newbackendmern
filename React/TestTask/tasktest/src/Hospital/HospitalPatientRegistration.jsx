import { useState } from "react"
import { useNavigate } from "react-router-dom"


const HospitalPatientRegistration = () => {

    const [patient, setPatient]=useState({patientName:"",age:"",disease:"",doctorName:""})
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setPatient({...patient,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
  
        if(patient.patientName===""||patient.age===""||patient.disease===""||patient.doctorName===""){
            alert("Fill the empty space")
            return
        }
    const dataStore = JSON.parse(localStorage.getItem("patientDetails"))||[]

        dataStore.push(patient)

        localStorage.setItem("patientDetails",JSON.stringify(dataStore))

        alert("Data Added")

        setPatient({patientName:"",age:"",disease:"",doctorName:""})

        navigate("/dashboard")

        
    }
  return (
    <>

     <h1 className="bg-blue-800 text-white  p-2 text-center">Hospital Patient Registration</h1>


    <form onSubmit={handleSubmit} className="text-center mt-4">
        <input type="text" name="patientName" placeholder="Patient Name" className="border-2 p-2 rounded-lg"
          value={patient.patientName} onChange={handleChange}/><br />
        <input type="number" name="age" placeholder="Age" className="border-2 p-2 rounded-lg mt-4"
          value={patient.age} onChange={handleChange}/><br />
        <input type="text" name="disease" placeholder="Disease" className="border-2 p-2 rounded-lg mt-4"
          value={patient.disease} onChange={handleChange}/><br />
        <input type="text" name="doctorName" placeholder="Doctor Name" className="border-2 p-2 rounded-lg mt-4"
          value={patient.doctorName} onChange={handleChange}/><br />

        <button type="submit" className="bg-green-700 p-2 rounded-lg mt-4">Register Patient</button>
    </form>
      
    </>
  )
}

export default HospitalPatientRegistration
