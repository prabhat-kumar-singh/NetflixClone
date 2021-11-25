const mongoose = require("mongoose");
const {validationResult} = require("express-validator");
const User = require("../models/user");

exports.signup = (req, res) => {
    const user = new User(req.body);
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            error: "Unable to create a user, please enter valid email/password"
        })
    }

    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                error: "Unable to create a new user"
            })
        }

        return res.json({
            name: user.name,
            email: user.email,
            admin: user.admin,
            password: user.password
        })
    })
}