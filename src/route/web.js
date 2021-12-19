import express from "express";
import homeController from "../controller/homeController.js"
let router = express.Router();

let initWebRouter = (app)=>{
    router.get('/',homeController.getHomePage);

    router.get('/about',homeController.getAboutPage)

    //rest api 

    return app.use("/",router);
}
module.exports = initWebRouter