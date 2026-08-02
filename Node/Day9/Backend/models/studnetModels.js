import mongoose from "mongoose"

export const studentSchema = new mongoose.Schema({
    name:"string",
    email:"string",
    password:"string",
    phone:"number"

},{timestamps:true})


export const studentModels = mongoose.model("students",studentSchema)