// import { useReducer } from "react"

import { useReducer, useState } from "react"


// const App = () => {

//   const initvalue =0

//   const reducer =(state,action)=>{


//     switch(action.type){

//       case "INC":
//          return state+1

//       case "DEC":
//          return state-1

//       case "ReSet":
//          return 0

//       default:
//           return initvalue

//     }

//   }

//   const [state,dispatch]=useReducer(reducer,initvalue)



//   return (
//     <>

//     <p>{state}</p>
//     <button onClick={()=>dispatch({type:"INC"})}>Increment</button>
//     <button onClick={()=>dispatch({type:"DEC"})}>Decrement</button>
//     <button onClick={()=>dispatch({type:"ReSet"})}>Reset</button>

      
//     </>
//   )
// }

// export default App




const App = () => {


  const data =[]

const reducer =(state,action)=>{

  switch(action.type){
    case "ADD":
      return [...state,action.payLoad]

    case "DELECT":
      return state.filter((e)=>e.userId!==action.payLoad.userId)

    case "UPDATE":
      return state.map((e)=>e.userId === action.payLoad.userId?action.payLoad.userName:state)


      default:
      return []
  }



}




const[state,dispatch]=useReducer(reducer,data)


const[userName,setUserName]=useState('')
const [edit,setEdit]=useState(null)


  const handleChange =(e)=>{

    setUserName(e.target.value)

  }


  const handleAdd =()=>{
    const newDatas ={
      userId:Date.now(),
      userName:userName
    }

    dispatch({
        type:"ADD",
        payLoad:newDatas
    })

    
   
  }

  const handleEdit =(user)=>{

    setUserName(user.userName)

    setEdit(user.userId)


  }

  const handleDelete = (userId)=>{

    dispatch({
      type:"DELECT",
      payLoad:{userId:userId}
    })

  }

  const handleUpdate=(userId)=>{

    dispatch({
      type:"UPDATE",
      payLoad:{userId:userId,}

    })
  }
  return (
    <>

    <input type="text" placeholder="add data" value={userName} onChange={handleChange}/>
    {edit===null?<button onClick={handleAdd}>ADD</button>:<button onClick={handleUpdate}>Update</button>}


    {state.map((e,i)=>(
      <div key={i}>
        <p key={e.userId}>{e.userName}</p>
        <button onClick={()=>handleEdit(e)}>Edit</button> 
        <button onClick={()=>handleDelete(e.userId)}>Delete</button>
       
      </div>
    ))}
      
    </>
  )
}

export default App

