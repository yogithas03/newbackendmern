import { useState } from "react"


const useSearch = (data) => {



    const [search,setSearch]=useState("")

    const filterData = data.filter((student)=>student.name.toLowerCase().includes(search.toLowerCase()))

    const handleChange =(e)=>{
       setSearch(e.target.value)
    }

    return {search,setSearch,filterData,handleChange}

}

export default useSearch
