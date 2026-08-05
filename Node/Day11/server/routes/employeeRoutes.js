import express from 'express'
import {employeeDetails} from '../controller/employeeController.js'

const routes = express.Router()

//  http://localhost:4000/api/employee/employeedetails

routes.post("/employeedetails",employeeDetails)

export default routes