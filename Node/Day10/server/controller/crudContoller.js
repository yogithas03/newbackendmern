import crudModel from "../models/crudModel.js"

export const addDatas = async(req,res)=>{
    try {

        const {userName,userEmail,userAge,userLocation}=req.body

        if(!userName||!userEmail||!userAge||!userLocation){
            return res.status(404).json({msg:"fill the datas"})
        }
        
        const checkEmail = await crudModel.findOne({userEmail})
        if(checkEmail){
            return res.status(409).json({msg:"email already excit"})
        }

        const userData = await crudModel.create({userName,userEmail,userAge,userLocation})

         res.status(201).json({msg:"Successfully Done"})

    } catch (error) {

        console.log('Error',error)
        res.status(404).json({msg:"error occur in backend"})
    }
}

export const getDatas = async(_,res)=>{

    try {
        
       const getdata = await crudModel.find()
       res.status(200).json({msg:"data getting"})

    } catch (error) {

       res.status(500).json({ennodaerrordata:"Something error backend la problem",error})
        
    }
}