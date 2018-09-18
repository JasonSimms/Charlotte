const express = require('express')
const router = express.Router()

const authRoutes = require('./auth')
const { userMiddleware, checkLoggedIn } = require('../../utils/middleware')
const Ticker = require('../../models/Ticker')

router.use(userMiddleware)

router.get('/', (req, res) => {
    res.send({ hello: true })
})

router.get('/protected', checkLoggedIn, (req, res) => {
    console.log('USER', req.user)
    res.send({ success: true })
})

router.use('/auth', authRoutes)


router.post('/tickertest', (req, res) => {
    const { symbol } = req.body
    console.log(`tick here: `,req.body.visitor._id)
    Ticker.findOneAndUpdate({ symbol }, {$inc:{visits: 1}, $addToSet:{visitors: req.body.visitor}})
    .then(existingTicker => {
        if(!existingTicker)return new Ticker(req.body).save()
    })
    console.log('Ticker created?',req.body.symbol)
})

router.use((req, res) => {
    res.status(404).send({ error: 'not-found' })
})



module.exports = router
