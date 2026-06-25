import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <div className="flex justify-center gap-10 p-3 text-xl bg-blue-700 text-white">
    <Link to={"/"}>Register</Link>
    <Link to={"/employee"}>Employee</Link>
    <Link to={"/product"}>Product Management</Link>
    <Link to={"/userprofile"}>UserProfileForm</Link>
    <Link to={"/school"}>SchoolManagementForm</Link>
    <Link to={"/classform"}>ClassForm</Link>
    </div>
    </>
  )
}

export default Navbar
