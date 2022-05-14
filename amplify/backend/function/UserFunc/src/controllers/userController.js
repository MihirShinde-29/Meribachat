const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  // Check for user email
  const user = await User.findOne({ email })
  if(user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
  res.json({message: 'Login User'})
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res, next) => {
  res.status(200).json(req.user)
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  loginUser, 
  getMe,
}