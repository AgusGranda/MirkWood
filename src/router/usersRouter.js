const express = require("express")
const loginValidation = require("../middlewares/loginValidation.js")
const userController = require("../controller/usersController.js")

const router = express.Router()

router.get("/login",userController.login)
router.get("/register",userController.register)

// new users

router.post("/register" , loginValidation, userController.processRegister)

module.exports = router;