import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import welcomeRoute from './routes/welcomeRoutes.js'

dotenv.config()

const app =express()

app.use(cors())
app.use(express.json())
app.use("/api/message",welcomeRoute)


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server running in http://localhost:${PORT}`);
    
})

//http://localhost:4000/api/message
