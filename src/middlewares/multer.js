const express = require('express');
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({

    destination: (req, file, cb) => {   		// donde se va a guardar
        cb(null, './src/public/images/products')
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`; //nombre
        cb(null, fileName)
    }
})

const uploadFile = multer({ storage })



module.exports = uploadFile;
