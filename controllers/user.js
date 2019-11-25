let models = require('../models');
let bcrypt = require('bcrypt');
const passport = require('passport');
const myPassport = require('../passport_setup')(passport);
let flash = require('connect-flash');
const { isEmpty } = require('lodash');
const { validateUser } = require('../validators/signup');

//Exports means the function is available externally in the app
//Below is a request handler and in express.js the order is as below
// req - request object, res - response object, next - next object
exports.show_login = function(req, res, next) {
	res.render('user/login', { formData: {}, errors: {} });
}

exports.show_signup = function(req, res, next) {
	res.render('user/signup', { formData: {}, errors: {} });
}

//Const in this context defines a function which is available only locally.
//as this is not a request handler just a simple function we are free to modify
//the passed in objects. formData is whatever the user has already typed
//into the form fields. It gets put back once the form has been rerendered
//to save the user time so there is no need to retype everything.
const rerender_signup = function(errors, req, res, next) {
	res.render('user/signup', { formData: req.body, errors: errors });
}

const generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(0), null)
}

exports.signup = function(req, res, next) {
	let errors = {};
	return validateUser(errors, req).then(errors => {
		if (!isEmpty(errors)) {
			rerender_signup(errors, req, res, next);
		} else {
			return models.User.findOne({
				where: {
					is_admin: true
				}
			}).then(user => {
				let newUser;
				if (user !== null) {
					newUser = models.User.build({
						email: req.body.email,
						password: generateHash(req.body.password)
					});
				} else {
					newUser = models.User.build({
						email: req.body.email,
						password: generateHash(req.body.password),
						is_admin: true
					});
				}
				return newUser.save().then(result => {
					passport.authenticate('local', {
						successRedirect: "/",
						failureRedirect: "/signup",
						failureFlash: true
					})(req, res, next);
				})
			})
		}
	})
}

exports.login = function(req, res, next) {
	passport.authenticate('local', {
		successRedirect: "/",
		failureRedirect: "/login", 
		failureFlash: true
	})(req, res, next);
}

exports.logout = function(req, res, next) {
	req.logout();
	req.session.destroy();
	res.redirect('/');
}