const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../models");
router.get("/login", function (req, res) {
  res.render("auth/login");
});
router.get("/register", function (req, res) {
  res.render("auth/register");
});

module.exports = router;