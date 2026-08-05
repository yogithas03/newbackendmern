import mongoose from "mongoose"

export const dataBase = async(req,res)=>{

    try {

        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database connected with ${conn.connection.host}`)
        
    } catch (error) {

        console.log('error',error)

        process.exit(1)
        
    }

}