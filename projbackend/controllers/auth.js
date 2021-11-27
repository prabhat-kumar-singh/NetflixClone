const mongoose = require("mongoose");
const {validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.signup = (req, res) => {
    const user = new User(req.body);
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            error: "Unable to create a user, please enter valid email/password"
        })
    }

    //prevent from creating another account with the same emailId 
        User.findOne({email: req.body.email})
        .exec((err, existedUser) => {
            if(!existedUser || err){
                //could not find the user then create the database
                user.save((err, user) => {
                    if(err){
                        return res.status(400).json({
                            error: "Unable to create a new user"
                        })
                    }
            
                    res.json({
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin
                    })
                })

            }else{
                return res.json({
                    message: "email address already have an account!"
                })
            }
        })
}

exports.signin = (req, res) => {
    const {email, password} = req.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            error: "Unable to find a user, please enter valid email/password"
        })
    }

    User.findOne({email})
        .exec((err, user) => {
            if(err || !user){
                return res.status(400).json({
                    error: "email id does not exists, Please sign up!"
                })
            }

            //if user exists then authenticate it with the password
            if(!user.authenticate(password)){
                return res.status(400).json({
                    error: "Invalid emailId/password"
                })
            }

            //if authenticated then create a token and store it in browser's cookie
            const token = jwt.sign({_id: user._id}, "prabhatkumarsingh");
            res.cookie("token", token, {expire: new Date() + 9999});

            //return response to front end
            const {_id, name, email, isAdmin} = user;
            return res.json({token, user: {_id, name, email, isAdmin}})
        })
}