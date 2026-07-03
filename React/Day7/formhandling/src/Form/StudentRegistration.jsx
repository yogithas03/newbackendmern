import { useState } from "react"


const StudentRegistration = () => {
      
    const [name,setName]=useState("")

    const [age,setAge]=useState("")
 
    const [course,setCourse]=useState("")
    
    const [city,setCity]=useState("")

   
  return (
    <>
    <form>
        <div className="text-center bg-blue-800 text-white">
        <p>Student Registration Form</p>
        </div>
        <div className="text-center mt-6">
    {/* name */}
        <label htmlFor="studentName">Student's Name </label>
        <input type="text" id="studentName" value={name} onChange={(e)=>{setName(e.target.value)}} className="border rounded-lg p-2"/>
         <br></br>
    {/* age */}
        <label htmlFor="age">Age </label>
        <input type="number" id="age" value={age} onChange={(e)=>{setAge(e.target.value)}} className="border rounded-lg p-2 mt-5 ml-20"/>
        <br></br>
    {/* Course Registration */}
        <label htmlFor="course">Course </label>
        <input type="tel" id="course" value={course} onChange={(e)=>{setCourse(e.target.value)}} className="border rounded-lg p-2 mt-5 ml-16"/>
        <br></br>
    {/* City Selection */}
        <label htmlFor="city" className="mr-40">City</label>
        <select value={city} 
        className="border rounded-lg p-2 mt-5 ml-3"
         onChange={(e)=>{setCity(e.target.value)}}>
            <option value="">Select City</option>
            <option value="Chennai">Chennai</option>
            <option value="Namakkal">Namakkal</option>
            <option value="Karur">Karur</option>
            <option value="salem">Salem</option>
            <option value="Dindugul">Dindugul</option>
        </select>

        <div className="bg-blue-800 text-white mx-auto mt-7">
            <p>{name}</p>
            <p>{age}</p>
            <p>{course}</p>
            <p>{city}</p>
        </div>
        </div>
      </form>
    </>
  )
}

export default StudentRegistration
