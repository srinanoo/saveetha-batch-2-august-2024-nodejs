const fs = require('fs');
const path = "./blog.json";

function createBlogPost() {
    try {
        let obj = {
            "id": 5,
            "title": "Title 5",
            "description": "Description 5"
        }

        let res = fs.readFileSync(path, "utf8");
        let output = JSON.parse(res);
        let flag = output.some(v => v.title === obj.title);
        // let flag = false;

        // for(let i = 0; i < output.length; i++) {
        //     if(output[i].title === obj.title) {
        //         flag = true;
        //         break;
        //     }
        // }
       
        if(flag) {
            console.log(
                {
                    "data": "",
                    "message": "Blog Post Already Exists!",
                    "error": "",
                }
            );
        } else {
            output.push(obj)
            fs.writeFileSync(path, JSON.stringify(output));
            console.log(
                {
                    "data": "",
                    "message": "Blog Post hase been created successfully!",
                    "error": "",
                }
            );
        }
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

function readAllBlogPosts(req, res) {
    try {
        let result = fs.readFileSync(path, "utf8");
        let output = JSON.parse(result);
        if(output.length > 0) {
            res.write(
                JSON.stringify(
                {
                    "data": output,
                    "message": "",
                    "error": "",
                }
                )
            );
            res.end();
        } else {
            res.write(
                JSON.stringify(
                {
                    "data": "",
                    "message": "No Blog Post Found!",
                    "error": "",
                })
            );
            res.end();
        }
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

function readSpecificBlogPosts() {
    try {
        let title = "Title 2";
    
        let res = fs.readFileSync(path, "utf8");
        let output = JSON.parse(res);
        // let result = [];
        // output.forEach(v => {
        //     if(v.title === title) {
        //         result.push(v);
        //     }
        // })
        let result = output.filter(v => v.title === title);
        if(result.length > 0) {
            console.log(
                {
                    "data": result,
                    "message": "",
                    "error": "",
                }
            );
        } else {
            console.log(
                {
                    "data": "",
                    "message": "No Blog Post Found!",
                    "error": "",
                }
            );
        }
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

function updateBlogPost() {
    try {
        let obj = {
            "id": 4,
            "title": "Title 4 - MODIFIED"
        }

        let res = fs.readFileSync(path, "utf8");
        let output = JSON.parse(res);
        // let flag = output.some(v => v.title === obj.title);
        let flag = false;
        for(let i = 0; i < output.length; i++) {
            if(output[i].id === obj.id) {
                output[i] = {...output[i], ...obj};
                flag = true;
            }
        }
        if(flag) {
            fs.writeFileSync(path, JSON.stringify(output));
            console.log(
                {
                    "data": "",
                    "message": "Blog Post Updated Successfully!",
                    "error": "",
                }
            );
        } else {
            console.log(
                {
                    "data": "",
                    "message": "Blog Post not found!",
                    "error": "",
                }
            );
        }
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

function deleteBlogPost() {}

module.exports = {
    createBlogPost,
    readAllBlogPosts,
    readSpecificBlogPosts,
    updateBlogPost,
    deleteBlogPost
}