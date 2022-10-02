const {Sequelize} = require("sequelize")
const doenv = require("dotenv").config()

const sequelize = new Sequelize("user",`${process.env.user}`,`${process.env.pass}`,{
    host:'localhost',
    dialect:'mysql',
})

module.exports = sequelize