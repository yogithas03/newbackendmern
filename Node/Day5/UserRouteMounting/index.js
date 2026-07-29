import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/users",userRoutes)
app.use("/api/products",productRouters)



const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})



// http://localhost:5000/api/users
// http://localhost:5000/api/products