import { useState } from "react"


const Register = () => {

    const [studentData,setStudentData]=useState({studentname:"",studentage:"",studentcourse:"",studentcity:""})
    const [datastore,setDataStore]=useState([])

    const handleChange = (e) => {

        setStudentData({...studentData,[e.target.name]:e.target.value})
    }
    const handleClick = (e) => {
        e.preventDefault()
  
        if(studentData.studentage<18){
            alert("This Age is Not Required!!")
            return
        }


       setDataStore((prev)=>[...prev,studentData])
       setStudentData({studentname:"",studentage:"",studentcourse:"",studentcity:""})

    }

  return (
    <>
    <form onSubmit={handleClick}>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Student's Name </label>
            <input type="text" name="studentname" value={studentData.studentname} onChange={handleChange} placeholder="enter the name"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Student's Age </label>
            <input type="number" name="studentage" value={studentData.studentage} onChange={handleChange} placeholder="enter the age"
            className="border-2 rounded-l p-2 "/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Student's Course </label>
            <input type="text" name="studentcourse" value={studentData.studentcourse} onChange={handleChange} placeholder="enter the course"
            className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Student's City </label>
            <input type="text" name="studentcity" value={studentData.studentcity} onChange={handleChange} placeholder="enter the city" 
            className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex justify-center mt-3 ml-10">
            <button type="submit" className="bg-green-950 text-white rounded-lg w-25 p-3 ">submit</button>
        </div>
    </form>

    <div className="ml-7">
        {datastore.map((e,i)=>(
            <div key={i+1} className="border p-4 rounded-lg shadow-md mt-3 w-50">
                <p>{e.studentname}</p>
                <p>{e.studentage}</p>
                <p>{e.studentcourse}</p>
                <p>{e.studentcity}</p>
            </div>
        ))}
    </div>

    
      
    </>
  )
}

export default Register
