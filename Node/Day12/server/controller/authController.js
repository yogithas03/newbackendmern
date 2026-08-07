import authModels from "../models/authModels.js"
import bcrypt from 'bcrypt'

export const registerData = async(req,res)=>{

    try {
        
        const {username,useremail,userpassword}=req.body

        if(!username||!useremail||!userpassword){
            return res.status(400).json({msg:"fill the all inputs"})
        }

        const checkemail = await authModels.findOne({useremail})

        if(checkemail){
            return res.status(409).json({msg:"try different email's"})
        }

        const changePassword = await bcrypt.hash(userpassword,10)

        const register = await authModels.create({username,useremail,userpassword:changePassword})

        res.status(200).json({msg:"sucessfully data added!!"})


    } catch (error) {

        console.log('error',error)

        res.status(500).json({msg:"Internal Server Error"})
        
    }
}