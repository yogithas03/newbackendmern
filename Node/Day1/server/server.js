import http from'http'

const app = http.createServer()
const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`)
})