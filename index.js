//import express,body parser
const express = require("express");
//const bodyParser = require("body-parser");
const bankRoute =require("./route/bankRoute")
const accountRoute =require("./route/accountRoute")
const signupRoute =require('./route/userRoute')
const server = express();
//mongoos
const mongoose = require('mongoose');

const route = require("./route/bankRoute");
mongoose.connect('mongodb+srv://ishaq:1234&ishaq@cluster0.w1b95.mongodb.net/ishaq?retryWrites=true&w=majority', { useNewUrlParser: true });

//middleware Definition
//server.use(bodyParser.json())
//route
server.use( bankRoute);
server.use( accountRoute)
server.use(signupRoute)



//start server

server.listen(3001, () => console.log("your request is ready to execute"));

//https://bushansirgur.in/nodejs-express-mongoose-and-mongodb-restful-web-service-patch-request/