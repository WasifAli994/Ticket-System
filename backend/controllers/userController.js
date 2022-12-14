const { model } = require("mongoose")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register new User
// @route POST /users
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
        res.status(400)
        throw new Error('User already exists!');
    }

    //Hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    //create user

   const user = await User.create({
        name,
        email,
        password: hashedPassword
})

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
        } else{
                res.status(400);
                throw new Error('Invalid User data!')
        }
})

// @desc Authenticate a User
// @route POST /users/login
// @access Public  

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(user && bcrypt.compare(password, user.password)){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })   
    }else{
        res.status(400);
        throw new Error('Invalid credentials!');
}
})

// @desc Get User data
// @route GET /users/me
// @access Private

const getMe = asyncHandler(async (req, res) => {
 res.status(200).json(rq.user)
})

//Generate JWT
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}