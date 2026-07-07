import { useRef } from "react"


const Resume = () => {

    const nameref = useRef("")
    const emailref =useRef("")
    const educationref=useRef("")
    const yearref =useRef("")
    const skillRef=useRef("")
    const expRef = useRef("")
    const locRef =useRef("")

    const showName =useRef("")
    const showEmail=useRef("")
    const showEducation=useRef("")
    const showYear =useRef("")
    const showSkills=useRef("")
    const showExp =useRef("")
    const showLoc =useRef("")

    

    const handleChange =()=>{

      const selectSkills = [...skillRef.current.selectedOptions].map((option)=>option.value)

        
     const datas ={
           name:nameref.current.value,
           email:emailref.current.value,
           education:educationref.current.value,
           year:yearref.current.value,
           skills:selectSkills.join(","),
           experience:expRef.current.value,
           location:locRef.current.value
     }

     showName.current.innerHTML=datas.name
     showEmail.current.innerHTML=`<b>Email:</b> ${datas.email}`
     showEducation.current.innerHTML=`<b>Education:</b> ${datas.education}`
     showYear.current.innerHTML=`<b>Year:</b> ${datas.year}`
     showSkills.current.innerHTML=`<b>Skills:</b> ${datas.skills}`
     showExp.current.innerHTML=`<b>Experience:</b> ${datas.experience}`
     showLoc.current.innerHTML=`<b>Location:</b> ${datas.location}`
     }






  return (
    <>
    <div className="flex justify-between mb-10">
        
    <div>
        <p className="bg-blue-800 text-white text-center p-3">Fill the form</p>
        
        <label className="font-bold">Name </label>
        <input type="text" ref={nameref} placeholder="enter the name" className="border-2 p-2 mt-5 rounded-lg" onChange={handleChange}/><br />
        <label className="font-bold">Email Id </label>
        <input type="email" ref={emailref} placeholder="enter the email" className="border-2 p-2 mt-5 rounded-lg" onChange={handleChange}/><br />
        <label className="font-bold">Education </label>
        <input type="text" ref={educationref} placeholder="enter the education" className="border-2 p-2 mt-5 rounded-lg" onChange={handleChange}/><br />
        <label className="font-bold">Passed Out </label>
        <input type="year" ref={yearref} placeholder="enter the passedout" className="border-2 p-2 mt-5 rounded-lg" onChange={handleChange}/><br />
       <br />
       <label className="font-bold">Skills</label>
       <br />
       <select multiple ref={skillRef} onChange={handleChange}>
        
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JS">JS</option>
        <option value="REACT">REACT</option>
        <option value="MERN">MERN</option>
        <option value="JAVA">JAVA</option>
        </select>
        <br />
        <label className="font-bold">Experience</label>
        <br />
        <select ref={expRef} onChange={handleChange}>
          <option value='fresher'>Fresher</option>
          <option value='1years'>1years</option>
          <option value='above 1 years'>Above 1years</option>
        </select>
        <br />
        <label className="font-bold">Location</label>
        <br />
        <select ref={locRef} onChange={handleChange}>
         <option>Chennai</option>
         <option>Coimbatore</option>
         <option>Bangalore</option>
        </select>

       

        
        
        


    </div>
    <div className="w-full">
        <p className="bg-blue-800 text-white text-center p-3">Resume</p>
        <div>
           <p ref={showName} className="font-bold text-5xl text-center text-blue-700"></p>
           <br /><br />
           <p className="text-center">Aspiring Professional</p>
           <p className="text-center">______________________</p>
        </div>
        <div className="text-center">
        <p ref={showEmail}><span  >Email:</span></p>
        <p ref={showEducation}><span className="font-bold">Education:</span></p>
        <p ref={showYear}><span className="font-bold">PassedOut:</span></p>
        <p ref={showSkills}><span className="font-bold">Skills:</span></p>
        <p ref={showExp}><span className="font-bold">Experience:</span></p>
        <p ref={showLoc}><span className="font-bold">Location:</span></p>
        </div>
    </div>
    </div>
      
    </>
  )
}

export default Resume
