import express from 'express'
import { delectProduct, getProduct, postProduct } from '../controller/productController.js'

const route = express()

route.get("/getProduct",getProduct)

route.post("/postProduct",postProduct)

route.delete("/deleteProduct",delectProduct)

export default route