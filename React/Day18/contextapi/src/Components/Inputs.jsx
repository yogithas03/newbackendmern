import {  useContext } from "react"
import InputContext from "../Context/InputContext"


const Inputs = () => {

    const{data,setData,handleShow,handleChange,show,showData}=useContext(InputContext)

  return (
    <>

    <input type="text" value={data.name} name="name" onChange={handleChange} placeholder="enter the name"/>
    <br />
    <input type="number" value={data.age} name="age" onChange={handleChange} placeholder="enter the age"/>
    <br />
    <button onClick={handleShow}>click</button>


    <div>
        {show.map((e,i)=>(
            <div key={i}>
                <p>{e.name}</p>
                <p>{e.age}</p>
            </div>
        ))}
    </div>

      
    </>
  )
}

export default Inputs
