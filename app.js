const express = require('express');
const app = express();
require('dotenv').config();

const jwt = require('jsonwebtoken');

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

app.post("/api/v1/login", (req, res) => {
    try {
        const { username, password, age } = req.body;
        if(username === "Dinesh" && password === "123456") {
            const token = jwt.sign({"username": username, "age": age}, process.env.JWT_SECRET)
            res.json({"message": "User is valid", "token": token});
        } else {
            res.json({"message": "Invalid username or password"});
        }
    } catch (err) {
        res.json({"error": err.message});
    }
});

app.post("/api/v1/profile", (req, res) => {
    try {
        let token = req.headers?.authorization;

        token = token.split(" ")[1];
        if(!token) res.json({"message": "Token Not Found!"});
        const data = jwt.verify(token, process.env.JWT_SECRET);

        console.log(data);
        res.json({"message": "User is valid"});
    } catch (err) {
        res.json({"error": err.message});
    }
});

app.use("/*", (req, res) => {
    res.send("No routes found!");
});

app.listen(port, () => console.log(`Server is listening on port : ${port}`));