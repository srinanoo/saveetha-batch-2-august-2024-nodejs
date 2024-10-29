// common js way
// const os = require('os');
// // console.log(os);
// // console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.arch());

// module (ES) js way
// import os from 'os';

// const fs = require('fs'); // file system
// CRUD on the file
    // CREATE OR UPDATE
        // fs.writeFileSync
        // fs.writeFile
    // READ
        // fs.readFileSync
        // fs.readFile
    // APPEND
        // fs.appendFileSync
        // fs.appendFile
    // DELETE
        // fs.unlinkSync
        // fs.unlink

// CRUD on the JSON file data... create a JSON file with [] (empty array hardcoded)
    // CONCEPT can be "user" or "trainees" or "blog"
        // createBlogPost() => {id: 1, title: "", description: ""} -> [{}, {}, {}]
        // readAllBlogPosts() => []
        // readSpecificBlogPost("") => only that blog which matches the condition. eg: "Blog 1"
        // updateSpecificBlogPost() => "id: 1" => Description or Date or Author...
        // deleteSpecificBlogPost() => "id: 1" => DELETE THAT BLOG POST

// const os = require('os'); // common
// import os from 'os';

const fs = require('fs');
// Create or Write a File
    // Sync way
        // function createFileSync() {
        //     try {
        //         console.log("Before...");
        //         fs.writeFileSync("sample1.txt", "sample data");
        //         console.log("File has been created!");
        //         console.log("After...");
        //     } catch (e) {
        //         console.log(e);
        //     }
        // }
        // createFileSync();
    // Async way
    // function createFileAsync() {
    //     console.log("Before...");
    //     fs.writeFile("sample2.txt", "modified data", (err) => {
    //         if(err)
    //             console.log(err);
    //         else
    //             console.log("File has been created!");
    //     });
    //     console.log("After...");
    // }
    // createFileAsync();

// Read
    // Sync
    // function readAFileSync() {
    //     try {
    //         console.log("Before...");
    //         let data = fs.readFileSync("sample1.txt", "utf8");
    //         console.log(data);
    //         console.log("After...");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // readAFileSync();
    // Async
    // function readAFileAsync() {
    //     try {
    //         console.log("Before...");
    //         fs.readFile("sample1.txt", "utf8", (err, data) => {
    //             if(err)
    //                 console.log(err);
    //             else
    //                 console.log(data);
    //         });
    //         console.log("After...");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // readAFileAsync();
// Append
    // Sync
    // function appendAFileSync() {
    //     try {
    //         console.log("Before...");
    //         fs.appendFileSync("sample1.txt", " new data added");
    //         console.log("Data has been appended!");
    //         console.log("After...");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // appendAFileSync();
    // Async
    // function appendAFileAsync() {
    //     try {
    //         console.log("Before...");
    //         fs.appendFile("sample2.txt", " new data added", (err) => {
    //             if(err)
    //                 console.log(err);
    //             else
    //                 console.log("Data has been appended!");
    //         });
    //         console.log("After...");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // appendAFileAsync();
// Delete
    // Sync
    // function deleteAFileSync() {
    //     try {
    //         console.log("Before...");
    //         fs.unlinkSync("sample1.txt");
    //         console.log("File has been deleted!");
    //         console.log("After...");
    //     } catch (err) {
    //         console.log(err.message);
    //     }
    // }
    // deleteAFileSync();
    // Async
    // function deleteAFileAsync() {
    //     try {
    //         console.log("Before...");
    //         fs.unlink("sample2.txt", (err) => {
    //             if(err)
    //                 console.log(err);
    //             else
    //                 console.log("File has been deleted!");
    //         });
    //         console.log("After...");
    //     } catch (err) {
    //         console.log(err.message);
    //     }
    // }
    // deleteAFileAsync();

// Blog Management
    // CRUD
        // createBlogPost()
        // readAllBlogPosts()
        // readSpecificBlogPost()
        // updateBlogPost()
        // deleteBlogPost()

        JSON.stringify()
        JSON.parse()