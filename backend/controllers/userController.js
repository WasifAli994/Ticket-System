const { model } = require("mongoose")

// @desc Register new User
// @route POST /api/users
// @access Public

const registerUser = (req, res) => {
    res.json({message: 'User Registered!'})
}

// @desc Authenticate a User
// @route POST /api/users/login
// @access Public

const loginUser = (req, res) => {
    res.json({message: 'Login User!'})
}

// @desc Get User data
// @route GET /api/users/me
// @access Private

const getMe = (req, res) => {
    res.json({message: 'User Data!'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}