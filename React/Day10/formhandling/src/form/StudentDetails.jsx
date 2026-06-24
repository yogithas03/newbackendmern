import { useState } from "react"



const StudentDetails = () => {

    const [studentdata,setStudentData]=useState({studentName:"",studentQualification:"",studentAge:"",studentEmail:"",City:""})
    const [show,setShow]=useState([])


    const handleChange = (e) =>{
       setStudentData({...studentdata,[e.target.name]:e.target.value})
       
       
    }
    const handleClick = (e) =>{
        e.preventDefault()
          setShow(prev=>[...prev,studentdata])
          
    }





  return (
    <>
    <div className="bg-blue-900 text-white text-3xl text-center p-3">
        <h1>Registration Form</h1>
    </div>
    <form className="mt-30">
        <div className="flex items-center gap-4">
        <label className="text-xl text-right w-150">Name of the Students: </label>
        <input type="text" name="studentName" placeholder="enter the name" value={studentdata.studentName} className="border-2 rounded-lg p-2 mt-2" onChange={handleChange}/></div>


        <div className="flex items-center gap-4">
        <label className="text-xl text-right w-150">Student Qualification: </label>
        <input type="text" name="studentQualification" placeholder="enter the quaification" value={studentdata.studentQualification} className="border-2 rounded-lg p-2 mt-2" onChange={handleChange}/></div>

        <div className="flex items-center gap-4">
        <label className="text-xl text-right w-150">Student age: </label>
        <input type="text" name="studentAge" placeholder="enter the age" value={studentdata.studentAge} className="border-2 rounded-lg p-2 mt-2" onChange={handleChange}/></div>

        
        <div className="flex items-center gap-4">
        <label className="text-xl text-right w-150">Student Email: </label>
        <input type="text" name="studentEmail" placeholder="enter the email" value={studentdata.studentEmail} className="border-2 rounded-lg p-2 mt-2" onChange={handleChange}/></div>

        <div className="flex items-center gap-4">
        <label className="text-xl text-right w-150">City: </label>
        <input type="text" name="City" placeholder="enter the city" value={studentdata.City} className="border-2 rounded-lg p-2 mt-2" onChange={handleChange}/></div>

        <div className="flex justify-center mt-4 ">
        <button className="bg-green-900 text-white p-2 w-25 rounded-lg" onClick={handleClick}>Submit</button>
        </div>
    </form>

    <div>
        <div>
     {show.map((e,i)=>(
        <div key={i+1}>
            <p>Student Name:{e.studentName}</p>
            <p>Student Qualification:{e.studentQualification}</p>
            <p>Student Age:{e.studentAge}</p>
            <p>Student Email:{e.studentEmail}</p>
            <p>Student City:{e.City}</p>

          
        </div>
     ))}
     </div>
    
    </div>
      
    </>
  )
}

export default StudentDetails
