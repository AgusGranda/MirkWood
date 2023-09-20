const fs = require("fs")
const path = require("path")
const { validationResult } = require("express-validator");

const productFile = path.join(__dirname, "../data/products.json"); // guardo la ubicacion del data en una variable
const products = JSON.parse(fs.readFileSync(productFile, "utf-8")); // guardo en una variable la data convertida a objeto

const controller = {
    home: (req, res) => {
        res.render("index");
    },
    hormigas: (req, res) => {
        res.render("hormigas", { products });
    },
    hormigueros: (req, res) => {
        const nests = products.filter((product) => product.category === "nest");
        res.render("hormigueros", { nests });
    },
    ofertas: (req, res) => {
        const offer = products.filter((product) => product.discount > 0);
        res.render("ofertas", { offer });
    },
    about: (req, res) => {
        res.render("about");
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    productDetail: (req, res) => {
        const id = req.params.id;
        const product = products.find((product) => product.id == id);
        res.render("productDetail", { product });
    },
    productForm: (req, res) => {
        res.render("productForm");
    },
    process_productForm: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            const newProduct = {
                id: products[products.length - 1].id + 1,
                image: "aloja",
                ...req.body
            };
    
            products.push(newProduct);
            // una vez que tengo el prodcuts pusheado, debo reescribir el archivo data en formato string
            fs.writeFileSync(productFile, JSON.stringify(products, null, " "));
            // los ultimos 2 parametros que recibe el strigify es para que se mantenga el formato. (tabulacion)
            res.redirect("/") // ahora redirecciono porque estoy en /productForm de post
        }else{
            let oldData = req.body
            res.render("productForm", {
                errors : errors.mapped(),
                oldData
            })
        }
    },
    productEditForm: (req, res) => {
        const productToEdit = products.find((product) => product.id == req.params.id)
        res.render("productEditForm", { productToEdit });
    },
    process_productEditForm: (req, res) => {
        let errors = validationResult(req)
        let productToEdit = products.find((product) => product.id == req.params.id)
        if(errors.isEmpty()){
            productToEdit = {
                ...productToEdit,  // ahora decimos que esta variable va a ser lo mismo (...productToEdit)
                ...req.body        // pero sobreescribira los datos que vengan los datos del body.
            }
    
            const indexToEdit = products.findIndex((product) => product.id == req.params.id); // encontramos el elemento por el indice (El elemento, no el indice)
            products[indexToEdit] = productToEdit; // reemplazamos el elemento que habia por el editado.
            fs.writeFileSync(productFile, JSON.stringify(products, null, " "));
            res.redirect("/")
        }else{
            let oldData = req.body
            res.render("productEditForm", {
                productToEdit,
                errors: errors.mapped(),
                oldData
            })
        }
    },
    delete: (req, res) => {
        const productFiltered = products.filter((product) => product.id != req.params.id)
        fs.writeFileSync(productFile, JSON.stringify(productFiltered, null, " "));
        res.redirect("/")
    }

}



module.exports = controller;