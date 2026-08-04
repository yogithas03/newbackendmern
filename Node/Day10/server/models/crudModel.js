import mongoose from 'mongoose'

const crudSchema = new mongoose.Schema({

    userName:String,
    userEmail:String,
    userAge:Number,
    userLocation:String


},{timestamps:true})

const crudModel = mongoose.model("userDatas",crudSchema)

export default crudModel 
