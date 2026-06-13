import {Link, NavLink, useNavigate } from "react-router-dom"



const Navbar = () => {

    const click = useNavigate()
    const secondclick = useNavigate()
const handleClick = ()=>{
    click("/login")
}
const handlechange = ()=>{
    secondclick("/register")
}
  return (
    <div className=" bg-blue-950 text-white flex justify-between items-center">
      <h1 className="text-3xl font-bold text-white">TechSphere</h1>
        <div className="flex gap-10 mx-10">
            <Link to={"/"} >Home</Link>
            {/* <Link to={"/about"}>About</Link> */}
            <NavLink className={({isActive})=>isActive && "bg-amber-50 text-blue-950 rounded w-20 text-center"} to={"/about"}>About</NavLink>
            <NavLink className={({isActive})=>isActive && "bg-amber-50 text-blue-950 rounded w-20 text-center"} to={"/contact"}>Contact</NavLink>
            <button onClick={handleClick}>Login</button>
            <button onClick={handlechange}>Register</button>
        </div>
    </div>
  )
}

export default Navbar
