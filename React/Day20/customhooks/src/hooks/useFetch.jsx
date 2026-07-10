import { useEffect, useState } from "react"


const useFetch = (url) => {


    const [show,setShow]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")
    const [search,setSearch]=useState()


    const fetchData = async()=>{

        try{

        const getData = await fetch(url)

        const parseData = await getData.json()

        setShow(parseData.carts)

        }catch(error){

            setError(error.message)

        }finally{
            setLoading(false)
        }
     }
      

     useEffect(()=>{
           fetchData()
        },[url])


   
  return {show,loading,error}
}

export default useFetch
