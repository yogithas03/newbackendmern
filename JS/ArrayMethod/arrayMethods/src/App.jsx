import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Methods from "./Pages/Methods";





const App =()=> {
  return (
    <>
    <Navbar/>
    
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/methods" element={<Methods/>}/>
    </Routes>
  
    </>
  );
}

export default App;