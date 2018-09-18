const express = require('express')
const router = express.Router()
const Ticker = require('../../models/Ticker')


// test=[{
//     symbol: "iron",
//     companyName: "Ironhack"
// }]

// router.post('/tickertest', (req, res) => {
//     Ticker.create(test)
//     console.log('Ticker created?')
// })

// router.use((req, res) => {
//     res.status(404).send({ error: 'not-found' })
// })

module.exports = router