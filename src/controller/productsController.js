const controller = {
    home: (req,res) => { 
        res.render("index");
    },
    hormigas: (req,res) =>{
        res.render("hormigas");
    },
    hormigueros: (req,res) => { 
        res.render("hormigueros");
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