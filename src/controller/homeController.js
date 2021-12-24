
import db from '../models/index'
import CRUDService from '../service/CRUDService.js'
//[GET] /
let getHomePage = async (req,res)=>{
    try {
        let data = await db.User.findAll()
        console.log('---------------------------');
        console.log(data);
        res.render('homepage.ejs',{
             data: JSON.stringify(data) 
        })
    } catch (error) {
        console.log(error);
    }
    
 
}
//[GET] /about
let getAboutPage = (req,res)=>{
    res.render('test/about.ejs')
}
//[GET] /crud
let getCRUD = (req,res)=>{
    res.render("crud.ejs")
}
//[POST] /post-crud
let postCRUD = async(req,res)=>{
    let msg= await CRUDService.createNewUser(req.body)
    console.log(msg);
    res.send("post crud")
}
//[GET] /get-crud
let displayGetCRUD = async (req,res)=>{
    let data = await CRUDService.getAllUser()
    console.log("----------");
    console.log(data);
    console.log("----------");
    res.render("display-crud.ejs",{data:data})
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage:getAboutPage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    displayGetCRUD:displayGetCRUD
}