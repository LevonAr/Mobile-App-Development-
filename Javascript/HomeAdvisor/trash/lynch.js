function login(req, res, callback) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err) return callback(err)
