const Category_Schema = require('../../model/category');
const response = require(__root + 'middleware/responseMiddleWares');
const { Mongoose } = require('mongoose');

const { responseMiddleWares } = require("../../middleware/responseMiddleWares");
const postservices = require("../../services/post/post")
var postobject = new postservices()
// add post_admin 
exports.add_post = async(req,res) => {
    try {
        postobject.addnewpost(post_status, function(err, add_post_res){
            if(add_post_res)
            { 
                return res.send(responseMiddleWares("Post added successfully", true, add_post_res, 200))
            }else{
                return res.send(response.responseMiddleWares("something wrong!!", false, err, 400))
            }})
    
    }catch(err){
        return res.send(response.responseMiddleWares("something wrong please check your post creating process", false,undefined ,404))
    }
}

exports.post_update = async (req, res) => {
    try {
        const {post_auth} = req.body;
        await  postobject.updatepost({_id:req.params.id},req.body, function(err, update_post_res){
            if (err) {
                return res.send(response.responseMiddleWares("something wrong!!", false, err, 400))
            } else {
                return res.send(response.responseMiddleWares("post updated successfully", true,update_post_res, 200))
            }
        }) 
    }catch (error) {
       return res.send(response.responseMiddleWares("something wrong please check your post process", false,undefined ,404))
    }
}

exports.delete_post = async(req,res)=>{
    try {
        const {post_auth}= req.body
    await  postobject.deletepost({_id:req.params.id},req.body, function(err, delete_post_res){
        if (err) {
            return res.send(response.responseMiddleWares("something wrong!!", false, err, 400))
        } else {
            return res.send(response.responseMiddleWares("deletepost successfully", true,delete_post_res, 200))
        }
    }) 
}catch (error) {
   return res.send(response.responseMiddleWares("something wrong please check your post process", false,undefined ,404))
}
}

exports.all_post = async (req, res) => {
    try {
        postobject.getpost( function(err, getpostlist){
            if (err) {
                return res.send(response.responseMiddleWares("something wrong!!", false, err, 400))
            } else {
                return res.send(response.responseMiddleWares("Success", true,getpostlist, 200))
            }
        }) 
    }catch (error) {
        return res.send(response.responseMiddleWares("something wrong please contact admin", false,undefined ,404))
    }
}



