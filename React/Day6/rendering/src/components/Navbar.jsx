import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <div className="bg-purple-400 p-4 flex gap-10">
     
    <div className="flex justify-center gap-10">
  
    <Link to={"/array"}>Array</Link>
    <Link to={"/object"}>Object</Link>
    <Link to={"/arrofobj"}>Array Of Object</Link>
    </div> 
    </div>
    </>
  )
}

export default Navbar
