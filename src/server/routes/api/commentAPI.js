const express = require('express')
const router = express.Router()

const Ticker = require('../../models/Ticker')
const { userMiddleware } = require('../../utils/middleware')



router.use(userMiddleware)


router.post('/', (req, res) => {
 const { comment, stock } = req.body
 if(req.body.comment !== ""){
    //  console.log(req.body.stock, req.body.comment)
     Ticker.findOneAndUpdate({symbol:req.body.stock}, 
        {$push:{comments: {
            "author": req.body.author,
            "comment": req.body.comment}}})
            .then(result => 
                res.send(result.comments)
                )
            }else{
                console.log("comment field blank")
            }
})

router.post('/update', (req, res) => {
    const { stock } = req.body
    toFind = req.body.stock.toUpperCase()
    Ticker.findOne({symbol:toFind})
    .then(result => 
       res.send(result.comments)
       )
   })

module.exports = router