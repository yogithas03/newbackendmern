import { useEffect, useState } from "react"

const UserDisplay = () => {

  const [dataStore,setDataStore]=useState([])
  
  const [uniqueData,setUniqueData]=useState([])
  
  const [gender,setGender]=useState("")

  const [search,setSearch]=useState("")   
  
  const [sortAge,setSortAge]=useState("")


    const fetchDate = async()=>{


      try{

        const userData = await fetch("https://dummyjson.com/users")

        const parseData = await userData.json()

        // console.log(parseData.users)

        setDataStore(parseData.users)

        const takegender = parseData.users.map((e)=>e.gender)

        const genders = [...new Set(takegender)]

        setUniqueData(genders)
        // console.log(genders)

      }catch(error){

        alert(error,"error")
      }
    }

    const handleChange = (e) =>{
      setGender(e.target.value)
      
    }

    const handleTake = (e) =>{
      setSearch(e.target.value)
    }

    const handleSort = (e) =>{
      setSortAge(e.target.value)
    }


    useEffect(()=>{

        fetchDate()

    },[])
    
   

    let storeData = [...dataStore]

    if(gender){
      storeData = storeData.filter((e)=>e.gender === gender)
    }

    if(search){
      storeData = storeData.filter((e) => e.firstName.toLowerCase().includes(search.toLowerCase()))
    }
    console.log(storeData)

    if(sortAge === 'asc'){
      storeData = storeData.sort((a,b)=>a.age-b.age)
    }

    if(sortAge === 'dec'){
      storeData = storeData.sort((a,b)=>b.age-a.age)
    }




  return (
    <>
      <div>
        <p className="bg-blue-800 text-white p-3 text-2xl text-center">users</p>
      </div>

      <div className="mt-5 flex gap-6">
      
      <input type="search" placeholder="search..." onChange={handleTake} className="border-2 p-2"/>
      
      <select onChange={handleSort}>
        <option value=''>Choose age</option>
        <option value='dec'>high-low</option>
        <option value='asc'>Low-high</option>
      </select>
     
      <select onChange={handleChange}>
        <option value="">Genders</option>
        {uniqueData.map((e,i)=>(
          <option value={e} key={i+1}>{e}</option>
        ))}
      </select>
      </div>
     



      <div className="bg-blue-800 text-amber-50 grid grid-cols-5 gap-6 p-5 mt-3">
      {storeData.map((e,i)=>(
        <div key={i+1} className="bg-white rounded-lg text-black p-3 text-center w-50transition-all duration-600 hover:shadow-2xl hover:shadow-amber-50">
          <p><span className="text-2xl text-blue-600">{e.firstName}</span></p>
          <p>{e.age}</p>
          <p>{e.company.name}</p>
          <p>{e.company.department}</p>
          <p>{e.gender}</p>
          <p>{e.eyeColor}</p>
          <p>{e.bloodGroup}</p>

        </div>
      ))}
       </div>


    </>
  )
}

export default UserDisplay
