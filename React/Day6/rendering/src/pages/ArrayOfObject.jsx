import { useState } from "react"


const ArrayOfObject = () => {

  const[arrobj,setArrObj]=useState([
  {
    id: 1,
    name: "Shruthi",
    course: "MERN Stack",
    age: 22,
    city: "Karur"
  },
  {
    id: 2,
    name: "Priya",
    course: "Python Full Stack",
    age: 23,
    city: "Chennai"
  },
  {
    id: 3,
    name: "Kaviya",
    course: "Java Full Stack",
    age: 24,
    city: "Coimbatore"
  },
  {
    id: 4,
    name: "Divya",
    course: "Data Science",
    age: 25,
    city: "Madurai"
  },
  {
    id: 5,
    name: "Anu",
    course: "UI/UX Design",
    age: 22,
    city: "Salem"
  },
  {
    id: 6,
    name: "Harini",
    course: "MERN Stack",
    age: 23,
    city: "Trichy"
  },
  {
    id: 7,
    name: "Nisha",
    course: "Cyber Security",
    age: 24,
    city: "Erode"
  },
  {
    id: 8,
    name: "Keerthana",
    course: "Cloud Computing",
    age: 25,
    city: "Namakkal"
  }
])

const onclickBut = () =>{
  let edit = [...arrobj];
  edit[0]={
    ...edit[0],
    name:"uhhh!!!"
  }
  setArrObj(edit)
}
  return (
    <>
   <div className="bg-purple-950 text-amber-50">
       <p>Aray of Object</p>
         
         <table cclassName="border border-white mx-auto mt-5">
          <thead>
            <tr>
            <th className="border p-2">Id</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Course</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">City</th>
            <th className="border p-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {arrobj.map((e,i)=>(
              <tr key={i+1}>
                <td className="border p-2">{e.id}</td>
                <td className="border p-2">{e.name}</td>
                <td className="border p-2">{e.course}</td>
                <td className="border p-2">{e.age}</td>
                <td className="border p-2">{e.city}</td>
                <td className="border p-2"><button onClick={onclickBut}>Edit</button></td>
              </tr>
            ))}
            
          </tbody>
         </table>
  </div>
      
    </>
  )
}

export default ArrayOfObject
