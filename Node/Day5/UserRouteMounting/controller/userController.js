
export const getUsers = async(req,res)=>{
    try {
        console.log("GET request received")
        res.send("All Users")
        
    } catch (error) {
        console.log("error",error)
        
    }
}

export const createUser =async(req,res)=>{
    try {
         console.log("POST request received")
        res.send("User Created")
    } catch (error) {
        
    }
}