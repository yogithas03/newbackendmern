import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dataBase } from './config/dataBase.js'
import employeeRoute from './routes/employeeRoutes.js'


dotenv.config()

dataBase()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/employee",employeeRoute)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server connected with http://localhost:${PORT}`)
})

//  http://localhost:4000/api/employee