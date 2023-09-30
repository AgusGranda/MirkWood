const express = require("express");
const path = require("path")
const methodOverride = require("method-override");
const session = require("express-session");
const userLogged = require("./middlewares/userLogged.js")

const productsRouter = require("./router/productsRouter");
const userRouter = require("./router/usersRouter");


const app = express();




// EJS
app.set('view engine', 'ejs'); // avisamos que usaremos ejs 
app.set('views', path.join(__dirname, 'views')); // avisamos que las vistas estan desde views (para res.render)
app.use(express.static(path.join(__dirname, 'public'))); // Avisar que los archivos estaticos se acceden desde "public"

// END EJS

app.use(methodOverride("_method"));            // para poder usar los metodos http PUT PATCH DELETE.
app.use(express.json());                       // para procesar los datos JSON en el body
app.use(express.urlencoded({extended:false})); // Para capturar los datos del body.

app.use(session({                              // para poner a session como middleware de aplicacion.
    secret:"this is a secret",
    resave: false,
    saveUninitialized: false
}))

app.use(userLogged)                           // para ocultar del nav el logout (ponerlo siempre despues de session)
 

// routes

app.use("/", productsRouter);
app.use("/users",userRouter);

// end routes


// PORT
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}...`)
})

// END PORT