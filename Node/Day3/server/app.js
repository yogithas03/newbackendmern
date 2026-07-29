import dotenv from 'dotenv'
import http from 'http'
import fs from 'fs'
import path from 'path'



dotenv.config()



const app = http.createServer()

const PORT = process.env.PORT || 2000

app.listen(PORT,()=>{
    console.log(`Server Running in http://localhost:${PORT}`)
})





   const folderPath = path.join(process.cwd(),"public","home")

    fs.mkdir(folderPath,{recursive:true},(error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("Path Created");
            
        }
    })

    const filePath = path.join(folderPath,"data.txt")

    fs.writeFile(filePath,"welcome",(e)=>{
        if(e){
            console.log(e)
            return
        }else{
            console.log("DONE")
        }
    })



