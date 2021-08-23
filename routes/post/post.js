const route = require("express").Router();
let  category  = require("../../controller/post/post");

// post_category opration
route.post("/add_post",post.add_post)
route.post("/edit_post/:id",post.post_update)
route.delete("/delete_post/:id",post.delete_post)
route.get("/view_user",post.get_post)

module.exports = route;
