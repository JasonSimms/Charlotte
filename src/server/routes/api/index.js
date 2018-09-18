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

//CREATING TICKERS VIA POST
test=[{
    symbol: "iroasdfasdfn",
    companyName: "Ironhadfasdack"
}]

router.post('/tickertest', (req, res) => {
    Ticker.create(test, err => {
        if (err) {
          throw err;
        }
      })
    console.log('Ticker created?')
})

router.use((req, res) => {
    res.status(404).send({ error: 'not-found' })
})



module.exports = router
