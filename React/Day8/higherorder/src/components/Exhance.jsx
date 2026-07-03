import { useState } from "react"
import withText from "../hoc/withText"
import Text from "./Text"

const EnhanceText = withText(Text)


const Exhance = () => {

    const [message,setMessage]=useState("")


const mernStack=()=>{
   setMessage( "Mern expression is MongoDB,Express.js,React.js,Node.js")
}
const javaScript=()=>{
    setMessage("JS is high-level interpreted single thread programming language")
}

  return (
    <>
    <div className="flex gap-10 flex-col">
    <EnhanceText course="React" onclick={mernStack}/>
    <Text course="Js" onclick={javaScript}/>
    </div> 

    <p className="text-center mt-5 text-lg font-semibold">{message}</p>
    </>
  )
}

export default Exhance
