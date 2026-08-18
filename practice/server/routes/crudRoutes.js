import express from 'express'
import { addDatas,getData,updateData,deleteData} from '../controller/crudController.js'

const routes = express.Router()

//http://localhost:4000/api/employee/adding

//http://localhost:4000/api/employee/getting


//http://localhost:4000/api/employee/updating/:userid

//http://localhost:4000/api/employee/deletting/:userid

routes.post("/adding",addDatas)

routes.get("/getting",getData)

routes.put("/updating/:userid",updateData)

routes.delete("/deletting/:userid",deleteData)

export default routes