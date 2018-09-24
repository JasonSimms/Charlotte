const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tickerSchema = new Schema({
    symbol: {
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
        default: 1
    },
    visitors: {
        type: String,
        unique: true
    },
    comments:{
        type: Array
    },
    earnings:{
        type: Array
    }
})

module.exports = mongoose.model('Ticker', tickerSchema)
