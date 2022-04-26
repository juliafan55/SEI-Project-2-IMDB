const express = require('express')

const router = express.Router()

const db = require('../models')

router.get('/', (req, res) => {
    res.send('Hitting movies route')
})





module.exports = router