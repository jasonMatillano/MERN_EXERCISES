const User = require('../models/userModel')

// loging user
const loginUser = async (req, res) => {
    res.send({ message: 'login controller'})
}

// signup user
const signupUser = async (req, res) => {
    res.send({ message: 'signup controller' }) 
}

module.exports = {
    loginUser,
    signupUser
}