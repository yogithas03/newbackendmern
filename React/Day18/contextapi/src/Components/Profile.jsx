import { useContext } from "react"
import ProfileContext from "../Context/ProfileContext"


const Profile = () => {

    const{data}=useContext(ProfileContext)


  return (
    <>
    <div className="bg-blue-800 text-white p-3 w-55 rounded-lg mx-20">

    <h1>Name: {data.name}</h1>
    <h1>Email: {data.email}</h1>
    <p>Role: {data.role}</p>
      
    </div>
    
    </>
  )
}

export default Profile
