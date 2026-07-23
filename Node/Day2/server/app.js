import dotevn from 'dotenv'

import http from 'http'

import os from 'os'

import path from "path"

import fs from 'fs'

dotevn.config()

console.log("Application Name :", process.env.APP_NAME)
console.log("Port Number      :", process.env.PORT)
console.log("Author Name      :", process.env.AUTHOR)

const app = http.createServer()

const PORT =process.env.PORT|| 4000

console.log("Hostname:",os.hostname())
console.log("Platform:",os.platform())
console.log("Architecture:",os.arch())
console.log("CPUs:",os.cpus())
console.log("Total Memory:",os.totalmem())
console.log("Free Memory:",os.freemem())

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

const relativePath = "./public/images/logo.png"

const absolutePath = path.resolve("public/images/logo.png")

console.log(relativePath)

console.log(absolutePath)

