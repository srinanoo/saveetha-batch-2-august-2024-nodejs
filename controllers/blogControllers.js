function getAllBlogPosts(req, res) {
    let qry = req.query;
    res.send(`GET ROUTE : ${qry.id}, ${qry.name}`);
}

function createBlogPost(req, res) {
    let qry = req.body;
    res.send(`POST ROUTE : ${qry.id}, ${qry.name}`);
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