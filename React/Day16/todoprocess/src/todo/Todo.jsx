import { IoMoon } from "react-icons/io5";
import { BsEmojiSunglassesFill } from "react-icons/bs";

import { useState } from "react"



const Todo = () => {

    const [theme,setTheme]=useState(false)
    const [data,setData]=useState({task:"",status:""})
    const [show,setShow]=useState([])
    const [edit,setEdit]=useState(null)

    const handleClick =()=>{
        setTheme(!theme)
    }

    const handleChange =(e)=>{

      setData({...data,[e.target.name]:e.target.value})
      
    }

    const handleAdd =(e)=>{
      e.preventDefault()


        if(data.task === "" || data.status ===""){
        alert("Add Task")
        return
      }



      setShow((prev)=>[...prev,data])

      setData({task:"",status:""})
    }

    const handleEdit=(ele,ind)=>{

    setData(ele)

    setEdit(ind)
   }

   const handleDelete =(userid)=>{

    const deleteData = show.filter((e,i)=>i !== userid)

    setShow(deleteData)

   }


  return (
    <>
    <div className={theme?"bg-black text-white h-screen":"bg-white text-black h-screen"}>
        <div className="flex gap-5 justify-center">
        <h1 className="text-center text-2xl">MY TASK</h1>
        <button onClick={handleClick}>{theme?<IoMoon className="text-xl m-2"/>:<BsEmojiSunglassesFill className="text-amber-200 text-2xl"/>}</button></div>

        <div className="flex  justify-center mt-30 gap-6">
          <form className="bg-cyan-600 p-4 rounded-lg flex gap-4">
          <label>Add Task</label>
          <input type="text" placeholder="Add Task" name="task" value={data.task} className={theme?"border-white w-60":"border-black w-60"} onChange={handleChange}/>
         
          <select name="status" value={data.status} onChange={handleChange} className={theme?"text-white bg-cyan-600":"text-black bg-cyan-600"}>
            <option value="">Status</option>
            <option value="yet to start">Yet to Start</option>
            <option value="inprogress">Inprogress</option>
            <option value="completed">Completed</option>
          </select>

           {edit === null?<button onClick={handleAdd} className="bg-green-800 text-white p-2 rounded-lg">Add</button>:<button className="bg-green-800 text-white p-2 rounded-lg">Update</button>}
          
        

          </form>
        </div>
{/* 
        {show.map((e,i)=>(
          <div key={i+1}>
            <p>Task:{e.task}</p>
            <p>Status:{e.status}</p>
            <button className="bg-green-800 text-white p-2 rounded-lg" onClick={()=>handleEdit(e,i)}>Edit</button>
            <button  className="bg-green-800 text-white p-2 rounded-lg" onClick={()=>handleDelete(i)}>Delete</button>
          </div>
        ))} */}



        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {show.map((e,i)=>(
               <tr key={i+1}>
                <td>{e.task}</td>
                <td>{e.status}</td>
                <td><button className="bg-green-800 text-white p-2 rounded-lg" onClick={()=>handleEdit(e,i)}>Edit</button></td>
                <td><button  className="bg-green-800 text-white p-2 rounded-lg" onClick={()=>handleDelete(i)}>Delete</button></td>
               </tr>
            ))}
          </tbody>
        </table>
        
    </div>
      
    </>
  )
}

export default Todo
