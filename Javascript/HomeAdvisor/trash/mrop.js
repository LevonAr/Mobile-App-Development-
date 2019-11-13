function login(req, res, callback) {
  User.findOne({email: req.body.email}, function(err, user) {
  User.findOne({email: req.body.email})
