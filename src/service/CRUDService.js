import bcrypt from 'bcryptjs'
import db from '../models/index'

const salt = bcrypt.genSaltSync(10)

let createNewUser = async (data)=>{
    return new Promise( async(resolve,reject)=>{
        try {
            let hashPasswordFormBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                email : data.email,
                password:hashPasswordFormBcrypt,
                firstName: data.firstname,
                lastName: data.lastname,
                address:data.address,
                phonenumber:data.phonenumber,
                gender:data.gender ==='1'?true:false,
                roleId:data.roleid,
            })
            resolve("Add user Success")
            // console.log('data form service');
            // console.log(data);
            // console.log(hashPasswordFormBcrypt); 
        } catch (error) {
            reject(error)

        }
    })

}
let hashUserPassword = (password)=>{
    return new Promise( async (resolve,reject)=>{
        try {
            var hashpassword = await bcrypt.hashSync(password, salt)
            resolve(hashpassword)
        } catch (error) {
            reject(error)
        }
    })
}
let getAllUser = ()=>{
    return new Promise( async (resolve,reject)=>{
        try {
            let users = db.User.findAll({raw:true})
            resolve(users)
        } catch (error) {
            reject()
        }
    })
}
module.exports={
    createNewUser: createNewUser,
    getAllUser : getAllUser
}