import { useState } from "react"


const App = () => {

  const [formData,setFormData]=useState({course:"",file:""})

  const [saveData,setSaveData]=useState([])



  const handleChange = (e) =>{

    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleAdd = (e)=>{
    e.preventDefault()
    
    const userData = {id:Date.now(),...formData}

    setSaveData((prev)=>[...prev,userData])

    setFormData({course:"",file:""})


  }

  const handleEdit=(userId)=>{
    const editData = saveData
  }











  return (
    <>

    <form>
      <input type="text" placeholder="Course Name" name="course" value={formData.course} onChange={handleChange}/>
      <input type="text" placeholder="file Name" name="file" value={formData.file} onChange={handleChange}/>
      <button onClick={handleAdd}>add</button>
      <button>update</button>

      <table className="border-2 p-4 ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Course Name</th>
            <th>File Name</th>
          </tr>
        </thead>
        <tbody>
          {saveData.map((e,i)=>(
             <tr key={e.id}>
              <td>{i+1}</td>
            <td>{e.course}</td>
            <td>{e.file}</td>
            <td><button onClick={()=>handleEdit(e.id)}>Edit</button> || <button>Delete</button></td>
          </tr>
          ))}
          
        </tbody>
      </table>



    </form>
      
    </>
  )
}

export default App
