const route = require("express").Router();
let  category  = require("../../controller/user/user_type");

route.post("/view_user_type",category.add_user)


module.exports = route;
