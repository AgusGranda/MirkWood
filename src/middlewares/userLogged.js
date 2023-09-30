function userLogged(req, res, next) {
    res.locals.isLogged = false;        // para que toda la app conozca a isLogged
    if (req.session.userLogged) {
        res.locals.isLogged = true;     // si existe alguien en session hacelo true;
        // res.locals.userLogged = req.session.userLogged  => por si quiero guardar los datos de usuario en una variable local para luego usarlos en las vistas
    }
    next();

}


module.exports = userLogged;