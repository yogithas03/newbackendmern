export const getrequest = async(req,res)=>{

    try {
        console.log(req)
    } catch (error) {
        console.log(error)
    }
}

export const postrequest = async(req,res)=>{
    console.log(req.body)
}

export const getparams = async(req,res)=>{
    console.log(req.params)
}

export const getheader = async(req,res)=>{
    console.log(req.headers)
}

export const getquery =async(req,res)=>{
    console.log(req.query)
}