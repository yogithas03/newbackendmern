
export const getUsers = async(req,res)=>{
    try {
        console.log("GET request")
        res.send("All Users")
        
    } catch (error) {
        console.log("error",error)
        
    }
}

export const createUser =async(req,res)=>{
    try {
         console.log("POST request")
        res.send("User Created")
    } catch (error) {
        
    }
}