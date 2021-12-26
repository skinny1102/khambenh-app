
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
 
    res.send("post crud")
}
//[GET] /get-crud
let displayGetCRUD = async (req,res)=>{
    let data = await CRUDService.getAllUser()
    res.render("display-crud.ejs",{data:data})
}
//[GET] /edit-crud?id=
let editCRUD = async (req,res)=>{
    let userId = req.query.id
    if(userId){
        let userData = await CRUDService.getUserInforID(userId)
        if(userData){
            return res.render("editCRUD.ejs",{user:userData})
        }else{
            return res.send("Found not user")
        }
       
    }else{
        return res.send("Found not user")
    }
    
}
let putCRUD = async (req,res)=>{
    let data = req.body
    await CRUDService.updateUserData(data)
    return res.send("Thành công")

}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage:getAboutPage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    displayGetCRUD:displayGetCRUD,
    editCRUD:editCRUD,
    putCRUD:putCRUD
}