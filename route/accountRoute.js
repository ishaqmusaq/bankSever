
const express = require("express");
const {body} = require('express-validator');
const route= express. Router();
const accountModel =require( '../Models/AccountModel');


const {
    //for  banks
    
    //FOR Account
    listAccountController,
    createAccountController,
    updateAccountController,
    deleteAccountController

} = require('../controllers/accountController');



// view an Account        -get method 
route.get('/account', listAccountController);
// create an Account    -post method
route.post('/account',
body('accountName').trim().not().isEmpty().withMessage('accountName cannot be empty'),
body('accountType').trim().not().isEmpty().withMessage('accountType cannot be empty'),
body('accountNumber').isCreditCard().custom((value,{req})=>{
    return accountModel.findOne({"accountNumber" : value}).then(
        bankDoc=>{
           if( bankDoc)
           return Promise.reject(
               'accountNumber  already taken'
           )
        }
    )
}),
createAccountController)
// update an Account      - put method/patch method
route.patch('/account', updateAccountController)
// delete an Account    -delete method
route.delete('/account', deleteAccountController)

module.exports=route