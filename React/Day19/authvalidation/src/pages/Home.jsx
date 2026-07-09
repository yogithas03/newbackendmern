import { useContext } from "react"
import AuthContext from "../context/AuthContext"


const Home = () => {

    const {authData,logout}=useContext(AuthContext)
  return (
    <>
    <div>
        <h1>Welcome {authData.userName}</h1>
        <p>{authData.userEmail}</p>
    </div>

    <button onClick={logout}>Logout</button>
      
    </>
  )
}

export default Home
