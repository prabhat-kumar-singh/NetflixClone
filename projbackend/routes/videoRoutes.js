const express = require("express");
const { uploadVideo } = require("../controllers/video");

const router = express.Router();

router.post("/upload", uploadVideo);

module.exports = router;