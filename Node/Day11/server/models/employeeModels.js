import mongoose from "mongoose"

const employeeSchema = new mongoose.Schema({

    employeeName:String,

    email:String,

    department:String,

    salary:Number,

    mobileNumber:Number
},{timeStramps:true})


export const employeeModeles = mongoose.model("employeeDetails",employeeSchema)