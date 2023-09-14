const fs = require("fs")
const path = require("path")
const {validationResult} = require("express-validator");

const usersFile = path.join(__dirname, "../data/users.json"); // guardo la ubicacion del data en una variable
const users = JSON.parse(fs.readFileSync(usersFile, "utf-8")); // guardo en una variable la data convertida a objeto


const controller = {
    login: (req,res) => {
        res.render("login")
    },
    processLogin: (req,res) => { 

    },
    register: (req,res) => {
        res.render("register")
    },
    processRegister: (req,res) => {
        let errors = validationResult(req);
        let old = req.body;
        if(errors.isEmpty()){
            let newUser = {
                id: users[users.length-1].id + 1,
                ...req.body,
                type: "customer",
                avatar: "",
            }    
            users.push(newUser);
            fs.writeFileSync(usersFile, JSON.stringify(users, null, " "));
            res.redirect("login")

        }else{
            res.render("register" , {
                errors : errors.array(),
                old
            });
        }

    },
    logout: (req,res) => {
        
    }
    
}


module.exports = controller;