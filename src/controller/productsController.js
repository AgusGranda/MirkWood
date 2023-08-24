const fs = require("fs")
const path = require ("path")

const productFile = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productFile, "utf-8"));

const controller = {
    home: (req,res) => { 
        res.render("index");
    },
    hormigas: (req,res) =>{
        res.render("hormigas", {products});
    },
    hormigueros: (req,res) => { 
        const nests = products.filter((product) => product.category === "nest");
        res.render("hormigueros" , {nests});
    },
    ofertas: (req,res) => { 
        res.render("ofertas");
    },
    about: (req,res) => { 
        res.render("about");
    },
    productCart: (req,res) => { 
        res.render("productCart");
    },
    productDetail: (req,res) => { 
        res.render("productDetail");
    },
    productForm: (req,res) => { 
        res.render("productForm");
    },
    process_productForm: (req,res) => { 
        res.render("");
    },
    productEditForm: (req,res) => { 
        res.render("productEditForm");
    },
    process_productEditForm: (req,res) => { 
        res.render("");
    },
    
}



module.exports = controller;