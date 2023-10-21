const bcrypt = require("bcryptjs")


function adminAuht(req, res, next) {
    if (req.session.usuario != undefined) {
        if (req.session.email == "admin@email.com" && req.session.id == 8)

        next();

    } else {
        res.redirect("home")
    }
}

module.exports = adminAuht