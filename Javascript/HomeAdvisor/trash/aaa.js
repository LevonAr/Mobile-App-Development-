async function login(req, res, callback) {
  try {
    const user = await User.findOne({email: req.body.email})
    const isMatch = await user.comparePassword(req.body.password)
    
    if (!isMatch) return res.status(401).send('Incorrect password')
    
    const payload = {id: user._id, email: user.email}
