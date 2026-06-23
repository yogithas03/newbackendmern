import { useState } from "react"


const User = () => {

  const users = [ { id: 1, name: "Ravi" }, { id: 2, name: "Priya" }, { id: 3, name: "Arun" } ]

    const [userdata,setUserData]=useState()
    const searchUser = (e)=>{
      setUserData(e.target.value)
    }

    const filterData = users.filter((users)=>users.id===userdata)
  return (
    <>

    <form>
      <label>Search Details</label>
      <input type="text" placeholder="search User..." value={userdata} onChange={searchUser}/>
    </form>

    {filterData.map((e,i)=>(
      <p key={i+1}>{e}</p>
    ))}
     <p></p>


      
    </>
  )
}

export default User
