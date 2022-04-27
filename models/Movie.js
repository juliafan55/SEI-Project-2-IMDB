const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    poster: {
        type: String,
        required: [true, "Poster cannot be empty"]
    },
    title: {
        type: String,
        required: [true, "Title cannot be empty"],
    },
    cast: [{
        type: String,
    }],
    synopsis: {
        type: String,
    },
    director: {
        type: String,
        required: [true, "Director cannot be empty"]
    },
    releaseMonth: {
        type: Number,
        min: 1,
        max: 12,
        required: [true, "Release month cannot be empty"]
    },
    releaseDate: {
        type: Number,
        min: 1,
        max: 31,
        required: [true, "Release date cannot be empty"]
    },
    releaseYear: {
        type: Number,
        min: 1888,
        max: 2030,
        required: [true, "Release year cannot be empty"]
    },
})



const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;