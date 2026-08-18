import mongoose from 'mongoose'

const crudScheme = new mongoose.Schema({
    empname:{
        type:String,
        required:[true,"employee name is required"],
        minlength:[3,"Employee name must contain at least 3 characters"],
        trim:true},
    dob:{
        type:Date,
        required:[true,"DOB is required"],
        validate:{
            validator:function(value){
                return value <= new Date()
                },
            message:"DOB must be valid"
            }
        },
    qualification:{
        type:[String],
        trim:true,
        required:[true,"qualification must required"],
        validate:{
            validator:function(value){
                return value.length > 0
            },
            message:"At least one qualification must selected"
        }
    },
    gender:{
        type:String,
        required:[true,'gender must required'],
        enum:{
            values:["male","female","others"],
            message:"invalid gender"
        }
    },
    department:{
        type:String,
        required:[true,"department is required"],
        enum:{
            values:["IT","HR","Markerting","Sales"],
            message:"invalid Department"
        }
    },
    address:{
        type:String,
        required:[true,"adress must required"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        lowercase:true,
        trim:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"please enter valid email"]
    },
    phonenumber:{
        type:String,
        required:[true,"phonenumber is e"],
        match:[/^\d{10}$/,"phone number must contain 10 digits"]
    },
    salary:{
        type:Number,
        required:[true,"salary must required"],
        min:[1,"salary must greater than 0"]
    }

},{timestamps:true})


const crudModels = mongoose.model("Employees",crudScheme)

export default crudModels