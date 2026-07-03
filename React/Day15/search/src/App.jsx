// import { useEffect, useState } from "react"

import UserDisplay from "./components/UserDisplay"


const App = () => {

  // const[data,setData]=useState([])
  // const[changeDatas,setChangeDatas]=useState([])
  // const[filterData,setFilterData]=useState("")

  // const[search,setSearch]=useState("")
  // const[sortData,setSortData]=useState("")
  


  // const dataProduct = async()=>{

  //   try{

  //   const giveData = await fetch("https://dummyjson.com/products")

  //   const changeData = await giveData.json()

  //   setChangeDatas(changeData.products)

  //   const takeData = changeData.products.map((e)=>e.category)

  //   const uniData = [...new Set(takeData)]

  //   setData(uniData)
    
  //   console.log(uniData)

  //   }catch(err){

  //     console.log("error",err)

  //   }


  // }

  // const handleChange = (e)=>{

  //   setFilterData(e.target.value)

  // }

  // const handleType = (e)=>{
  //   setSearch(e.target.value)
  // }


 

  

  // useEffect(()=>{
  //   dataProduct()
  // },[])



  // let storeData = [...changeDatas]

  // if(filterData){
  //   storeData = storeData.filter((e)=>e.category === filterData)
  // }

  // if(search){
  //   storeData = storeData.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))
  // }

  


  return (
    <>


    <UserDisplay/>
     {/* <div>

     <input type="search" value={search} name="search" onChange={handleType} className="border-2"/>
      



    <select onChange={handleChange}>
    <option value={""}>select All</option>
    {data.map((e,i)=>(
      <option value={e} key={i+1}>{e}</option>

    ))}
     </select>
    

    {storeData.map((e,i)=>(
      <div key={i} id={i+1}>
        <p>{e.category}</p>
        <p>{e.title}</p>
        <p>{e.price}</p>
        </div>

    ))}


    <select>
      <option>Show All</option>

    </select>

   </div> */}


   
    
      
    </>
  )
}

export default App
