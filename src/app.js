const express = require("express");
const path = require("path")
const methodOverride = require("method-override")


const productsRouter = require("./router/productsRouter");
const userRouter = require("./router/usersRouter")


const app = express();

// EJS
app.set('view engine', 'ejs'); // avisamos que usaremos ejs 
app.set('views', path.join(__dirname, 'views')); // avisamos que las vistas estan desde views (para res.render)
app.use(express.static(path.join(__dirname, 'public'))); // Avisar que los archivos estaticos se acceden desde "public"

// END EJS

app.use(methodOverride("_method"));            // para poder usar los metodos http PUT PATCH DELETE.
app.use(express.json());                       // para procesar los datos JSON en el body
app.use(express.urlencoded({extended:false})); // Para capturar los datos del body.


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