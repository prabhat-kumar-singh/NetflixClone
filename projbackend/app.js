const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const videoRoutes = require("./routes/videoRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

const PORT = 8000;

//database connection
mongoose.connect("mongodb://localhost:27017/netflix", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("DB Connected...")
    })
    .catch(err => console.log(err))

//middlewares

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

//routes
app.use("/api", authRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/category", categoryRoutes);

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
})