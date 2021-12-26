import express, { urlencoded } from "express";
import viewEngine from "./config/viewEngine.js"
import iniWebRoutes from "./route/web.js"
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
import methodOverride from 'method-override'
dotenv.config()

let app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))


viewEngine(app)
iniWebRoutes(app)
connectDB()
let port = process.env.PORT || 3000
// let port =  3000
//Port  === undifiend = port = 3000
app.listen(port,()=>{
    console.log(`Server is runing on the port ${port}`)
})