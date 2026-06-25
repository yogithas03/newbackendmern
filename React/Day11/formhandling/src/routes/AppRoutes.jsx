import { Routes, Route, Router } from "react-router-dom"
import Register from "../form/Register"
import Navbar from "../Components/Navbar"
import ClassForm from "../form/ClassForm"
import Employee from "../form/Employee"
import ProductManagement from "../form/ProductManagement "
import UserProfileForm from "../form/UserProfileForm"
import SchoolManagementForm from "../form/SchoolManagementForm"

const AppRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        
        <Route path={"/"} element={<Register/>}/>
        <Route path={"/employee"} element={<Employee/>}/>
        <Route path={"/product"} element={<ProductManagement/>}/>
        <Route path={"/userprofile"} element={<UserProfileForm/>}/>
        <Route path={"/school"} element={<SchoolManagementForm/>}/>
        <Route path={"/classform"} element={<ClassForm/>}/>

    </Routes>
      
    </>
  )
}

export default AppRoutes
