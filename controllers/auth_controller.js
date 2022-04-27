const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const {User} = require("../models");


router.get("/login", function (req, res) {
  res.render("auth/login.ejs");
});


router.get("/register", function (req, res) {
  res.render("auth/register.ejs");
});

router.post("/login", async function (req, res) {
  try {
    const foundUser = await User.findOne({ email: req.body.email })
    
    if (!foundUser) return res.send("The password or username is invalid");

    const match = await bcrypt.compare(req.body.password, foundUser.password);

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


router.post("/register", async function (req, res) {
  try {
    const foundUser = await User.exists({ email: req.body.email });
  
    if (foundUser) {
      return res.redirect("/login");
    }

    const salt = await bcrypt.genSalt(12);
 
    const hash = await bcrypt.hash(req.body.password, salt);

    req.body.password = hash;

    const newUser = await User.create(req.body);

    return res.redirect("/login");

  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

module.exports = router;