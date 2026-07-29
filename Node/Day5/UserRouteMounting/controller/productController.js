export const getProduct =async(req,res)=>{
    try {
        res.send("getProducts")
    } catch (error) {
        console.log("error",error)
    }
}

export const postProduct =async(req,res)=>{
    try {
        res.send("postProducts")
    } catch (error) {
        console.log("error",error)
    }
}

export const delectProduct =async(req,res)=>{
    try {
        res.send("deleteProducts")
    } catch (error) {
        console.log("error",error)
    }
}

