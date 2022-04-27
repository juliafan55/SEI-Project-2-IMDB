const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "User name cannot be empty"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password cannot be empty"],
    },
    profilePic: {
        type: String,
    },
    email: {
        type: String,
        require: [true, "Email connot be empty"],
        unique: true,
    },
})

const User = mongoose.model("User", userSchema)
module.exports = User
