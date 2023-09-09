const express = require("express")
const router = express.Router()


const productsController = require ("../controller/productsController.js") 


router.get("/" , productsController.home);
router.get("/hormigas" , productsController.hormigas);
router.get("/hormigueros" , productsController.hormigueros);
router.get("/ofertas" , productsController.ofertas);
router.get("/about" , productsController.about);
router.get("/cart" , productsController.productCart)
router.get("/product/:id" , productsController.productDetail);


// Create one product // 
router.get("/productForm" , productsController.productForm);
router.post("/productForm", productsController.process_productForm);

// Edit one product // 
router.get("/product/:id/edit",productsController.productEditForm)
router.put("/product/:id" , productsController.process_productEditForm)

// Delete one product //
router.delete("/product/:id", productsController.delete)

module.exports = router; 
