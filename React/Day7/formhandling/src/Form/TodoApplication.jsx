import { useState } from "react"


const TodoApplication = () => {

    const [task,setTask]=useState("")
    const [todo,setTodo]=useState([])

    const showData = (e) =>{
        e.preventDefault()
        setTodo([...todo,task])
        setTask(" ")
    }
  return (
    <>
    
    <div className="text-center bg-blue-800 text-white">Todo Application</div>
    <form>
         <div className="text-center mt-6">
         <label htmlFor="task">Task </label>
         <input type="text" id="task" value={task} 
         onChange={(e)=>{setTask(e.target.value)}} className="border rounded-lg p-2 mt-5"/>
         <button className="bg-green-700 p-2 ml-3 rounded text-white" onClick={showData}>Add Task</button>
          
         <div>
            {todo.map((data,i)=>(
              <p key={i+1}>Task:{data}</p>
            ))}
         </div>
         </div>
    </form>
      
    </>
  )
}

export default TodoApplication
