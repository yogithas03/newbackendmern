import { Route, Routes } from "react-router-dom"

import Object from "../pages/Object"
import ArrayOfObject from "../pages/ArrayOfObject"
import Navbar from "../components/Navbar"
import Array from "../pages/Array"


const AppRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
       
        <Route path="/array" element={<Array/>}/>
        <Route path="/object" element={<Object/>}/>
        <Route path="/arrofobj" element={<ArrayOfObject/>}/>
    </Routes>
      
    </>
  )
}

export default AppRoutes
