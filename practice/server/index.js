import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import crudRoute from './routes/crudRoutes.js'
import crudOp from './config/crudOp.js'

dotenv.config()


const app = express()

app.use(cors())
app.use(express.json())

crudOp()

app.use("/api/employee",crudRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})

//http://localhost:4000/api/employee