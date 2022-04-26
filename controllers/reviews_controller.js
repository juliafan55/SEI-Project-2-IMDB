const express = require('express')

const router = express.Router()

const db = require('../models')


router.post('/', async (req, res, next) => {
    try{
        const newReviewInfo = req.body
        const newReview = await db.Review.create(newReviewInfo)
        res.redirect(`/movies/${newReview.movie}`)
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();  
    }
})

router.delete('/:reviewId', async (req, res, next) => {
    try {
        const foundReview = await db.Review.findByIdAndDelete(req.params.reviewId)
        res.redirect(`/movies/${foundReview.movie}`)
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();  
    }
})

module.exports = router