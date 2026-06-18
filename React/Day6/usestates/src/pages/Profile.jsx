import { useState } from "react";



const Profile = () => {

     const [showProfile, setShowProfile] = useState(false);
     const showPro = () =>{
        setShowProfile(true)
     }

  return (
    <>
    <div>
         <p className="text-blue-700 text-center">Profile Visibility</p>
         {showProfile && <div className="mt-4 border p-4 rounded">
            <h2>Name: Shruthi</h2>
            <h2>Course: Mern Stack</h2>
            <h2>Location: Karur</h2>
            </div>}
        <div className="text-center">
            <button className="bg-blue-600 text-white p-3 mt-4 rounded-lg w-45" onClick={showPro}>Change Profile</button>
        </div>

    </div>
      
    </>
  )
}

export default Profile
