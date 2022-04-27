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

router.post("/register", async function (req, res) {
  try {
    // console.log(` this is ${req.body}`)
    const foundUser = await User.exists({ email: req.body.email });
    console.log(req.body)
  
    if (foundUser) {
      return res.redirect("/login");
    }

    const salt = await bcrypt.genSalt(12);
 
    const hash = await bcrypt.hash(req.body.password, salt);

    req.body.password = hash;

    const newUser = await User.create(req.body);
    console.log(newUser)

    return res.redirect("/login");
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

module.exports = router;