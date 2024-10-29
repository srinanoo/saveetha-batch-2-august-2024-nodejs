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
// createBlogPost();

function readAllBlogPosts() {
    try {
        let res = fs.readFileSync(path, "utf8");
        let output = JSON.parse(res);
        if(output.length > 0) {
            console.log(
                {
                    "data": output,
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
// readAllBlogPosts();

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
// readSpecificBlogPosts();

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
updateBlogPost();

function deleteBlogPost() {}