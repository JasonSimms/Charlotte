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
    history: {
        typte: Array,
    },
    points: {
        type:Number
    },
    openTrades:{
        type: Array
    },
    closedTrades:{
        type:Array
    },
    favorites: {
        type: Array
    }
})

module.exports = mongoose.model('User', userSchema)
