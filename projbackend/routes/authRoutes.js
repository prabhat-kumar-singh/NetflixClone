const express = require("express");
const {check} = require("express-validator");
const User = require("../models/user");

const {signup, signin} = require("../controllers/auth");
const router = express.Router();

router.post("/signin", [
    check('password').isLength({min: 5}).withMessage("Password must be of length 5"),
    check('email').isEmail().withMessage("Please enter valid email address")
], signin)

router.post("/signup",[
    check('password').isLength({min: 5}).withMessage("Password must be of length 5"),
    check('email').isEmail().withMessage("Please enter valid email address")
], signup )


module.exports = router;