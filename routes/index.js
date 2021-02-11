const router = require('express').Router()
const customerRouter = require('./customer')

router.use('/customers', customerRouter)
module.exports = router