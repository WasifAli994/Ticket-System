const { model } = require("mongoose")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register new User
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please add all fields!');
    }

    //check if user exists
    const userExists = await User.findOne({email});

    if(userExists){
        throw new Error('User already exists!');
    }

    //Hash password
    const salt = 10
//    const hashedPassword = bcrypt.hash(password, salt);

    //create user

 /*   const user = await User.create({
        name,
        email,
        password:
})
*/
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
        } else{
                res.status(400);
                throw new Error('Invalid User data!')
        }
})

// @desc Authenticate a User
// @route POST /api/users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
    res.json({message: 'Login User!'})
})

// @desc Get User data
// @route GET /api/users/me
// @access Private

const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'User Data!'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}