const express = require('express');
const app = express();

app.get("/readAllBlogPosts", (req, res) => {
    res.send("Read All Blog Posts");
});

app.use("/*", (req, res) => {
    res.send("No route match found!");
})

app.listen(4000, () => console.log("Server started in port: 4000"));