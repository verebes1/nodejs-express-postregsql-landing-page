let models = require('../models');
let validator = require('validator');

//Synchronous code
const validateCreateUserFields = function(errors, req) {
    if (!validator.isEmail(req.body.email)) {
        errors["email"] = "Please use a valid email.";
    }
    if (!validator.isAscii(req.body.password)) {
        errors["password"] = "Invalid characters in password, please try another one.";
    }
    if (!validator.isLength(req.body.password, {min: 8, max: 25})) {
        errors["password"] = "Your password needs to be between 8 and 25 characters."
    }
}
//Asynchronous code
//To use both together we need to setup a promise
exports.validateUser = function(errors, req) {
    return new Promise(function(resolve, reject) {
        validateCreateUserFields(errors, req); //First we use synchronous
        return models.User.findOne({        //Then the asynchronous part
            where: {
                email: req.body.email
            }
        }).then(u => {
            if (u !== null) {
                errors["email"] = "Email is already in use. Please login or reset your passowrd."
            }
            resolve(errors);
        })
    })
}

