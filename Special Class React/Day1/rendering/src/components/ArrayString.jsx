import { useState } from "react"


const ArrayString = () => {

    const [name,setName]=useState("React")

    const [courses,setCourses]=useState(["HTML","CSS"])

    const handleClick = () =>{
        if(name === "React"){
            setName("Angular")
        }
       
    }
    const handleClickChange =()=>{
        if(name === "Angular"){
             setName("Vue")
        }
        
    }

    const handleJs =()=>{
        setCourses((pre)=>[...pre,"javaScript"])
    }

    const handleReact =()=>{
        setCourses((pre)=>[...pre,"React"])
    }

    const handleDelete =()=>{
        setCourses((pre)=>pre.filter((e)=>e !== "CSS"))
    }

  return (
    <>

    <p className="text-2xl mx-15">{name}</p>
    <div className="flex gap-4 m-5">
    <button onClick={handleClick} className="bg-green-900 text-white p-3 rounded-lg ">change-1</button>
    <button onClick={handleClickChange} className="bg-green-900 text-white p-3 rounded-lg ">change-2</button>
    </div>

    <div className="flex gap-4">

        <button onClick={handleJs} className="bg-green-900 text-white p-3 rounded-lg">AddJS</button>
        <button onClick={handleReact} className="bg-green-900 text-white p-3 rounded-lg">AddReact</button>
        <button onClick={handleDelete} className="bg-green-900 text-white p-3 rounded-lg">RemoveCSS</button>
        
    </div>
      {courses.map((e,i)=>(
            <div key={i}>
                <p>{e}</p>
            </div>
        ))}
    </>
  )
}

export default ArrayString
