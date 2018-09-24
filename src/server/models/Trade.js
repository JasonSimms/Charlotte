const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tradeSchema = new Schema({
    user_id: {
        type: String,
    },
    opendate: {
        type: Date
    },
    openprice: {
        type: Number
    },
    stock: {
        type: String
    },
    closedate: {
        type: Date
    },
    closeprice: {
        type: Number
    },
    gain:{
        type: Number
    },
    closed:{
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model('Trade', tradeSchema)
