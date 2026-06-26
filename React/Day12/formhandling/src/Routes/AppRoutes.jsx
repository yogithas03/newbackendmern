import { Routes,Route } from "react-router-dom"
// import Login from "../components/Login"
// import Dashboard from "../components/Dashboard"
// import Register from "../components/Register"
import StudRegister from "../Students/StudRegister"
import StuLogin from "../Students/StuLogin"
import StuDashBoard from "../Students/StuDashBoard"



const AppRoutes = () => {
  return (
    <>

    <Routes>
      {/* <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/> */}
      <Route path="/" element={<StudRegister/>}/>
      <Route path="/login" element={<StuLogin/>}/>
      <Route path="/dashboard" element={<StuDashBoard/>}/>
    </Routes>
     
      
    </>
  )
}

export default AppRoutes
