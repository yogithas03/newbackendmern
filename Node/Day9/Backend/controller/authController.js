import { authModules } from "../models/authModels.js"
import bcrypt from "bcrypt"

export const register = async(req,res)=>{

try {

   const{userName,email,password}=req.body

   if(!userName ,!email ,!password){

    return res.status(404).json({msg:"please fill the fields"})
   }

   const checkEmail = await authModules.findOne({email})

   if(checkEmail){
    return res.status(409).json({msg:"email & password alert exicts"})
   }

   const changePassword =await bcrypt.hash(password,10)


   const registerDatas = await authModules.create({userName,email,password:changePassword})

   res.status(202).json({msg:"Data Added!",registerDatas})
} catch (error) {
    
    console.log("error",error)
    res.status(404).json({msg:"Error on Backend Sides"})
    
}
}

export const login = async(req,res)=>{

    try {

        const {email,password}=req.body

    if(!email ,!password){

    return res.status(404).json({msg:"please fill the fields"})
   }

   const checkEmail = await authModules.findOne({email})

   if(!checkEmail){
    return res.status(401).json({msg:"unauthorize login"})
   }

   const checkPasword = await bcrypt.compare(password,checkEmail.password)
   if(!checkPasword){
     return res.status(401).json({msg:"unauthorize login"})
    }

    res.status(202).json({msg:"login sucessfully"})
        
    } catch (error) {

    console.log("error",error)
    res.status(404).json({msg:"Error on Backend Sides"})
    
    }


}