import { FaUserPlus } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";

const Login = () => {
  return (
    <>
    <form>
      <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="max-w-md w-full border border-gray-300 rounded-2xl shadow-lg p-8 bg-white">
           <div className="bg-blue-200 text-blue-700 border rounded-full w-20 h-20 flex items-center justify-center mx-auto">
           <div className="text-2xl"><FaUserPlus/></div>
          </div>
          <div className="flex flex-col items-center mt-5 ">
            <h1 className="text-black font-bold text-3xl">Login</h1>
            <p className="text-gray-500">Please login to your account</p>
          </div>
      
          <div>
           
          <div className="flex items-center border mt-3 border-gray-500 rounded-md w-full ">
             <div className="text-gray-500 ml-2 mt-1">  <MdOutlineEmail /></div>
            <input type="email" placeholder="Email Address" className="p-2"></input>
          </div>
          <div className="flex items-center border mt-3 border-gray-500 rounded-md w-full">
            <div className="text-gray-500 ml-2 mt-1">  <MdOutlinePassword /></div>
            <input type="password" placeholder="Password" className="p-2"></input>
          </div>
         
          <div className="flex items-center border mt-3 border-blue-700 bg-blue-700  rounded-md w-full">
            <div className="text-white p-2 text-center w-full">
              <button >Submit</button>
            </div>
           
          </div>
          </div>
      
          </div>
          </div>
          </form>
      
    </>
  )
}

export default Login
