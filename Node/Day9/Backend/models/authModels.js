import mongoose from "mongoose"

const authSchema = new mongoose.Schema({

    userName:"string",
    email:"String",
    password:"string"

},{timestamps:true})


export const authModules = mongoose.model("datas",authSchema)

