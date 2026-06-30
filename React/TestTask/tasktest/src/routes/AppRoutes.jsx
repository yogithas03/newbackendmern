import { Route, Routes } from "react-router-dom"
import HospitalPatientRegistration from "../Hospital/HospitalPatientRegistration"
import DashBoardPatient from "../Hospital/DashBoardPatient"
// import StudentRegister from "../student/StudentRegister"
// import StudentDashBoard from "../student/StudentDashBoard"



const AppRoutes = () => {
  return (
    <>
    <div>


     <Routes>
        {/* <Route path="/" element={<StudentRegister/>}/>
        <Route path="/dash" element={<StudentDashBoard/>}/> */}
        <Route path="/" element={<HospitalPatientRegistration/>}/>
        <Route path="/dashboard" element={<DashBoardPatient/>}/>
     </Routes>

     


    </div>
      
    </>
  )
}

export default AppRoutes
