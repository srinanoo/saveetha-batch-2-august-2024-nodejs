const BlogModel = require("../models/blogModel");

function getAllBlogPosts(req, res) {
    try {
        BlogModel.find().then(output => {
            if(output.length > 0) {
                res.json(
                    {
                        "data": output,
                        "message": "",
                        "error": "",
                    }
                );
            } else {
                res.json(
                    {
                        "data": "",
                        "message": "No Blog Post Found!",
                        "error": "",
                    }
                );
            }
        })
        
    } catch (err) {
        res.write(
            JSON.stringify(
            {
                "data": "",
                "message": "",
                "error": err.message,
            })
        );
        res.end();
    }
}

function createBlogPost(req, res) {
    try {
        let obj = req.body;

        BlogModel.find({"title": obj.title}).then(async output => {
            if(output.length > 0) {
                res.json(
                    {
                        "data": "",
                        "message": "Blog Post Already Exits!",
                        "error": "",
                    }
                );
            } else {
                let blogPost = new BlogModel(obj);
                await blogPost.save();
                res.json(
                    {
                        "data": "",
                        "message": "Blog Post hase been created successfully!",
                        "error": "",
                    }
                );
            }
        });
        

        // let res = fs.readFileSync(path, "utf8");
        // let output = JSON.parse(res);
        // let flag = output.some(v => v.title === obj.title);
       
        // if(flag) {
        //     console.log(
        //         {
        //             "data": "",
        //             "message": "Blog Post Already Exists!",
        //             "error": "",
        //         }
        //     );
        // } else {
        //     output.push(obj)
        //     fs.writeFileSync(path, JSON.stringify(output));
        //     console.log(
        //         {
        //             "data": "",
        //             "message": "Blog Post hase been created successfully!",
        //             "error": "",
        //         }
        //     );
        // }
    } catch (err) {
        console.log(
            {
                "data": "",
                "message": "",
                "error": err.message,
            }
        );
    }
}

function updateBlogPost(req, res) {
    let qry = req.body;
    res.send(`PUT ROUTE : ${qry.id}, ${qry.title}, ${qry.description}, ${qry.active}`);
}

function deleteBlogPost(req, res) {
    res.send(`DELETE ROUTE : ${req.params.id}, ${req.params.name}`);
}

module.exports = {
    getAllBlogPosts,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost,
}