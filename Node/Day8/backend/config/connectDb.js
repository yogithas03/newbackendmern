import mongoose from "mongoose"

const connectDb = async()=>{


    try {

        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database connect Successfully ${db.connection.host}`)
        
    } catch (error) {

        console.log("error",error)
        process.exit(1)
        
    }

    


}
export default connectDb