import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <div className=" bg-blue-900 text-white flex justify-center gap-4">
    <Link to={"/"}>Form</Link>
    <Link to={"/formsecond"}>Second Form</Link>
    <Link to={"/contact"}>ContactForm</Link>
    <Link to={"/employee"}>EmployeeList</Link>
    <Link to={"/product"}>ProductList</Link>
    <Link to={"/student"}>StudentRegistration</Link>
    <Link to={"/todo"}>TodoApplication</Link>
    <Link to={"/userlist"}>UserList</Link>
    </div>
      
    </>
  )
}

export default Navbar
