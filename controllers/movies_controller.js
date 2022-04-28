const express = require('express')

const router = express.Router()

const db = require('../models')

//created a "/movies" route which will display movies
router.get('/', async (req, res, next) => {
    try {
        const movies = await db.Movie.find({})
        const context = { movies }
        return res.render("index.ejs", context)
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();  
    }
})

//creating a route to take user to a "new" page that will allow them to make a new movie
router.get('/new', (req, res) => {
    res.render('new.ejs')
})


router.post('/', async (req, res, next)=>{
    try{
        const newMovie = await db.Movie.create(req.body);
        // console.log(`the new movie is ${newMovie}`)
        return res.redirect('/movies')
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();     
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const foundMovie = await db.Movie.findById(req.params.id)
        const allReviews = await db.Review.find({ movie: req.params.id }).populate("user")
        const context = {
            oneMovie: foundMovie,
            reviews: allReviews,
            // userId: req.session.currentUser?req.session.currentUser.id: false
        }
        // console.log("current user:", req.session.currentUser)
        return res.render("show.ejs", context)
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();    
    }
})



router.get('/:id/edit', async (req, res, next) => {
    try{
        const updatedMovie = await db.Movie.findByIdAndUpdate(req.params.id)
        const context = {
            movie: updatedMovie
        }
        return res.render('edit.ejs', context)
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();   
    }
})



router.delete('/:id', async (req,res, next)=>{
    try {
        const deletedMovie = await db.Movie.findByIdAndDelete(req.params.id);
        const deletedReviews = await db.Review.deleteMany({movie: req.params.id})
        // console.log(deletedReviews);
        return res.redirect('/movies')
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})




router.put('/:id', async (req, res, next) => {
    try{
        const updatedMovie = await db.Movie.findByIdAndUpdate(req.params.id, req.body)
        return res.redirect(`/movies/${updatedMovie._id}`)
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();   
    }
})


module.exports = router