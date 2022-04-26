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
        console.log(foundReview.movie)
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();  
    }
})

router.get('/:reviewId/edit', async (req, res, next) => {
    try {
        const updatedComment = await db.Review.findByIdAndUpdate(req.params.reviewId)
        const context = {
            comment: updatedComment
        }
        // console.log("updated comment", updatedComment)
        return res.render("./reviews/edit.ejs", context)
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();  
    }
})

// router.get('/:reviewId/edit', (req, res) => {
//     res.render('./reviews/edit.ejs')
// })

router.put('/:reviewId', async (req, res, next) => {
    try {
        const updatedReview = await db.Review.findByIdAndUpdate(req.params.reviewId, {
            rating: req.body.rating,
            comment: req.body.comment,
        })
        res.redirect(`/movies/${updatedReview.movie}`)
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();  
    }
})

module.exports = router