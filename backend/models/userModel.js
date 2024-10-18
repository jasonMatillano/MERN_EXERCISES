const moongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = moongoose.Schema

const userSchema = new Schema({
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    }
}, {timestamps: true})

// static signup method
userSchema.statics.signup = async function(email, password) {

    // validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    // check if email exists
    const exists = await this.findOne({email})
    if (exists) {
        throw Error("Email already in use")
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // create user
    const user = await this.create({email, password: hash})
    return user
}


module.exports = moongoose.model('User', userSchema)