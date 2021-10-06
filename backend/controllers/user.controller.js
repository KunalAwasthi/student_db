/**
 * Dependencies imports
 */
const passport = require('passport');
const jwt = require("jsonwebtoken");

module.exports.login = (req, res, next) => {
    passport.authenticate('user-local', (err, user) => {
        console.log(err, user);
        if(err) {
            return res.json({
                success: false,
                message: err
            });
        }
        let token = jwt.sign({
            email: user.email,
            fullName: user.fullName,
        }, process.env.JWT_SECRET, {
            expiresIn: 300 // 5 mins  
        });
        return res.json({
            success: true,
            data: {
                ...user,
                token
            }
        });
    })(req, res, next);
}

module.exports.verifyJwt = (req, res, next) => {
    return res.json({
        success: true,
        data: req.user
    });
}