async function login(req, res, callback) {
  try {
    const user = await User.findOne({email: req.body.email})
    
