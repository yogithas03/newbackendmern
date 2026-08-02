import express from 'express'
import { register,login } from '../controller/authController.js'

const route = express.Router()


//http://localhost:4000/api/datas/register
//http://localhost:4000/api/datas/login


route.post("/register",register)

route.post("/login",login)


export default route