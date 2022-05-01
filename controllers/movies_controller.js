//require express
const express = require('express')

//require router to use router. i/o app.
const router = express.Router()

//require models
const db = require('../models')

//created a "/movies" route which will display movies
router.get('/', async (req, res, next) => {
    try {
        //when creating a new movie "user" info will also be passed through and can be used for user auth
        const movies = await db.Movie.find({}).populate("user")
        const context = { movies }
        return res.render("index.ejs", context)
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();  
    }
})

//route to take user to a "new" page that will allow them to make a new movie
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

//placing the newly created movie in the body
router.post('/', async (req, res, next)=>{
    try{
        const newMovie = await db.Movie.create(req.body);
        return res.redirect('/movies')
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();     
    }
})

//route to take user to individual movies page
router.get("/:id", async (req, res, next) => {
    try {
        const foundMovie = await db.Movie.findById(req.params.id)
        //when creating a new review "user" info will also be passed through and can be used for user auth
        const allReviews = await db.Review.find({ movie: req.params.id }).populate("user")
        const context = {
            oneMovie: foundMovie,
            reviews: allReviews,
        }
        return res.render("show.ejs", context)
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();    
    }
})

//route to edit movie
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

//route to delete movie
router.delete('/:id', async (req,res, next)=>{
    try {
        const deletedMovie = await db.Movie.findByIdAndDelete(req.params.id);
        const deletedReviews = await db.Review.deleteMany({movie: req.params.id})
        return res.redirect('/movies')
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

//route to update movie
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