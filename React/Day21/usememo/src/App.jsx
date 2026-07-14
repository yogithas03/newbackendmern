// import { useMemo, useState } from "react"

import ProductSearch from "./components/ProductSearch"
import ShoppingCart from "./components/ShoppingCart"


const App = () => {

//   const[search,setSearch]=useState('')

//   const[theme,setTheme]=useState(false)

//   const[sortAge,setSortAge]=useState('')


//   const searchFilter =(se,dat,age)=>{

//     console.log("filter")

//     let result =dat.filter((e)=>e.employeeName.toLowerCase().includes(se.toLowerCase()))

//     if(age === "high to low"){
//       result =[...result].sort((a,b)=>b.employeeAge-a.employeeAge)
//     }

//     if(age === "low to high"){
//       result =[...result].sort((a,b)=>a.employeeAge-b.employeeAge)
//     }

   
    
//     return result
//   }

//   const datas =[{empId:1062,employeeName:"Kanitaa",employeeAge:26,employeeCity:"Karur",roll:"QA"},
//     {empId:1063,employeeName:"Punitha",employeeAge:24,employeeCity:"Namakkal",roll:"Analayst"},
//     {empId:1064,employeeName:"Soundararajan",employeeAge:26,employeeCity:"Karur",roll:"Manager"},
//     {empId:1065,employeeName:"Yuvaraj",employeeAge:28,employeeCity:"Namakkal",roll:"Analayst"},
//     {empId:1066,employeeName:"Pravisha",employeeAge:26,employeeCity:"Chennai",roll:"Senoir Analayst"},
//     {empId:1067,employeeName:"Kumar",employeeAge:30,employeeCity:"Karur",roll:"TL"}]


//   const handleChange =(e)=>{

//     setSearch(e.target.value)
//   }

//   const changeTheme =()=>{
//     console.log("theme")
//     setTheme(!theme)
//   }



//  const filter = useMemo(()=>{
//            return searchFilter(search,datas,sortAge)
//           },[search,sortAge])    
          

//   const handleSort =(e)=>{

//    setSortAge(e.target.value)

//   }

 
  
 
  return (
    <>


    <ProductSearch/>
    <br />
    <ShoppingCart/>

    {/* <div  className={theme?"bg-white text-black":"bg-black text-white"}> */}

    {/* <button onClick={changeTheme} className="bg-green-700 text-white p-2 rounded-lg m-4">{theme?"Dark":"Light"}</button><br /> */}
     
   
{/* 
    <input type="text" placeholder="search..." onChange={handleChange}/>
    <select  onChange={handleSort}>
      <option value={""}>All Age</option>
      <option value={"high to low"}>High to Low</option>
      <option value={"low to high"}>Low to High</option>
    </select>

    {filter.map((e)=>( 
      <div key={e.empId}>
        <p>{e.employeeName}</p>
        <p>{e.employeeAge}</p>
        <p>{e.employeeCity}</p>
        <p>{e.roll}</p>
      </div>
    ))} */}

    {/* </div> */}
      
    </>
  )
}

export default App
