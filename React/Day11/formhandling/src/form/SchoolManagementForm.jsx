import { useState } from "react"


const SchoolManagementForm = () => {

    const [datas,setDatas]=useState({schoolname:"",principal:"",city:"",students:""})
    const [collected,setCollected]=useState([])

    const handleChange =(e)=>{
        setDatas({...datas,[e.target.name]:e.target.value})
    }

    const handleClick = (e)=>{
        e.preventDefault()

        const checkSchool = collected.find((e)=>e.schoolname===datas.schoolname)
        if(checkSchool){
            alert("This School Name is already exists")
            return
        }

        setCollected((prev)=>[...prev,datas])
        setDatas({schoolname:"",principal:"",city:"",students:""})
        
    }
  return (
    <>
    <form onSubmit={handleClick}>

        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">School Name</label>
            <input type="text" name="schoolname" value={datas.schoolname} onChange={handleChange} placeholder="enter the SchoolName"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Principal Name</label>
            <input type="text" name="principal" value={datas.principal} onChange={handleChange} placeholder="enter the PrincipalName"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">City</label>
            <input type="text" name="city" value={datas.city} onChange={handleChange} placeholder="enter the City"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Total Students</label>
            <input type="number" name="students" value={datas.students} onChange={handleChange} placeholder="enter the Total Students"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex justify-center mt-3 ml-10">
            <button type="submit" className="bg-blue-700 text-white rounded-lg w-25 p-3">Submit</button>
        </div>

</form>

<div>
    {collected.map((e,i)=>(
        <div key={i+1} className="bg-blue-800 text-amber-50 rounded-lg p-4 shadow-2xl w-60 mt-3 ml-3">
            <p>{e.schoolname}</p>
            <p>{e.principal}</p>
            <p>{e.city}</p>
            <p>{e.students}</p>
        </div>
    ))}
</div>


      
    </>
  )
}

export default SchoolManagementForm
