import { useState } from "react"


const Student = () => {
 

    const studentDatas = [ { id: 1, name: "Sudhan" },
    { id: 2, name: "Sudhakar" },
    { id: 3, name: "Rahul" },
    { id: 4, name: "Priya" },
    { id: 5, name: "Karthik" },
    { id: 6, name: "Suresh" }]

    const [search,setSearch]=useState("")

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }
    
    const filteredStudents = studentDatas.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  )


  




  return (
    <>
    <h1>Student Search</h1>

    <input type="text" placeholder="search student" value={search} onChange={handleChange}/>

      {filteredStudents.length > 0 ? (
        <ul>
          {filteredStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      ) : (
        <p>No Student Found</p>
      )}

      
    </>
  )
}

export default Student
