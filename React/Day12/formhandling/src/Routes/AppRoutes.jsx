import { Routes,Route } from "react-router-dom"
import Login from "../components/Login"
import Dashboard from "../components/Dashboard"
import Register from "../components/Register"



const AppRoutes = () => {
  return (
    <>

    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
     
      
    </>
  )
}

export default AppRoutes
