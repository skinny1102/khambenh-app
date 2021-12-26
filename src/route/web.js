import express from "express";
import homeController from "../controller/homeController.js"
let router = express.Router();

let initWebRouter = (app)=>{
    router.get('/',homeController.getHomePage);

    router.get('/about',homeController.getAboutPage)
    router.get('/crud',homeController.getCRUD)
    router.post('/post-crud',homeController.postCRUD)
    router.get('/get-crud',homeController.displayGetCRUD)
    router.get('/edit-crud',homeController.editCRUD)
    router.put('/put-crud',homeController.putCRUD)
    //rest api 

    return app.use("/",router);
}
module.exports = initWebRouter