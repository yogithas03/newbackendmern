import { useState } from "react"


const EmployeeList = () => {

    const [emp,setEmp]=useState("")
    const [disemp,setDisEmp]  =useState([])

    const showEmployee = (e)=>{
         e.preventDefault()
         setDisEmp([...disemp,emp]);
         setEmp("")
    }
  return (
    <>
       <div className="text-center bg-blue-800 text-white">
        <p>Employee List Creator</p>
    </div>
    <form>
        <div className="text-center mt-6">
        <label htmlFor="employee">Employee Name </label>
        <input type="text" id="employee" value={emp} 
         onChange={(e)=>{setEmp(e.target.value)}} className="border rounded-lg p-2 mt-5"/>
        <button className="bg-green-700 p-2 ml-3 rounded text-white" onClick={showEmployee}>Click</button>
       
        <div>
            {disemp.map((data,i)=>(
              <p key={i+1}>{data}</p>
            ))}
         </div>


        </div>

    </form>

      
    </>
  )
}

export default EmployeeList 
