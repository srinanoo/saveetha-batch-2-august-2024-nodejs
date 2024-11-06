const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/BlogManagement").then(() => {
//     console.log("MongoDB Connected...");
// })
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connected"));

// Routes
const BlogRoutes = require("./routes/blogRoutes");
app.use("/api/v1/blog/", BlogRoutes);
// app.use("/api/v1/author/");
// app.use("/api/v1/categories/");

app.use("/*", (req, res) => {
    res.send("No routes found!");
});

app.listen(port, () => console.log(`Server is listening on port : ${port}`));