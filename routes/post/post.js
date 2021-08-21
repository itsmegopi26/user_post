const route = require("express").Router();
let  category  = require("../../controller/post/post");

// post_category opration
route.post("/add_post",category.add_post)
route.post("/edit_post/:id",category.post_update)
route.delete("/delete_post/:id",category.delete_post)

module.exports = route;
