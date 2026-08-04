import { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {

  const [datas,setDatas]=useState({userName:'',userEmail:'',userAge:'',userLocation:''})
  const [getDatas,setGetDatas]=useState([])
  const[editid,setEditID] = useState(null)




  const gettingDatas = async()=>{

    try {
      
      const getdata = await axios.get("http://localhost:5000/api/crud/gettingdatas")

      console.log(getdata)
      setGetDatas(getDatas.data.data)

    } catch (error) {
       alert(error.response.data.data)
    }
  }

  useEffect(()=>{

    gettingDatas() 


 },[])


  

  const handleChange=(e)=>{
    setDatas({...datas,[e.target.name]:e.target.value})
  }

  const handleAdding = async(e)=>{

    e.preventDefault()

    try {

      const input = await axios.post("http://localhost:5000/api/crud/adddatas",datas)

     console.log(input)

      alert(input.data.msg)

      setDatas({userName:'',userEmail:'',userAge:'',userLocation:''})

    } catch (error) {
      
     console.log('error.data', error)
     alert(error.response.data.msg)

     gettingDatas()
    
  }

  }

  const EditData = (users)=>{
    setFromData({username:users.username,useremail:users.useremail,userage:users.userage})
    setEditID(users._id)
  }

  return (
    <>

    <form>
      <label>userName</label>
      <input type="text" onChange={handleChange} placeholder='enter your Name' name='userName' value={datas.userName}/><br/><br />
      <label>userEmail</label>
      <input type="text" onChange={handleChange} placeholder='enter your Email' name='userEmail' value={datas.userEmail}/><br/><br />
      <label>userAge</label>
      <input type="text" onChange={handleChange} placeholder='enter your Age' name='userAge' value={datas.userAge}/><br/><br />
      <label>userLocation</label>
      <input type="text" onChange={handleChange} placeholder='enter your Location' name='userLocation' value={datas.userLocation}/><br/><br />

       {editid?<button>Update</button>:<button onClick={handleAdding}>Adding</button>}

    </form>


  {getDatas.map((e)=>(
    <div key={e._id}>
    <h1>Name:{e.userName}</h1>
    <p>Email:{e.userEmail}</p>
    <p>Age:{e.userAge}</p>
    <p>Location:{e.userLocation}</p>
    <button onClick={()=>EditData(e)}>Edit</button>
    </div>
  ))}

      
    </>
  )
}

export default App
