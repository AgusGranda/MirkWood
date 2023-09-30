const express = require("express")
const loginValidation = require("../middlewares/loginValidation.js")
const userController = require("../controller/usersController.js")

const guest = require("../middlewares/guest.js")

const router = express.Router()

router.get("/login", guest, userController.login)
router.get("/register",userController.register)
router.get("/logout", userController.logout);

// new users

router.post("/register" , loginValidation, userController.processRegister)

// login

router.post("/login" , userController.processLogin)

module.exports = router;