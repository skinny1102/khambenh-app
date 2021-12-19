import express, { urlencoded } from "express";
import viewEngine from "./config/viewEngine.js"
import iniWebRoutes from "./route/web.js"
import dotenv from 'dotenv'
dotenv.config()

let app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

viewEngine(app)
iniWebRoutes(app)
let port = process.env.PORT || 8080
//Port  === undifiend = port = 3000
app.listen(port,()=>{
    console.log(`Server is runing on the port ${port}`)
})