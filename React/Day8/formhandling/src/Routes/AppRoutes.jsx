import { Route, Routes } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Form from "../Form/Form"
import FormSecond from "../Form/FormSecond"
import ContactForm from "../Form/ContactForm"
import EmployeeList from "../Form/EmployeeList"
import ProductList from "../Form/ProductList"
import StudentRegistration from "../Form/StudentRegistration"
import TodoApplication from "../Form/TodoApplication"
import UserList from "../Form/UserList"


const AppRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/formsecond" element={<FormSecond/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/employee" element={<EmployeeList/>}/>
        <Route path="/product" element={<ProductList/>}/>
        <Route path="/student" element={<StudentRegistration/>}/>
        <Route path="/todo" element={<TodoApplication/>}/>
        <Route path="/userlist" element={<UserList/>}/>

        
    </Routes>
      
    </>
  )
}

export default AppRoutes
