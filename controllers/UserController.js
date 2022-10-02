const user = require("../models/user.js")
const User = require("../models/user.js")

module.exports = class UserController {
    static createUser(req,res){
        res.render("users/create")
    }

    
    static async createUserSave(req,res){
        const user = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            endereco: req.body.endereco
        }
        await User.create(user)
        res.redirect("/users")
    }

    static async removeUser(req,res){
        const id = req.body.id
        await User.destroy({where: {id:id}})
        res.redirect("/users")
    }

    static async updateUser(req,res){
        const id = req.params.id

        const user = await User.findOne({ where: { id: id }, raw: true });

        res.render("users/edit",{user})
    }
    static async updateUserPost(req,res){
        const id = req.body.id

        const user = {
            nome:req.body.nome,
            cpf:req.body.cpf,
            endereco:req.body.endereco,
        }
        await User.update(user,{where:{id:id}})
        res.redirect("/users")
    }
    static async showUser(req,res){
        const users = await User.findAll({raw:true})
        res.render("users/all",{users})
    }
}
