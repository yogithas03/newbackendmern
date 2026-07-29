import mongoose from "mongoose"

const connectDb = async()=>{

    try {

        const db =await mongoose.connect(process.env.MONGODB_URI)

        console.log(`Database conneted sucessfully ${db.connection.host}`)
        
    } catch (error) {

        console.log('Database connection failed',error)

        process.exit(1)
        
    }
}

export default connectDb