import { employeeModeles } from "../models/employeeModels.js"

export const employeeDetails = async(req,res)=>{


    try {

        const { employeeName,email,department,salary,mobileNumber } = req.body

        if(!employeeName || !email || !department || !salary || !mobileNumber){

           return res.status(409).json({msg:"fill the inputs"})
        }
        
        const checkEmail = await employeeModeles.findOne({email})

        if(checkEmail){

             return res.status(409).json({msg:"email already excit"})

        }

        const empDetails = await employeeModeles.create({employeeName,email,department,salary,mobileNumber})

        res.status(202).json({msg:"employee Details created in DB"})
    } catch (error) {
        
        console.log('error',error)
        res.status(404).json({msg:'error is in backend'})
        
    }
}