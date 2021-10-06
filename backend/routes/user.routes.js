const express = require('express');
const ctrlUser = require('../controllers/user.controller');
const {userLogin} = require('../validations');
const {validationHandler} = require('../middlewares');
const jwt = require('express-jwt');
const userRouter = () => {
    let jwtAuth = jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256']}),
    router = express.Router();
    router.post('/login', userLogin(), validationHandler, ctrlUser.login);
    router.get('/verify', jwtAuth, ctrlUser.verifyJwt);

    router.use((err, req, res, next) => {
        res.json({
            success: false,
            message: err && err.message ? err.message : "Something went wrong."
        });
    });
    return router;
}

module.exports = userRouter;