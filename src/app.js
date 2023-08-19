const express = require("express");
const path = require("path")

const app = express();

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// END EJS


// routes
const productsRouter = require("./router/productsRouter");
const userRouter = require("./router/usersRouter")

app.use("/", productsRouter);
app.use("/",userRouter);

// end routes


// PORT
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}...`)
})

// END PORT