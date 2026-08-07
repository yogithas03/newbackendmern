import { Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import DashBoard from "../pages/DashBoard"
import Navbar from "../components/Navbar"


const AppRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<DashBoard />}/>
    </Routes>

      
    </>
  )
}

export default AppRoutes
