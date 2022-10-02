const express = require("express")
const router = express.Router()

const UserController = require("../controllers/UserController.js")

router.get("/add",UserController.createUser)
router.post('/add',UserController.createUserSave)
router.post("/remove",UserController.removeUser)
router.get("/edit/:id",UserController.updateUser)
router.post("/edit",UserController.updateUserPost)
router.get("/",UserController.showUser)
module.exports = router