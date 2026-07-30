import userModel from "../models/userModels.js"

export const newData = async(req,res)=>{
    try {
         
        const{name,email,age} = req.body
        const adding =await userModel.create({name,email,age})

        res.status(201).json({msg:"added sucessfully",adding})

    } catch (error) {

        console.log("error",error)
        res.status(500).json({msg:"Error Something on backend",error})
    }
}

export const allData =async(req,res)=>{
    try {

        const get = await userModel.find()
        res.status(200).json({get})
        
    } catch (error) {
        console.log("error",error)
        res.status(500).json({msg:"Error Something on backend",error})
    }
}

export const findData =async(req,res)=>{
    try {

        const unique = await userModel.findById(req.params.id)
        res.status(200).json({unique})

        
    } catch (error) {
        console.log("error",error)
        res.status(500).json({msg:"Error Something on backend",error})
    }
}

export const updateData =async(req,res)=>{
    try {

        const {name,email}=req.body
        const {id}=req.params

        const updata = await userModel.findByIdAndUpdate(id,{name,email,id},{returnDocument:after})
        res.status(200).json({msg:"updated",update})
        
    } catch (error) {
        
    }
}

export const deleteData =async(req,res)=>{
    try {
        const {id} = req.params

        const deletedata = await userModel.findByIdAndDelete(id)
        res.status(200).json({msg:"deleted"})
    } catch (error) {
        
    }
}