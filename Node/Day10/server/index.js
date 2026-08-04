import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import crudRoute from './routes/crudRoutes.js'
import connectDb from './config/connectDb.js'


dotenv.config()

connectDb()

const app = express()

app.use(cors())
app.use(express.json())



app.use("/api/crud",crudRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
   
    console.log(`server running in http://localhost:${PORT}`)
})


//http://localhost:5000/api/crud

