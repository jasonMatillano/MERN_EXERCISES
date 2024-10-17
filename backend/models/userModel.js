const moongoose = require('mongoose')
const bcrypt = require('bcrypt')

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