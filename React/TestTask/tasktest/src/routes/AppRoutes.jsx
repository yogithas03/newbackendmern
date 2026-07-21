import { Route, Routes } from "react-router-dom"
import VehicleRegistration from "../Vehicle Registration/VehicleRegistration"
import VehicleLogin from "../Vehicle Registration/VehicleLogin"
// import HospitalPatientRegistration from "../Hospital/HospitalPatientRegistration"
// import DashBoardPatient from "../Hospital/DashBoardPatient"
// import JobRegister from "../JobApplications/JobRegister"
// import StudentRegister from "../student/StudentRegister"
// import StudentDashBoard from "../student/StudentDashBoard"



const AppRoutes = () => {
  return (
    <>
    


     <Routes>
        {/* <Route path="/" element={<StudentRegister/>}/>
        <Route path="/dash" element={<StudentDashBoard/>}/> */}
        {/* <Route path="/" element={<HospitalPatientRegistration/>}/>
        <Route path="/dashboard" element={<DashBoardPatient/>}/> */}
        {/* <Route path="/" element={<JobRegister/>}/> */}
        <Route path="/" element={<VehicleRegistration/>}/>
        <Route path="/login" element={<VehicleLogin/>}/>
     </Routes>

     


    
      
    </>
  )
}

export default AppRoutes
