import { useState } from "react"


const ArrayRender = () => {

  const [arr,setArr]=useState("")
  const [show,setShow]=useState([])


  const handleChange =(e)=>{
    setArr(e.target.value)
  }

  const handleClick =(e)=>{
    
    setShow((prev)=>[...prev,arr])
    
    setArr("")
    

  }

  const handleEdit =(id)=>{

    //const editFilter = show.find((e)=>e.id === show.id)

    //console.log(editFilter)

    setArr(id)
  }

  const handleUpdate =(id)=>{
    setArr(id)
  }

  const handleDelete =(id)=>{

    const deleteData =show.filter((_,i)=>i!== id)
    console.log(deleteData)
    setShow(deleteData)
  }





  return (
    <>

   

      <input type="text" onChange={handleChange} value={arr} name="text"/>
      <button onClick={handleClick}>Show</button>
   

    
      <ol>{show.map((e,i)=>(
      <li key={i+1}>
        
        <p>{e}<button onClick={()=>handleEdit(e)}>Edit</button>
         <button onClick={()=>handleUpdate(e)}>Update</button>
         <button onClick={()=>handleDelete(i)}>Delete</button>
        </p>
      
      </li>
    
      
      
    ))}
    </ol>
    
    

      
    </>
  )
}

export default ArrayRender
