const studentDetails =[{id: 101,
  name: "Sudhan",
  course: "MERN Stack"}]


export const getmessage = async(req,res)=>{

    res.send("welcome to express.js")
}

export const getStudent = async(req,res)=>{
    res.json(studentDetails)
}

export const postRegister =async(req,res)=>{
        const user =req.body

        res.json(user)
    
}

export const idParams = async(req,res)=>{
        const idDetails = req.params

        res.json(idDetails)
}

export const getProducts =async(req,res)=>{
    const produ = req.query

    res.json(produ)
}

export const getAuthorization =async(req,res)=>{
    const auth = req.headers

    res.json(auth)
}

export const postLogin = async(req,res)=>{
    req.body
    res.send("Login Successful")
}

export const student = async(req,res)=>{
    const {id} = req.params
    const {course,batch} = req.query
    res.json({id,course,batch})
}

export const getUserInfo = async(req,res)=>{
    const {id} = req.params
    const {course,batch} = req.query
    const user = req.body
    const headers = req.headers

    console.log("params",req.params)
    console.log("query",req.query)
    console.log("body",req.body)
    console.log("headers",req.headers)
    
    res.json({
       params:{id},
       query:{course,batch},
       body:user,
       headers
    })
}

export const employeeDetails = async(req,res)=>{

    const empdet =req.body
    const {empID}=req.params
    const {empDetails}=req.query
    const Authorization=req.headers

    console.log("params",req.params)
    console.log("query",req.query)
    console.log("body",req.body)
    console.log("headers",req.headers)
    
    res.json({
        body:empdet,
        params:{empID},
        query:{empDetails},
        headers:Authorization
    })

    
}
