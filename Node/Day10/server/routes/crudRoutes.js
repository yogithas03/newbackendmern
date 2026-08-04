import express from 'express'
import { addDatas, getDatas } from '../controller/crudContoller.js'

const route = express.Router()


//http://localhost:5000/api/crud/adddatas
//http://localhost:5000/api/crud/gettingdatas

route.post("/adddatas",addDatas)

route.get("/gettingdatas",getDatas)


export default route