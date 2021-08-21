const Category_Schema = require('../../model/admin_user_auth.js');
const response = require('../../middleware/responseMiddleWares');
const { Mongoose } = require('mongoose');

const { responseMiddleWares } = require("../../middleware/responseMiddleWares");
const categoryservices = require("../../services/user/user_type")
var categoryobject = new categoryservices()

//get categoryobject..

exports.add_user = async (req, res) => {
    try {
        categoryobject.getuser( Status,function(err, user_define){
            if (err) {
                return res.send(response.responseMiddleWares("something wrong!!", false, err, 400))
            } else {
                return res.send(response.responseMiddleWares("User Creation Is Success", true,getpostlist, 200))
            }
        }) 
    }catch (error) {
        return res.send(response.responseMiddleWares("something wrong please contact admin", false,undefined ,404))
    }
}