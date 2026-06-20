import { useState } from "react";


const FormSecond = () => {

    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")

    const [disname,setDisName]=useState("")
    const [dispass,setDisPass]=useState("")

    const [text,setText]=useState("")

    const [search,setSearch]=useState("")


    const showNaPa = (e)=>{
        e.preventDefault();
        setDisName(username)
        setDisPass(password)
        
    }
  return (
    <>
      <form className="text-center">
      {/* Login Form */}
        <label>UserName </label>
        <input type="text" id="text" value={username} onChange={(e)=>{setUserName(e.target.value)}} className="border rounded-lg p-2 mt-3"/> <br></br>
        <label>Password </label>
        <input type="password" id="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="border rounded-lg p-2 mt-3"/>
        <button className="bg-green-700 p-2 ml-3 rounded text-white" onClick={showNaPa}>Click</button>
        <div><p>UserName: {disname}</p>
            <p>Password: {dispass}</p> 
        </div>

      {/* Feedback Form */}
      <div>
        <label htmlFor="feedback">FeedBack</label>
      <textarea 
      id="feedback"
      rows="4" cols="50 " 
      className="border" 
      value={text} 
      onChange={(e)=>setText(e.target.value)}></textarea>
      <p>Feedback:{text}</p>
      </div>

      {/* search box */}
      <label htmlFor="search">Search </label>
      <input type="tel" id="course" value={search} onChange={(e)=>{setSearch(e.target.value)}} className="border rounded-lg p-2"/>
      <p>Search Box:{search}</p>

     </form>
    </>
  )
}

export default FormSecond
