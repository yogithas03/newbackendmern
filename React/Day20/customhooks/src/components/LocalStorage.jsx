import useLocalStorage from "../hooks/useLocalStorage"


const LocalStorage = () => {

    const {data,handleChange,handleSubmit}=useLocalStorage()
  return (
    <>

    <form onSubmit={handleSubmit}>
        <label>userName</label>
        <input type="text" placeholder="enter the Username" name="name" value={data.name} onChange={handleChange}/><br/>
         <label>userEmail</label>
        <input type="email" placeholder="enter the Email" name="email" value={data.email} onChange={handleChange}/><br/>
         <label>userPassword</label>
        <input type="password" placeholder="enter the Password" name="password" value={data.password} onChange={handleChange}/><br/>
        <input type="submit" value="register"/>
    </form>
      
    </>
  )
}

export default LocalStorage
