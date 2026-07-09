import { createContext, useEffect, useState } from "react"


const AuthContext = createContext()
export default AuthContext


export const ProviderContext =({children})=>{
   

    const [authData,setAuthData]=useState(null)

    useEffect(()=>{

        const currentUser = JSON.parse(localStorage.getItem("currentUser"))

        if(currentUser){
            setAuthData(currentUser)

        }


        
    },[])

      const login = (userlogin) => {
  localStorage.setItem("currentUser", JSON.stringify(userlogin));
  setAuthData(userlogin);
};

      const logout = () => {
        localStorage.removeItem("currentUser");
        setAuthData(null);
    };

    return(
        <>
        <AuthContext.Provider value={{authData,login,logout}}>
            {children}
        </AuthContext.Provider>
        
        
        </>
    )


}
