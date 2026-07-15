import { useEffect, useMemo, useState } from "react"



const App = () => {

  const [store,setStore]=useState([])
  const [search,setSearch]=useState('')
  const [theme,setTheme]=useState(false)




     const fetchData = async()=>{

    try{

      const takeData =await fetch("https://dummyjson.com/quotes")

      // console.log(takeData)

      const parsingData =await takeData.json()

      setStore(parsingData.quotes)

      // console.log(parsingData)

    }catch(err){

    console.log('error',err)

    }
  }

  useEffect(()=>{
    fetchData()
  },[])
 


  const handleChange=(e)=>{

    setSearch(e.target.value)
    console.log("search runs")

  }

  const handleTheme =()=>{
    setTheme(!theme)
    console.log("Theme Running")
  }

  const filterFun =(storeData,search)=>{

    return storeData.filter((e)=>e.author.toLowerCase().includes(search.toLowerCase()))

  }

   const searchFilter = useMemo(()=>{

    return filterFun(store,search)
     
  },[store,search])



 
 
  
  return (
   <>

   <div className={theme?"dark":"light"}>
    <input type="search" placeholder="search..." value={search} onChange={handleChange}/>
    <button onClick={handleTheme}>changeTheme</button>
   </div>

   {searchFilter.map((e,i)=>(
    <div key={i}>
      <p>{e.id}</p>
      <p>{e.quote}</p>
      <p>{e.author}</p>
    </div>
   ))}
 
   </>
  )
}

export default App