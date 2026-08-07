import express from 'express'
import {registerData} from '../controller/authController.js'

const routes =  express.Router()

//  http://localhost:4000/api/auth/registerdata

routes.post("/registerdata",registerData)


export default routes