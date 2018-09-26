const express = require('express')
const router = express.Router()

const Ticker = require('../../models/Ticker')
const { userMiddleware } = require('../../utils/middleware')



router.use(userMiddleware)


router.post('/', (req, res) => {
    const { symbol } = req.body
    Ticker.findOneAndUpdate({ symbol }, {$inc:{visits: 1}, earnings:req.body.earnings, $addToSet:{visitors: req.body.visitor}})
    .then(existingTicker => {
        if(!existingTicker)return new Ticker(req.body).save()
        if(existingTicker) res.send(existingTicker.comments)
        // console.log(`existing ticker:`,existingTicker.comments)
    })
    console.log('apipost complete',req.body.symbol)
    // res.send({
    //     existingTicker
    // //     info,
    // //     token: generateUserToken()
    // })
})


module.exports = router