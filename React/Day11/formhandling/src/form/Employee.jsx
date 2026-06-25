import { useState } from "react"


const Employee = () => {

    const[datas,setDatas]=useState({empname:'',empid:'',department:'',salary:''})
    const[showdatas,setShowDatas]=useState([])

    const handleChange = (e) =>{
        setDatas({...datas,[e.target.name]:e.target.value})
    }
    const handleClick = (e) => {
        e.preventDefault()

        const checkId = showdatas.find((e)=>e.empid===datas.empid)
        if(checkId){
            alert("Employee ID already Exists")
            return
        }
        if(datas.salary>50000){
            alert("you were not eligible for this requirement")
            return
        }

        setShowDatas((prev)=>[...prev,datas])

        
        setDatas({empname:'',empid:'',department:'',salary:''})
    }



  return (
    <>
    <form onSubmit={handleClick}>

        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Employee Name </label>
            <input type="text" name="empname" value={datas.empname} onChange={handleChange} placeholder="enter the Name"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Employee ID </label>
            <input type="text" name="empid" value={datas.empid} onChange={handleChange} placeholder="enter the Id"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Department</label>
            <input type="text" name="department" value={datas.department} onChange={handleChange} placeholder="enter the Department"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Salary </label>
            <input type="text" name="salary" value={datas.salary} onChange={handleChange} placeholder="enter the Salary"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex justify-center mt-3 ml-10">
            <button type="submit" className="bg-blue-700 text-white rounded-lg w-25 p-3">Submit</button>
        </div>

</form>

<div>
    {showdatas.map((e,i)=>(
        <div key={i+1} className="border p-4 rounded-lg shadow-md mt-3 w-50">
            <p>{e.empname}</p>
            <p>{e.empid}</p>
            <p>{e.department}</p>
            <p>{e.salary}</p>
        </div>
    ))}
</div>
      
    </>
  )
}

export default Employee
