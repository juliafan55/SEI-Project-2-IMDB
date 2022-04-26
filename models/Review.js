const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        default: 5,
        min: 1,
        max: 10,
        required: [true, "Must have a rating out of 10"]
    },
    comment: {
        type: String,
        required: [true, "Must have rating explanation"]
    },
    movie: {
        type: mongoose.Types.ObjectId,
        ref: 'Movie'
    }
}, {timestamps: true})

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review