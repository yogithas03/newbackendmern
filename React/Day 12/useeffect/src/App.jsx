import { useEffect, useState } from "react"


const App = () => {

    const [load,setload]=useState()
    const [count,setCount]=useState(0)
    const [user,setUser]=useState([])
    const [timer,setTimer]=useState(0)
    const [time,setTime]=useState(new Date())

    const handleClick = () =>{
      setload("component")
      
    }

    useEffect(()=>{
              console.log("Component Loaded")
    },[])


    useEffect(()=>{
      console.log("Count Updated")
      console.log(`count is :${count}`)
     },[count])

  
    useEffect(()=>{
      const fetchData = async()=>{

      try{

        const takeData = await fetch("https://jsonplaceholder.typicode.com/users")

        console.log(takeData)

        const parsing = await takeData.json()

        console.log(parsing)

        setUser(parsing)



      }catch(error){
        console.log("Error",error)
      }
    
    }
    fetchData()
  },[])


  useEffect(()=>{
    const timer = setInterval(()=>{
      setTimer((prev)=>prev+1)
    },1000)

    return ()=>{
      clearInterval(timer)
    }
  },[])



useEffect(()=>{
  const timers = setInterval(()=>{
    setTime(new Date())
  },1000)

  return ()=>{
    clearInterval(timers)
  }
},[])







  return (
    <>

    <div>

      <h1>{load}</h1>
      <button onClick={handleClick}>click</button>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increase</button>

      <h1>User List</h1>
      {user.map((user)=>(
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}

      <h1>{timer}</h1>

      <h1>{time.toLocaleTimeString()}</h1>











      


        



    </div>
      
    </>
  )
}

export default App
