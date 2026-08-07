import mongoose from "mongoose"

const authSchema = new mongoose.Schema({

    username:String,
    useremail:String,
    userpassword:String

},{timestamps:true})


const authModels = mongoose.model("authDatas",authSchema)

export default authModels
