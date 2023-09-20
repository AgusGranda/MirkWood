const {body} = require("express-validator");

const loginValidations = [
    body("name").notEmpty().withMessage("Ingrese un nombre"),
    body("email").notEmpty().withMessage("Ingrese un email valido"),
    body("password").notEmpty().withMessage("Ingrese una contraseña valida"),
]


module.exports = loginValidations;