const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tickerSchema = new Schema({
    ACTSymbol: {
        type: String,
        required: true,
        unique: true,
    },
    companyName: {
        type: String,
    },
    // logo: {
    //     type: String,
    //     default:
    //         'https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg',
    // },
    count: {
        type: Number,
        default: 0
    },
    visitors: {
        type: String
    },
    comments:{
        type: Array
    }
})

module.exports = mongoose.model('Ticker', tickerSchema)
