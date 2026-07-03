import { useState } from "react"


const Form = () => {

    const [stuname,setStuName]=useState("")

    const [empname,setEmpName]=useState("")

    const [age,setAge]=useState("")

    const [email,setEmail]=useState("")

    const [mobile,setMobile]=useState("")

    const [city,setCity]=useState("")

    const [course,setCourse]=useState("")

    const [text,setText]=useState("")

    const [uptext,setUpText]=useState("")

    const [lotext,setLoText]=useState("")

    const [first,setFirst]=useState("")
    const [last,setLast]=useState("")

    const studentName=(e)=>{
        setStuName(e.target.value)
    }

    const employeeName=(e)=>{
        setEmpName(e.target.value)
    }

    const showAge = (e)=>{
        setAge(e.target.value)
    }

    const showEmail = (e)=>{
        setEmail(e.target.value)
    }

    const showCity = (e) =>{
        setCity(e.target.value)
    }

    const firstName = (e) =>{
        setFirst(e.target.value)
    }

    const lastName = (e) =>{
        setLast(e.target.value)
    }

    
    
  return (
    <>
    <div className="text-center">
    <form>
        {/* Student Name Input */}
        <label htmlFor="studentName">Student's Name </label>
        <input type="text" id="studentName" value={stuname} onChange={studentName} className="border rounded-lg p-2"/>
        <p>Student Name:{stuname}</p>
      
        {/* Employee Name Form */}
        <label htmlFor="employeeName">Employee's Name </label>
        <input type="text" id="employeeName" value={empname} onChange={employeeName} className="border rounded-lg p-2"/>
        <p>Employee Name: {empname}</p>

        {/* Age Input */}
        <label htmlFor="age">Age </label>
        <input type="number" id="age" value={age} onChange={showAge} className="border rounded-lg p-2"/>
        <p>Age: {age}</p>

         	 
        {/* Email Form */}
        <label htmlFor="email">Email </label>
        <input type="email" id="email" value={email} onChange={showEmail} className="border rounded-lg p-2"/>
        <p>Email: {email}</p>

        	
        {/* Mobile Number Form */}
        <label htmlFor="mobile">Mobile Number </label>
        <input type="tel" id="mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} className="border rounded-lg p-2"/>
        <p>Mobile Number: {mobile}</p>

        	
        {/* City Selection */}
        <label htmlFor="city">City</label>
        <select value={city} onChange={showCity}>
            <option value="">Select City</option>
            <option value="Chennai">Chennai</option>
            <option value="Namakkal">Namakkal</option>
            <option value="Karur">Karur</option>
            <option value="salem">Salem</option>
            <option value="Dindugul">Dindugul</option>
        </select>
        <p>City: {city}</p>

        {/* Course Registration */}
        <label htmlFor="course">Course </label>
        <input type="tel" id="course" value={course} onChange={(e)=>{setCourse(e.target.value)}} className="border rounded-lg p-2"/>
        <p>Course:{course}</p>

        {/* Live Character Counter */}
        <label htmlFor="text">Enter Text </label>
        <input type="text" id="text" value={text} onChange={(e)=>{setText(e.target.value)}} className="border rounded-lg p-2"/>
        <p>Text:{text.length}</p>

        {/* Uppercase Converter */}
        <label htmlFor="text">Enter Text </label>
        <input type="text" id="text" value={uptext} onChange={(e)=>{setUpText(e.target.value)}} className="border rounded-lg p-2"/>
        <p>Text:{uptext.toUpperCase()}</p>

        {/* Lowercase Converter */}
        <label htmlFor="text">Enter Text </label>
        <input type="text" id="text" value={lotext} onChange={(e)=>{setLoText(e.target.value)}} className="border rounded-lg p-2"/>
        <p>Text:{lotext.toLowerCase()}</p>
    

        {/* Full Name Form */}
        <label htmlFor="text">Enter First Name </label>
        <input type="text" id="text" value={first} onChange={firstName} className="border rounded-lg p-2"/> <br></br>
        <label htmlFor="text">Enter Last Name </label>
        <input type="text" id="text" value={last} onChange={lastName} className="border rounded-lg p-2"/>
        <p>Full Name: {first}{last}</p>

      


    </form>
    </div>
      
    </>
  )
}

export default Form
