const express = require('express')
const router = express.Router()

const authRoutes = require('./auth')
const tickerRoutes = require('./tickerApi')
const commentRoutes = require('./commentAPI')

const { userMiddleware, checkLoggedIn } = require('../../utils/middleware')
const Ticker = require('../../models/Ticker')

router.use(userMiddleware)

router.get('/', (req, res) => {
    res.send({ hello: true })
})

router.get('/protected', checkLoggedIn, (req, res) => {
    // console.log('USER', req.user)
    res.send({ success: true })
})

router.use('/auth', authRoutes)
router.use('/search', tickerRoutes)
router.use('/comment', commentRoutes)



router.use((req, res) => {
    res.status(404).send({ error: 'not-found' })
})



module.exports = router
