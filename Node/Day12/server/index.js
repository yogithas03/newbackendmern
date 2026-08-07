import express   from 'express'
import dotenv    from 'dotenv'
import cors      from 'cors'
import dataBase  from './config/database.js'
import authRoute from './routes/authRoutes.js'

dotenv.config()

dataBase()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server connected with http://localhost:${PORT}`)
})

//  http://localhost:4000/api/auth