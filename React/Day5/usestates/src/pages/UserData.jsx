import { useState } from "react"


const UserData = () => {

    const [user,setUser]=useState(null)
    
    const changeUser =()=>{
     
    const data = user === null?"name:'Sudhan' city:'Chennai'":null;

        setUser(data)
    }
  return (
    <>
    <div className="text-center">
        <p className="text-blue-700 text-center">User Data Loading</p>
        {user??<p>Load User</p>}
        <div className="text-center">
             <button className="bg-blue-600 text-white p-3 mt-4 rounded-lg w-45" onClick={changeUser}>Change User</button>
        </div>
       
    </div>

      
    </>
  )
}

export default UserData
