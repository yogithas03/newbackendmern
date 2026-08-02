import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './routes/authRoutes.js'
import studentRoute from './routes/studentRoutes.js'
import connectDb from './config/connectDb.js'




dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/datas',authRoute)
app.use('/api/studentdata',studentRoute)

connectDb()

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
    
})

// http://localhost:4000/api/datas
//http://localhost:4000/api/studentdata

