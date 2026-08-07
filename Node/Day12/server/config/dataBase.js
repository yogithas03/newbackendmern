import mongoose, { connect } from "mongoose"

const dataBase = async()=>{
     try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database connect with MONGODB ${conn.connection.host}`)
     } catch (error) {
        console.log('error',error)
        process.exit(1)
     }
}

export default dataBase


