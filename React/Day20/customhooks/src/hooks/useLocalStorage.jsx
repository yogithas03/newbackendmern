import { useState } from "react"

const useLocalStorage = () => {

    const [data,setData]=useState({name:"",email:"",password:""})


    const handleChange =(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    


    const handleSubmit =(e)=>{
        e.preventDefault()

    const localStore = JSON.parse(localStorage.getItem("dataStore")) || []

    localStore.push(data)

    localStorage.setItem("dataStore",JSON.stringify(localStore))

    alert('Data Stored in LOCALSTORAGE')

    setData({name:"",email:"",password:""})



    }

    
  return {data,handleChange,handleSubmit}
}

export default useLocalStorage
