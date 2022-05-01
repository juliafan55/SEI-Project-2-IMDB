//require express
const express = require('express')

//require router to use router. i/o app.
const router = express.Router()

//require models
const db = require('../models')

//route to add new review to show page
router.post('/', async (req, res, next) => {
    try {
        //newReview creates new review using Review model and creates a new document - newReviewInfo which is then passed to the body
        const newReviewInfo = req.body
        const newReview = await db.Review.create(newReviewInfo)
        res.redirect(`/movies/${newReview.movie}`)
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();  
    }
})

//route to delete a review
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

//route that brings you to a page to update your review
router.get('/:reviewId/edit', async (req, res, next) => {
    try {
        const updatedComment = await db.Review.findByIdAndUpdate(req.params.reviewId)
        const context = {
            comment: updatedComment
        }
        return res.render("./reviews/edit.ejs", context)
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();  
    }
})

//route to update a review
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