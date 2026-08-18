import mongoose from "mongoose"

const crudOp = async()=>{
    try {
        const conn= await mongoose.connect(process.env.mongodb)
        console.log(`Database connected with MONGODB ${conn.connection.host}`)
    } catch (error) {
        console.log("error",error.message)
        process.exit(1)
    }
}
export default crudOp