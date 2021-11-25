const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");

const app = express();

const PORT = 8000;

//database connection
mongoose.connect("mongodb://localhost:27017/netflix", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("DB Connected...")
    })
    .catch(err => console.log(err))

//middlewares

app.use(bodyParser.json());

//routes
app.use("/api", authRoutes);

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
})