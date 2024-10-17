const moongoose = require('mongoose')

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

module.exports = moongoose.model('User', userSchema)