module.exports.home = function (req, res, next) {
    res.send("Welcome to Dress Store Application");
}

module.exports.products = function (req, res, next) {
    res.send("Welcome to Products!");
}
