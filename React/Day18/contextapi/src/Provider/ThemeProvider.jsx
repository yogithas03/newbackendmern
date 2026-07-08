import { useState } from "react"
import ThemeContext from "../Context/ThemeContext"


const ThemeProvider = ({children}) => {


  const [theme,setTheme]=useState(false)

  const handleClick =()=>{
    setTheme(!theme)
  }





  return (
    <>

    <ThemeContext.Provider value={{theme,handleClick}}>
      {children}
    </ThemeContext.Provider>
      
    </>
  )
}

export default ThemeProvider
