

exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'David\'s Page' });
}

exports.submit_email = function(req, res, next) {
  console.log("Lead email: ", req.body.lead_email);
  res.redirect('/');
}
