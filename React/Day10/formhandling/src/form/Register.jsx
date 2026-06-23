import { useState } from "react"


const Register = () => {

   const[data,setData]=useState({userName:" ",useEmail:" ",userCourse:" ",userCity:" "})
   const[showdata,setShowData]=useState([])

    const handleChange =(e)=>{
         setData({...data,[e.target.name]:e.target.value})
        
    }
    const handleClick = (e)=>{
        e.preventDefault()
        setShowData(prev=>[...prev,data])
        console.log(showdata)
    }
  return (
    <>
   
    
    <form className="text-center">
        
        
        <label htmlFor="" className="text-center">Enter the Name </label>
        <input type="text" className="border-2 text-black rounded-lg p-2 mt-3" name="userName" value={data.userName} onChange={handleChange}/><br />
        <label htmlFor="" className="text-center">Enter the Email </label>
        <input type="text" className="border-2  text-black rounded-lg p-2 mt-3" name="userEmail" value={data.userEmail} onChange={handleChange}></input><br />
        <label htmlFor="" className="text-center">Enter the Course </label>
        <input type="text" className="border-2  text-black rounded-lg p-2 mt-3" name="userCourse" value={data.userCourse} onChange={handleChange}></input><br />
        <label htmlFor="" className="text-center">Enter the City </label>
        <input type="text" className="border-2  text-black rounded-lg p-2 mt-3" name="userCity" value={data.userCity} onChange={handleChange}></input><br />
        <button className="bg-green-800 rounded-lg p-3 mt-4" onClick={handleClick}>Submit</button>

      
        
         

    </form>
    {showdata.map((e,i)=>(
        <div key={i+1}>
            <p>Name:{e.userName}</p>
             <p>Email:{e.userEmail}</p>
              <p>Course:{e.Course}</p>
               <p>City:{e.City}</p>
        </div>
        ))}
   
      
    </>
  )
}

export default Register
