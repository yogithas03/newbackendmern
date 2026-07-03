import { useState } from "react"


const UserProfileForm = () => {

    const [details,setDetails]=useState({username:"",useremail:"",usermobile:"",useradd:""})
    const [collect,setCollect]=useState([])

    const handleChange = (e) => {
        const {name,value}=e.target
        setDetails({...details,[name]:value})
    }

    const handleClick = (e)=>{
        e.preventDefault()
       
        const checkEmail = collect.find((e)=>e.useremail===details.useremail)
        if(checkEmail){
            alert("change your Email Adresss")
            return
        }


        setCollect((prev)=>[...prev,details])
        setDetails({username:"",useremail:"",usermobile:"",useradd:""})

    }
  return (
    <>
     <form onSubmit={handleClick}>

        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">UserName</label>
            <input type="text" name="username" value={details.username} onChange={handleChange} placeholder="enter the UserName"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">UserEmail</label>
            <input type="email" name="useremail" value={details.useremail} onChange={handleChange} placeholder="enter the Email ID"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">UserMobile</label>
            <input type="number" name="usermobile" value={details.usermobile} onChange={handleChange} placeholder="enter the Mobile Number"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">UserAddress</label>
            <input type="address" name="useradd" value={details.useradd} onChange={handleChange} placeholder="enter the Address"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex justify-center mt-3 ml-10">
            <button type="submit" className="bg-blue-700 text-white rounded-lg w-25 p-3">Submit</button>
        </div>

</form>

<div>
    {collect.map((e,i)=>(
        <div key={i+1} className="bg-blue-800 text-amber-50 rounded-lg p-4 shadow-2xl w-60 mt-3 ml-3">
            <p>{e.username}</p>
            <p>{e.useremail}</p>
            <p>{e.usermobile}</p>
            <p>{e.useradd}</p>
        </div>
    ))}
</div>
      
    </>
  )
}

export default UserProfileForm
