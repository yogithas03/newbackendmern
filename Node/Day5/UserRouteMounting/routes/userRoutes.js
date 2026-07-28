import express from 'express'
import { createUser, getUsers } from '../controller/userController.js'


const route = express.Router()

// http://localhost:5000/api/getUsers

route.get("/",getUsers)

//  http://localhost:5000/api/createUser

route.post("/",createUser)

export default route