import express from 'express'
import { register } from '../controller/authContoller.js'



const route = express.Router()

// http://localhost:5000/api/auth/register

route.post("/register",register)




export default route