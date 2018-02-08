var router = require('express').Router()

router.use('/demo', require('./demo/demoRoutes'))

module.exports = router