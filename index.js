//import express,body parser
const express = require("express");
const bodyParser = require("body-parser");
const {
    //FOR banks
    listBankController,
    createBankController,
    updateBankController,
    deleteBankController,
    //FOR Account
    listAccountController,
    createAccountController,
    updateAccountController,
    deleteAccountController

} = require('./controllers')
//create express server instant

const server = express();
//mongoos
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ishaq:1234&ishaq@cluster0.w1b95.mongodb.net/ishaq?retryWrites=true&w=majority', { useNewUrlParser: true });

//middleware Definition
server.use(bodyParser.json())



// Bank route

// view bank        -get method 
server.get('/bank', listBankController)
// create a bank    -post method
server.post('/bank', createBankController)
// update bank      - put method/patch method
server.patch('/bank', updateBankController)
// delete a bank    -delete method
server.delete('/bank', deleteBankController)


//  Accounts route

// view an Account        -get method 
server.get('/account', listAccountController);
// create an Account    -post method
server.post('/account', createAccountController)
// update an Account      - put method/patch method
server.patch('/account', updateAccountController)
// delete an Account    -delete method
server.delete('/account', deleteAccountController)

//start server

server.listen(3001, () => console.log("your request is ready to execute"));

//https://bushansirgur.in/nodejs-express-mongoose-and-mongodb-restful-web-service-patch-request/