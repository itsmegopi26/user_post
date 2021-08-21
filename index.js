const express = require('express');
const jwt = require('jsonwebtoken');
global.__root = __dirname + '/';

const connectDB = require('./connection');

connectDB();


const Router = new express.Router();
const app = express();
const bodyparser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//import routes
const mainroutes = require('./router');
app.use('/', mainroutes);

const port = process.env.port || 3000;

app.listen(port,() => console.log("server listening on port"));

