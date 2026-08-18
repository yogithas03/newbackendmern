import crudModels from "../models/crudModels.js"

export const addDatas = async(req,res)=>{
    try {
        const {empname,dob,qualification,gender,department,address,email,phonenumber,salary}=req.body

        if(!empname||!dob||!qualification||!gender||!department||!address||!email||!phonenumber||!salary === undefined){
            return res.status(400).json({msg:"fill the blank filds"})
        }

        if(empname.trim().length < 3){
            return res.status(400).json({msg:"Employee name must contain at least 3 characters"})
        }
        
        if(!Array.isArray(qualification)||qualification.length===0){
            return res.status(400).json({msg:"At least one qualification must be selected"})
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)){
            return res.status(400).json({msg: "Please enter a valid email"})
        }

        if(!/^\d{10}$/.test(phonenumber)){
            return res.status(400).json({msg:"Phone number must contain exactly 10 digits"})
        }

        if(Number(salary)<=0){
            return res.status(400).json({ msg: "Salary must be greater than 0"})
        }

        const checkEmail = await crudModels.findOne({email})
        if(checkEmail){
            return res.status(409).json({msg:"email already exists"})
        }

        await crudModels.create({empname,dob,qualification,gender,department,address,email,phonenumber,salary})

        res.status(201).json({msg:"Data Sucessfully created!!"})
    } catch (error) {
        console.log("error",error.message)
        res.status(500).json({msg:"error occured in backend"})

        
    }
}

export const getData = async(_,res)=>{
    try {
       const employees = await crudModels.find()
       res.status(200).json({msg:"collected all datas",data:employees})

    } catch (error) {
        console.log("error",error.message)
        res.status(500).json({msg:"error in backend"})
    }
}

export const updateData =async(req,res)=>{
    try {
        const {userid}=req.params
        const {empname,dob,qualification,gender,department,address,email,phonenumber,salary}=req.body

        if(!empname||!dob||!qualification||!gender||!department||!address||!email||!phonenumber||!salary===undefined){
            return res.status(400).json({msg:"fill the blank filds"})
        }

        if(!empname.trim().length<3){
            return res.status(400).json({msg:"email must contain 3 characters"})
        }

        if(!Array.isArray(qualification)|| qualification.length === 0){
            return res.status(400).json({msg:"altleast one qualification must needed"})
        }

        if(! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            return res.status(400).json({msg:"invalid email address"})
        }

        if(!/^\d{10}$/.test(phonenumber)){
            return res.status(400).json({msg:"phone number must contain 10 digits"})
        }

        if(Number(salary) <= 0){
            return res.status(400).json({msg:"salary must greater than 0"})
        }

        const updateEmployee = await crudModels.findByIdAndUpdate(userid,{empname,dob,qualification,gender,department,address,email,phonenumber,salary},{
            new:true,
            runValidators:true
        })

        if(!updateEmployee){
            return res.status(404).json({msg:"not found employees"})
        }

        res.status(200).json({msg:"updated values",data:upadateEmployee})
    } catch (error) {
          console.log("error",error.message)
        res.status(500).json({msg:"error in backend"})
    }
}

export const deleteData =async(req,res)=>{
   try {
    const {userid}= req.params
    const deleteEmployee = await crudModels.findByIdAndDelete(userid)

    if(!deleteEmployee){
       return res.status(404).json({msg:"not found employees"})
    }
    res.status(200).json({msg:"delete!"})

   } catch (error) {
     console.log("error",error.message)
        res.status(500).json({msg:"error in backend"})
   }
} 