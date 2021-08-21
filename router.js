const express = require('express');
let route = require('express').Router();
const app = express();

const user = require('./routes/user/user_type');
app.use('/user/user_type', user);

const post = require('./routes/post/post');
app.use('/post/view_post', post);



module.exports = app;



