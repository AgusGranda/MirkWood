const express = require("express")

const router = express.Router()

const userController = require("../controller/usersController.js")

router.get("/login",userController.login)



module.exports = router;