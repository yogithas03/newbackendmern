import express from 'express'
import { getAuthorization, getmessage, getProducts, getStudent, getUserInfo, idParams, postLogin, postRegister, student } from '../controller/welcomeController.js'

const route = express.Router()

//http://localhost:4000/api/message/welcome
//http://localhost:4000/api/message/student
//http://localhost:4000/api/message/register
//http://localhost:4000/api/message/user/101
//http://localhost:4000/api/message/product?category=mobile&page=1
//http://localhost:4000/api/message/profile
//http://localhost:4000/api/message/login
//http://localhost:4000/api/message/student/101?course=React&batch=Morning
//http://localhost:4000/api/message/userinformation

route.get("/welcome",getmessage)

route.get("/student",getStudent)

route.post("/register",postRegister)

route.get("/user/:id",idParams)

route.get("/product",getProducts)

route.get('/profile',getAuthorization)

route.post('/login',postLogin)

route.get('/student/:id',student)

route.post('/userinformation/:id',getUserInfo)




export default route