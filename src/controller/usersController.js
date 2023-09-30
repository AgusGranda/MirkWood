const fs = require("fs")
const path = require("path")
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator");

const usersFile = path.join(__dirname, "../data/users.json"); // guardo la ubicacion del data en una variable
const users = JSON.parse(fs.readFileSync(usersFile, "utf-8")); // guardo en una variable la data convertida a objeto


const controller = {
    login: (req,res) => {
        res.render("login")
    },
    processLogin: (req,res) => { 
        let userToLogin = users.find(user => user.email == req.body.email);
    
        let oldData = req.body;
        if(userToLogin){
            let passwordOk = bcrypt.compareSync(req.body.password , userToLogin.password)
            if(passwordOk){
                let userLogged = {
                    ...userToLogin,
                    password: ""
                }
                req.session.userLogged = userLogged;
                return res.redirect("/")
            }
            return res.render("login",{
                errors: {
                    password:{
                        msg:"Contraseña invalida"
                    }
                },
                oldData
            })

        }

        

        return res.render("login",{
            errors: {
                email:{
                    msg:"Email no registrado"
                }
            },
           
        })


    },
    register: (req,res) => {
        res.render("register")
    },
    processRegister: (req,res) => {
        let errors = validationResult(req);
        let oldData = req.body;
        if(errors.errors.length > 0){
          return  res.render("register" , {
                errors : errors.mapped(),
                oldData
            });
        }
        
        let userInDB = users.find(user => user.email == req.body.email);

        if(userInDB){
          return  res.render("register" , {
                errors : {
                    email:{
                        msg: "Este email ya esta registrado."
                    }
                },
                oldData
            });
        }
        
        let newUser = {
            id: users[users.length-1].id + 1,
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            type: "customer"
        }
        users.push(newUser);
        fs.writeFileSync(usersFile, JSON.stringify(users, null, " "));
       return res.redirect("login")

    },
    logout: (req,res) => {
        req.session.destroy();
        return res.redirect("/");
    }
    
}


module.exports = controller;