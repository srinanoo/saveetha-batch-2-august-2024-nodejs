// const express = require('express');
// const router = express.Router();

const router = require('express').Router();

const BlogControllers = require('../controllers/blogControllers');

// router.get("/", (req, res) => {
//     res.send("");
// })

router.get("/getAllBlogPosts", BlogControllers.getAllBlogPosts);
router.post("/createBlogPost", BlogControllers.createBlogPost);
router.put("/updateBlogPost", BlogControllers.updateBlogPost);
router.delete("/deleteBlogPost", BlogControllers.deleteBlogPost);

module.exports = router;