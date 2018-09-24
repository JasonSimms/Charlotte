const express = require('express')
const router = express.Router()

const Ticker = require('../../models/Ticker')
const { userMiddleware } = require('../../utils/middleware')



router.use(userMiddleware)


router.post('/', (req, res) => {
 console.log(`herro POST`)
 const { comment, stock } = req.body
 if(req.body.comment !== ""){

     console.log(req.body.stock, req.body.comment)
     Ticker.findOneAndUpdate({symbol:req.body.stock}, 
        {$push:{comments: {
            "author": "mickey mouse",
            "comment": req.body.comment}}})
            .then(result => 
                // console.log(result.comments)
                res.send(result.comments)
                )
            }else{console.log("comment field blank")}
 
})

router.post('/update', (req, res) => {
    console.log(`herro GET`,req.body)
    const { stock } = req.body
    toFind = req.body.stock.toUpperCase()
    console.log(toFind)
    Ticker.findOne({symbol:toFind})
    .then(result => 
    //    console.log(result.comments)
       res.send(result.comments)
       )
   })

module.exports = router