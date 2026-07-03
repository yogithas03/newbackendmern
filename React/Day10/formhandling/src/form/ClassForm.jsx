import { useState } from "react"


const ClassForm = () => {
    
  const[datas,setDatas]=useState({username:"",rollnum:"",age:"",usercity:""})
  const[show,setShow]=useState([])


  const handleChange = (e) => {

     setDatas({...datas,[e.target.name]:e.target.value})
  }
  const handleClick = (e) =>{
       e.preventDefault()
   
       const valueEmail = show.find((e)=>e.rollnum===datas.rollnum)
       if(valueEmail){
        alert("roll number already is there")
        return
       }
      
       
       setShow((prev)=>[...prev,datas])
      
       

       setDatas({username:"",rollnum:"",age:"",usercity:""})
    }
 
  return (
    <>
     <form>
      <input type="text" name="username" value={datas.username} onChange={handleChange} placeholder="enter the name"/>
      <input type="text" name="rollnum" value={datas.rollnum} onChange={handleChange} placeholder="enter the roll number"/>
      <input type="number" name="age" value={datas.age} onChange={handleChange} placeholder="enter the age"/>
      <input type="text" name="usercity" value={datas.usercity} onChange={handleChange} placeholder="enter the city"/>
      <button onClick={handleClick}>Submit</button>
    </form>

    <div>
      {show.map((e,i)=>(
       <div key={i+1}>
        <p>{e.username}</p>
        <p>{e.rollnum}</p>
        <p>{e.age}</p>
        <p>{e.usercity}</p>
       </div>
      ))}
    </div>
      
    </>
  )
}

export default ClassForm
