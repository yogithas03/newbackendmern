import express from 'express'
import { getheader, getparams, getquery, getrequest, postrequest } from '../controller/requestContoller.js'


const requestroute = express.Router()

//http://localhost:5000/api/request/requestdata
//http://localhost:5000/api/request/postrequest
//http://localhost:5000/api/request/getparams/34566
//http://localhost:5000/api/request/getheader
//http://localhost:5000/api/request/getquery



requestroute.get("/requestdata",getrequest)

requestroute.post("/postrequest",postrequest)

requestroute.get("/getparams/:userid",getparams)

requestroute.get("/getheader",getheader)

requestroute.get("/getquery",getquery)




export default requestroute