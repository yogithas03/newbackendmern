import { useState } from "react"
import InputContext from "../Context/InputContext"


const InputProvider = ({children}) => {

    const [data,setData]=useState({name:"",age:""})

    const[show,showData]=useState([])

    const handleShow =(e)=>{
        e.preventDefault()

        showData((prev)=>[...prev,data])   
        
        setData({name:"",age:""})
    }
    const handleChange =(e)=>{
        setData({...data,[e.target.name]:e.target.value})

        

    }




  return (
    <>
    <InputContext.Provider value={{data,setData,handleShow,handleChange,show,showData}}>
    
    {children}
    
    </InputContext.Provider>
      
    </>
  )
}

export default InputProvider
