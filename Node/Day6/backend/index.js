import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import requestroute from './routes/requestRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/request",requestroute)

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`server running in http://localhost:${PORT}`)
})

//http://localhost:5000/api/request