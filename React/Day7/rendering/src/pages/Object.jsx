import { useState } from "react"
import vikimg from "../assets/vikram.jpg"


const Object = () => {

  const [obj,setObj]=useState({
  image:vikimg,
  title: "Vikram",
  year: 2022,
  rating: 8.8,
  details:{hero: "Kamal Haasan"}})

  const buttonClick = () =>{
    setObj({...obj,rating:10.13})
  }


  return (
    <>
    <div className="bg-black h-screen text-white text-center">

      <div>
        <p>Object</p>
        <p>Movie Details</p>
      </div>
      <div className="w-40 mx-auto mt-4">
        <img src={obj.image} alt=" " className="w-full"/>
      </div>
      <div>
        <h1>{obj.title}</h1>
        <h1>{obj.year}</h1>
        <h1>{obj.rating}</h1>
        <h1>{obj.details.hero}</h1>
      </div>
      <div className="bg-white rounded-lg mx-145 text-black">
        <button onClick={buttonClick}>Click</button>
      </div>
    
        

    </div>
      
    </>
  )
}

export default Object
