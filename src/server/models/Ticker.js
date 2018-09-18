const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tickerSchema = new Schema({
    Symbol: {
        type: String,
        required: true,
        unique: true,
    },
    companyName: {
        type: String,
    },
    logo: {
        type: String,
        default:
            "../public/stockicon.png",
    },
    visits: {
        type: Number,
        default: 0
    },
    visitors: {
        type: String
    },
    comments:{
        type: Array
    },
    earnings:{
        type: String
    }
})

module.exports = mongoose.model('Ticker', tickerSchema)
