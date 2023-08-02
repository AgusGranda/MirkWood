const express = require("express")
const router = express.Router()


const productsController = require ("../controller/productsController.js") 


router.get("/" , productsController.home);


module.exports = router;