import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {
  

    const navigate = useNavigate()

    const [datas,setDatas]=useState({userName:"",userEmail:"",userPassword:""})
    const [saveData,setSaveData]=useState([])

  


    const handleChange = (e)=>{

        setDatas({...datas,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{

        e.preventDefault()


       

        const storeData = JSON.parse(localStorage.getItem("userdatas"))||[]

       

        const checkEmail = storeData.find((e)=>e.userEmail===datas.userEmail)
        if(checkEmail){
            alert("Please Change userEmail")
            return
        }

         storeData.push(datas)

         localStorage.setItem("userdatas",JSON.stringify(storeData))

        alert("Data Saved")
        


        setDatas({userName:"",userEmail:"",userPassword:""})
        navigate("/login")
    }




  return (
    <>

    <form onSubmit={handleSubmit}>
        <input type="text" name="userName" value={datas.userName} onChange={handleChange} placeholder="Enter the User Name"/><br />
        <input type="email" name="userEmail" value={datas.userEmail} onChange={handleChange}placeholder="Enter the User Email"/><br />
        <input type="password" name="userPassword" value={datas.userPassword} onChange={handleChange} placeholder="Enter the User Password"/><br />
        <input type="submit" value={"Register"}/>
    </form>
      
    </>
  )
}

export default Register
