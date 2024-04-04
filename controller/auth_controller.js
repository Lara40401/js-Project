const userModel = require("../models/userModel").userModel; // contains the database. 
const database = require("../models/userModel").database
const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    
    // implement later

  },

  registerSubmit: (req, res) => {
    // implement later
    
  },
};

module.exports = authController;
