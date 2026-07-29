import express from 'express'
import { createUser, getUsers } from '../controller/userController.js'


const route = express.Router()

// http://localhost:5000/api/users/getUsers



route.get("/getUsers",getUsers)

//  http://localhost:5000/api/users/createUser

route.post("/createUser",createUser)

export default route