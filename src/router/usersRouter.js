const express = require("express")
const validatios = require("../middlewares/validatios.js")
const userController = require("../controller/usersController.js")

const router = express.Router()

router.get("/login",userController.login)
router.get("/register",userController.register)

// new users

router.post("/register" , validatios, userController.processRegister)

module.exports = router;