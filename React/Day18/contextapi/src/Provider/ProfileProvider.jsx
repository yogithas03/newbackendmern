import { useState } from "react"
import ProfileContext from "../Context/ProfileContext"


const ProfileProvider = ({children}) => {


    const [data]=useState({
  name: "Sudhan",
  email: "sudhan@gmail.com",
  role: "Trainer"
})

  return (
    <>

    <ProfileContext.Provider value={{data}}>
        {children}
    </ProfileContext.Provider>
      
    </>
  )
}

export default ProfileProvider
