import { useState } from "react"


const App = () => {

  const [store,setStore]=useState({task:"",process:""})
  const [show,setShow]=useState([])
  const [edit,setEdit]=useState(null)

  const handleChange =(e)=>{
    setStore({...store,[e.target.name]:e.target.value})
  }
 
  const handleClick =(e)=>{
    e.preventDefault()
    setShow((pre)=>[...pre,store])
    setStore({task:"",process:""})
  }

  const handleEdit=(tasklist,id)=>{

    setStore(tasklist)

    setEdit(id)
  }

  const handleDelete=(id)=>{

    const deleteData = store.filter((e,i)=>id !== id)

    setShow(deleteData)
  }

  return (
    <>
    <label>Task</label>
    <input type="text" name="task" onChange={handleChange} value={store.task}/>
    <select name="process" onChange={handleChange} value={store.process}>
      <option value={"yet to start"}>Yet to Start</option>
      <option value={"inprogress"}>InProgress</option>
      <option value={"completed"}>Completed</option>
    </select>
    {edit===null?<button onClick={handleClick}>ADD TASK</button>:<button>Update</button>}



   
      {show.map((e,i)=>(
        <div key={i+1}>
          <p>Task:{e.task}</p>
          <p>Process:{e.process}</p>
          <button onClick={()=>handleEdit(e,i)}>Edit</button>
          <button onClick={()=>handleDelete(i)}>Delete</button>
        </div>
      ))}
  



      
    </>
  )
}

export default App
