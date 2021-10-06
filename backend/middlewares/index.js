
const validationResult = require('express-validator').validationResult;
const validationHandler = (req,res,next) => {
    let result = validationResult(req) 
    let errors = result.array({onlyFirstError: true});
    if (!result.isEmpty()) {
        return res.json({ 
            success: false, 
            message: errors.shift().msg // only return first error
        }); 
    }
    next();
}
module.exports = {validationHandler}