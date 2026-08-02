import express from 'express'
import { studentLogin, studentRegister } from '../controller/studentController.js'

const route = express.Router()


// http://localhost:4000/api/studentdata/students
// http://localhost:4000/api/studentdata/login

route.post("/students",studentRegister)
route.post("/login",studentLogin)

export default route