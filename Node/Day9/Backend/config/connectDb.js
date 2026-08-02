import mongoose from 'mongoose'

const connectDb =async(req,res)=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database connectes ${conn.connection.host}`)
    } catch (error) {
        console.log("error",error)
        process.exit(1)
        
    }
}
export default connectDb