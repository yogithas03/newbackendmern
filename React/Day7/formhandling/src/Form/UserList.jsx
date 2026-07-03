import { useState } from "react"


const UserList = () => {


    const [username,setUserName]=useState("")
    const [showuser,setShowUser]=useState([])

    const showData=(e)=>{
        e.preventDefault()
        setShowUser([...showuser,username]);
        setUserName("");

    }


  return (
    <>
    <div className="text-center bg-blue-800 text-white">
        <p>User List Creator</p>
    </div>
    <form>
         <div className="text-center mt-6">
         <label htmlFor="username">User Name </label>
         <input type="text" id="username" value={username} 
         onChange={(e)=>{setUserName(e.target.value)}} className="border rounded-lg p-2 mt-5"/>
         <button className="bg-green-700 p-2 ml-3 rounded text-white" onClick={showData}>Click</button>
          
         <div>
            {showuser.map((data,i)=>(
              <p key={i+1}>{data}</p>
            ))}
         </div>
         </div>
    </form>
      
    </>
  )
}

export default UserList
