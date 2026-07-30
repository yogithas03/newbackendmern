import mongoose from "mongoose"

const createSchema = new mongoose.Schema({

    name:{
        type:String,
        requried:true,
        trim:true
    },
    email:{
        type:String,
        lowercase:true
    },
    age:{
        type:Number
    }
},{timestamps:true})


const userModel = mongoose.model("employeeDetails",createSchema)

export default userModel 