import { useContext } from "react"
import StudentContext from "../Context/StudentContext"


const Students = () => {

    const {datas,handleClick}=useContext(StudentContext)
  return (
    <>
    <div className="flex items-start gap-10">
    <button onClick={handleClick} className="bg-green-800 rounded-lg mx-4 p-3 text-white">Show</button>
      <table>
        <thead>
            <tr>
                <th className="border px-6 py-2">ID</th>
                <th className="border px-6 py-2">Name</th>
                <th className="border px-6 py-2">Course</th>
            </tr>
        </thead>
        <tbody>
            {datas.map((e,i)=>(
                <tr key={i+1}>
                <td className="border px-6 py2 text-center">{e.id}</td>
                <td className=" border px-6 py-2">{e.name}</td>
                <td className=" border px-6 py-2">{e.course}</td>
            </tr>
            ))}
        </tbody>
      </table>
      </div>
    </>
  )
}

export default Students
