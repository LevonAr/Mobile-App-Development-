function login(req, res, callback) {
  User.findOne({email: req.body.email})
    .then(function(user) {
      return user.comparePassword(req.body.password)
    })
    .then(function(isMatch) {
