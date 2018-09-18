const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    visits: {
        typte: String,
    },
    lastVisits: {
        type:String
    },
    openTrades:{
        type: Array
    },
    closedTrades:{
        type:Array
    }
})

module.exports = mongoose.model('User', userSchema)
