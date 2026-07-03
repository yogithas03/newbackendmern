import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Counter from "../pages/Counter"
import StudentName from "../pages/StudentName"
import AgeIncre from "../pages/AgeIncre"
import Login from "../pages/Login"
import Theme from "../pages/Theme"
import ShowHide from "../pages/ShowHide"
import UserData from "../pages/UserData"
import ProductDetails from "../pages/ProductDetails"
import MobileNum from "../pages/MobileNum"
import Salary from "../pages/Salary"
import Course from "../pages/Course"
import Employee from "../pages/Employee"
import Attendance from "../pages/Attendance"
import Profile from "../pages/Profile"
import BankBalance from "../pages/BankBalance"


const AppRoutes = () => {
  return (
    <>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/task1" element={<Counter/>}/>
     <Route path="/task2" element={<StudentName/>}/>
     <Route path="/task3" element={<AgeIncre/>}/>
     <Route path="/task4" element={<Login/>}/>
     <Route path="/task5" element={<Theme/>}/>
     <Route path="/task6" element={<ShowHide/>}/>
     <Route path="/task7" element={<UserData/>}/>
     <Route path="/task8" element={<ProductDetails/>}/>
     <Route path="/task9" element={<MobileNum/>}/>
     <Route path="/task10" element={<Salary/>}/>
     <Route path="/task11" element={<Course/>}/>
     <Route path="/task12" element={<Employee/>}/>
     <Route path="/task13" element={<Attendance/>}/>
     <Route path="/task14" element={<Profile/>}/>
     <Route path="/task15" element={<BankBalance/>}/>
     </Routes>
      
    </>
  )
}

export default AppRoutes
