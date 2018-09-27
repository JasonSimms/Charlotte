const express = require('express')
const router = express.Router()

const Ticker = require('../../models/Ticker')
const { userMiddleware } = require('../../utils/middleware')

const Axios =require('axios')



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

router.post('/options', (req, res) => {
    let x = req.body.symbol
    Axios.get(`https://query1.finance.yahoo.com/v7/finance/options/${x}`).then(
        data =>{
            // console.log(data.data.optionChain,`options data here`)
            res.send(data.data.optionChain.result[0])
        }
    )
    console.log('options search complete',
    // req.body.symbol
    )
    // res.send({
    //     existingTicker
    // //     info,
    // //     token: generateUserToken()
    // })
})


module.exports = router