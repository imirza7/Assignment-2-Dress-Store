module.exports.home = function (req, res, next) {
    res.json({
        success: true,
        message: "Welcome to Dress Store Application"
    });
}