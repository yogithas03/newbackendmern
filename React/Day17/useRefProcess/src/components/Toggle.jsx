
import { useRef } from 'react'

const Toggle = () => {



    const showToggle=useRef()

    const handleClick = ()=>{

        if(showToggle.current.innerHTML === "ON"){
            showToggle.current.innerHTML="OFF"
        }else{
            showToggle.current.innerHTML="ON"
        }
    }


return (
    <>

    <div>
        <button onClick={handleClick} className='bg-green-800 text-white p-3 rounded-lg'>Toggle</button>
        <h2 ref={showToggle}>OFF</h2>
    </div>
      
    </>
  )
}

export default Toggle
