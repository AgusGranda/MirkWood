const express = require("express")
const router = express.Router()


const productsController = require ("../controller/productsController.js") 


router.get("/" , productsController.home);
router.get("/hormigas" , productsController.hormigas);
router.get("/hormigueros" , productsController.hormigueros);
router.get("/ofertas" , productsController.ofertas);
router.get("/about" , productsController.about);
router.get("/cart" , productsController.productCart)
router.get("/productDetail" , productsController.productDetail);
router.get("/productForm" , productsController.productForm);


module.exports = router; 