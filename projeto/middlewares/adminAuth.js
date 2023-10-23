const bcrypt = require("bcryptjs")


function adminAuht(req, res, next) {
    if ( req.session.usuario != undefined ) {
        if (req.session.usuario.email == "admin@email.com" && req.session.usuario.id == 8)

        next();

    } else {
        res.redirect("/home")
    }
}

module.exports = adminAuht