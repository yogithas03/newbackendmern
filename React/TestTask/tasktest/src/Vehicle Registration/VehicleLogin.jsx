import { useState } from "react"


const VehicleLogin = () => {

    const [data,setData]=useState()


  return (
    <>
    <label>UserName</label>
    <input type="text" name="customerName" placeholder="Enter your Name" value={customer.customerName} onChange={handleChange}/> <br/><br/>
    <label>Email</label>
    <input type="email" name="customerEmail" placeholder="Enter your Email" value={customer.customerEmail} onChange={handleChange}/> <br/><br/>
    <label>Password</label>
    <input type="password" name="password" placeholder="Enter Password" value={customer.password} onChange={handleChange}/> <br/><br/>      
    </>
  )
}

export default VehicleLogin
