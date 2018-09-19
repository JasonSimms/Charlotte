const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    displayName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    points: {
        type:Number
    },
    favorites: {
        type: Array
    }
})

module.exports = mongoose.model('User', userSchema)
