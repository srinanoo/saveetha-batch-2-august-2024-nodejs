const http = require('http');

http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);

    // res.write(req.method + ' ' + req.url);
    // res.end();

    // const {readAllBlogPosts, createBlogPost} = require('./blogModule');
    const blog = require('./blogModule');

    if(req.method === 'GET' && req.url.indexOf('readAllBlogPosts') !== -1) {
        // res.write("Read All Blog Posts");
        // res.end();
        blog.readAllBlogPosts(req, res);
    } else if(req.method === 'POST' && req.url.indexOf('createBlogPost') !== -1) {
        // res.write("Create Blog Post");
        // res.end();
        blog.createBlogPost(req, res);
    } else {
        res.write("No Route Match Found!");
        res.end();
    }
}).listen(4000, () => console.log("Server is listening on : 4000"));