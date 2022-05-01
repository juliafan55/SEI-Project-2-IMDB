//require express
const express = require("express");

//require router to use router. i/o app.
const router = express.Router();

//for user password encryption
const bcrypt = require("bcryptjs");

//another way to require our models - this specifically req. User only
const {User} = require("../models");

//route to login page
router.get("/login", function (req, res) {
  res.render("auth/login.ejs");
});

//route to register page
router.get("/register", function (req, res) {
  res.render("auth/register.ejs");
});

//checking login info
router.post("/login", async function (req, res) {
  try {
    //checking email entered
    const foundUser = await User.findOne({ email: req.body.email })
    //if email was not found send that message
    if (!foundUser) return res.send("The password or username is invalid");
    //if there's a match - check password
    const match = await bcrypt.compare(req.body.password, foundUser.password);
    //if password doesn't match - send that message
    if (!match) return res.send("The password or username is invalid");
    
    req.session.currentUser = {
      id: foundUser._id,
      user: foundUser.user,
    }
    return res.redirect("/movies");

  } catch (error) {
    console.log(error);
    req.error = error;
    res.send(error)
    }
})

//register user
router.post("/register", async function (req, res) {
  try {
    const foundUser = await User.exists({ email: req.body.email });
    //if email used already exists in db - redirect to login page
    if (foundUser) {
      return res.redirect("/login");
    }

    //encrypting password - 12x is standard
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;

    //if email used doesn't exist in db - create new User
    const newUser = await User.create(req.body);

    return res.redirect("/login");

  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

//route to log out
router.get("/logout", async function (req, res) {
  try {
      //stops the session of current user
      await req.session.destroy();
      return res.redirect("/login");
  } catch (error) {
      console.log(error);
      return res.send(error);
  }
});

module.exports = router;