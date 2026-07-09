import { Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Home from "../pages/Home"


const AppRouters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default AppRouters
