const express = require('express')
const router = express.Router()

const Ticker = require('../../models/Ticker')
const { userMiddleware } = require('../../utils/middleware')



router.use(userMiddleware)


router.post('/', (req, res) => {
    const { symbol } = req.body
    console.log(`tick here: `,req.body.visitor._id)
    Ticker.findOneAndUpdate({ symbol }, {$inc:{visits: 1}, $addToSet:{visitors: req.body.visitor}})
    .then(existingTicker => {
        if(!existingTicker)return new Ticker(req.body).save()
    })
    console.log('Ticker created?',req.body.symbol)
    // res.send({
    //     info,
    //     token: generateUserToken()
    // })
})

module.exports = router