import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const DashBoardPatient = () => {

    const [registerData,setRegisterData]=useState([])
    const navigate = useNavigate()


    const dataStore = JSON.parse(localStorage.getItem("patientDetails")) || []
    

    useEffect(()=>{
        const data = ()=>{
            
            setRegisterData(dataStore)
        }
        data()
    },[])

    const logout = () =>{
        localStorage.removeItem("patientDetails")
        navigate("/")
    }



  return (
    <>
    <p className="bg-blue-800 text-white p-2 text-center">DashBoard</p>

    {registerData.map((patient,index)=>(
        <div className="flex gap-5 justify-center" key={index}>
    <h2>Patient Name:{patient.patientName}</h2><br />
    <h3>Age:{patient.age}</h3><br />
    <p>Disease:{patient.disease}</p><br />
    <p>Doctor Name:{patient.doctorName}</p><br />
    </div>

    ))}

   

      
    </>
  )
}

export default DashBoardPatient
