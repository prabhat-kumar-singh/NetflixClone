const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const videoSchema = new mongoose.Schema({
    title:{
        type: String,
        maxlength: 30,
        required: true,
        trim: true
    },
    summary: {
        type: String,
        maxlength: 500,
    },
    cast:{
        type: Array,
        default: []
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    poster:{
        data: Buffer,
        contentType: String,
    },
    src:{
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model("Video", videoSchema);