// import { useState } from "react"

import { useState } from "react"


// const ArrayofObject = () => {


//     const [arrayofObject,setArrayOfObject]=useState([{name:"yogitha",age:24},{course:"MERN",years:2022},{name}])


//     const handleClick= (id)=>{

//         const age = arrayofObject.map((e,i)=>i=== id?{...ArrayofObject,age:40}:arrayofObject)
//         console.log(age)

        
//     }
//   return (
//     <>

//     <div>
//         {arrayofObject.map((e,i)=>(
//             <div key={i+1}>
//             <p>{e.name}</p>
//             <p>{e.age}</p>
//             <p>{e.course}</p>
//             <p>{e.years}</p>
//             <button onClick={()=>handleClick(i)}>Edit Age</button>
//             </div>
//         ))}
//     </div>
    


      
//     </>
//   )
// }

// export default ArrayofObject





const ArrayofObject = () => {

    
    const [show,setShow]=useState(["hello","good"])

    const handleClick = ()=>{
        setShow((pre)=>[...pre,["Application","Computer","Keyboard","Mouse"]])
    }
  return (
    <>


    
     
    <button onClick={handleClick}>Show Data</button>
    {show.map((e,i)=>(
        <div key={i+1}>
            <p>{e}</p>
        </div>
     ))}


      
    </>
  )
}

export default ArrayofObject
