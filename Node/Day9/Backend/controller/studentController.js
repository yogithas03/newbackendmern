import { studentModels } from "../models/studnetModels.js"
import bcrypt from 'bcrypt'

export const studentRegister = async(req,res)=>{
    try {

        const {name,email,password,number}=req.body

        if(!name,!email,!password,!number){
            return res.status(404).json({msg:"fill the empty fields"})
        }

        const checkEmailAndNumber = await studentModels.findOne({email,number})

        if(checkEmailAndNumber){
            return res.status(409).json({msg:"alert excited"})
        }

        const changePassword = await bcrypt.hash(password,10)

        const createData = await studentModels.create({name,email,password:changePassword,number})

        res.status(200).json({msg:"data added"})
        
    } catch (error) {

        console.log("error",error.message)
        
        res.status(404).json({msg:"error occur on backend"})
        
    }
}


export const studentLogin = async(req,res)=>{

    try {

        const {email,password}=req.body
        if(!email,!password){
            return res.status(404).json({msg:"fill the all filed"})
        }

        const checkEmail = await studentModels.findOne({email})
        if(!checkEmail){
            return res.status(401).json({msg:"unauthorize user"})
        }

        const checkPasword = await bcrypt.compare(password,checkEmail.password)
        if(!checkPasword){
            return res.status(401).json({msg:"unauthorize user"})
        }
         res.status(200).json({msg:"loged in"})

        
    } catch (error) {

          console.log("error",error.message)
        
        res.status(404).json({msg:"error occur on backend"})
        
    }
}