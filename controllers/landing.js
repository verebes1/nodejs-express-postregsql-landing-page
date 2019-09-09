

exports.get_landing = function(req, res, next) {
  res.render('index', { title: 'David\'s Page' });
}