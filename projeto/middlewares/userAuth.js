function userAuht(req, res, next) {
    if (req.session.usuario != undefined) {
        next();

    } else {
        res.redirect("home")
    }
}

module.exports = userAuht