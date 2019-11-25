var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
let user = require('../controllers/user');

let { isLoggedIn, hasAuth } = require('../middleware/hasAuth');

router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout', user.logout);
router.get('/logout', user.logout);

//this is a so called middleware function
const noop = function(req, res, next) {
    next(); //This line calls next function in line which is landing.show_leads
}

/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_email);
router.get('/leads', noop, hasAuth,landing.show_leads); //this calls noop function first
router.get('/lead/:lead_id', hasAuth, landing.show_lead);
router.get('/lead/:lead_id/edit', hasAuth, landing.show_edit_lead);
router.post('/lead/:lead_id/edit', hasAuth, landing.edit_lead);
router.post('/lead/:lead_id/delete', hasAuth, landing.delete_lead);
router.post('/lead/:lead_id/delete-json', hasAuth, landing.delete_lead_json);

module.exports = router;
