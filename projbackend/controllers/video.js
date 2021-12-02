const mongoose = require("mongoose");
const formidable = require("formidable");
const Video = require("../models/video");
const fs = require("fs");

exports.uploadVideo = (req, res) => {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.multiple = true;

    form.parse(req, (err, fields, file) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }

        //destructure the req
        const {title, summary, poster, src} = fields;
        
        if(!title || !summary){
            return res.status(400).json({
                error: "Please include all the fields"
            })
        }

        //create a video schema
        let video = new Video(fields);

        //setting content of poster
        video.poster.data = fs.readFileSync(file.poster.filepath);
        video.poster.contentType = file.poster.type;

        //setting content of source
        video.src.data = fs.readFileSync(file.src.filepath);
        video.src.contentType = file.src.type;

        video.save((err, videoSaved) => {
            if(err || !videoSaved){
                return res.status(400).json({
                    error: "Unable to upload the video"
                })
            }

            res.json(videoSaved);
        })

    })
}