//import express,body parser
const express = require("express");
const bodyParser = require("body-parser");
const {listBankController,createBankController,updateBankController,deleteBankController} =require('./controllers')
//create express server instant

const server = express();


//middleware Definition
server.use(bodyParser.json())



//route

// view bank        -get method 
server.get('/bank', listBankController)
// create a bank    -post method
server.post('/bank', createBankController)
// update bank      - put method/patch method
server.put('/bank', updateBankController)
// delete a bank    -delete method
server.delete('/bank', deleteBankController)



//start server

server.listen(3001, () => console.log("your request is ready to execute"));