let {body} = require('express-validator');

module.exports.userLogin = () => {
    return [
        body('email').exists()
        .withMessage('Email is required')
        .isEmail(),
        body('password')
        .exists().withMessage('Password is required')
        .isLength({min: 6, max: 32})
        .withMessage('Password length should be 6 char min and 32 chars max')
    ];
}