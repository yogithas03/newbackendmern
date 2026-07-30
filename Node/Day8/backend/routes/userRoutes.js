import express from 'express'
import { allData, deleteData, findData, newData, updateData } from '../controller/userController.js'

const route = express.Router()

// http://localhost:4000/api/datas/newdata
// http://localhost:4000/api/datas/findingdata
// http://localhost:4000/api/datas/uniquedata/6a6b3866b11923b56ba622be
// http://localhost:4000/api/datas/updatedata
// http://localhost:4000/api/datas/deletedata


route.post("/newdata",newData)

route.get("/findingdata",allData)

route.get("/uniquedata/:id",findData)

route.put("/updatedata/:id",updateData)

route.delete("/deletedata/:id",deleteData)
export default route
