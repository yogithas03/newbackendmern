import { useState } from "react"
import { useNavigate } from "react-router-dom"

const VehicleRegistration = () => {

    const navigate =useNavigate()

    const [customer,setCustomer]=useState({customerName:"",customerAge:"",customerGender:"",customerEmail:"",vehicleType:"",vehileBrand:"",password:""})

    const [storeCustomer,setStoreCustomer]=useState([])
    
    const handleChange=(e)=>{

        setCustomer({...customer,[e.target.name]:e.target.value})

    }

    const handleSubmit =(e)=>{

        e.preventDefault()



        const getData = JSON.parse(localStorage.getItem("customerData"))||[]

        const checkData = getData.find((data)=>data.customerEmail === customer.customerEmail && data.password === customer.password)
  
        console.log(checkData)

        if(checkData){
            alert("Email or Password already exists!!")
            return
        }

        getData.push(customer)

        localStorage.setItem("customerData",JSON.stringify(getData))

        setStoreCustomer(getData)

        alert("Data Stored!!!")

        setCustomer({customerName:"",customerAge:"",customerGender:"",customerEmail:"",vehicleType:"",vehileBrand:"",password:""})
        
        navigate("/login")

    }



  return (
    <>

    <form onSubmit={handleSubmit}>
        <input type="text" name="customerName" placeholder="Enter your Name" value={customer.customerName} onChange={handleChange}/> <br/><br/>
        <input type="number" name="customerAge" placeholder="Enter your Age" value={customer.customerAge} onChange={handleChange}/> <br/><br/>
        <input type="text" name="customerGender" placeholder="Enter your Gender" value={customer.customerGender} onChange={handleChange}/> <br/><br/>
        <input type="email" name="customerEmail" placeholder="Enter your Email" value={customer.customerEmail} onChange={handleChange}/> <br/><br/>
        <input type="text" name="vehicleType" placeholder="Enter Vehicle Type" value={customer.vehicleType} onChange={handleChange}/> <br/><br/>
        <input type="text" name="vehileBrand" placeholder="Enter Vehilce Brand" value={customer.vehileBrand} onChange={handleChange}/> <br/><br/>
        <input type="password" name="password" placeholder="Enter Password" value={customer.password} onChange={handleChange}/> <br/><br/>
        <input type="submit" value={"register"}/>
    </form>
      
    </>
  )
}

export default VehicleRegistration
