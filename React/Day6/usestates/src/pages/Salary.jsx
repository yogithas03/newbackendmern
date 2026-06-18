import { useState } from "react"

const Salary = () => {

    const [sal,setSal]=useState(25000)
    const changeSal = ()=>{
        setSal(sal+5000)
    }
  return (
    <>
        <div>
          <p className="text-blue-700 text-center"> Salary Update</p>
        <div>
            <p className="text-9xl text-center text-blue-700">{sal}</p>
            <div className="flex justify-center gap-10 mt-15">
            <button className="bg-blue-600 text-white p-6 rounded-lg w-45" onClick={changeSal}>Change Salary</button>

        </div>
        </div>
        </div>
      
    </>
  )
}

export default Salary
