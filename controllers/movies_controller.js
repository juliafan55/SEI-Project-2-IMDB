const express = require('express')

const router = express.Router()

const db = require('../models')

//created a "/movies" route which will display movies
router.get('/', (req, res) => {
    res.send('Hitting movies route')
})

//creating a route to take user to a "new" page that will allow them to make a new movie
router.get('/new', (req, res) => {
    res.render('new.ejs')
})


router.post('/', async (req, res, next)=>{
    try{
        const newMovie = await db.Movie.create(req.body);
        console.log(`the new movie is ${newMovie}`)
        // return res.redirect('/movies')
    } catch (error) {
        console.log(error)
        req.error = error;
        return next();     
    }
})


module.exports = router