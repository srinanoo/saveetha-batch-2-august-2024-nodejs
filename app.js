const express = require('express');
const app = express();
const port = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes
const BlogRoutes = require("./routes/blogRoutes");
app.use("/api/v1/blog/", BlogRoutes);
// app.use("/api/v1/author/");
// app.use("/api/v1/categories/");

app.use("/*", (req, res) => {
    res.send("No routes found!");
});

app.listen(port, () => console.log(`Server is listening on port : ${port}`));