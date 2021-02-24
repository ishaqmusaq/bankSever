const {body} = require('express-validator');
const express = require("express");
const route = express.Router();
 const bankModel= require( '../Models/bankModel');

const {
    //for banks
    listBankController,
    createBankController,
    updateBankController,
    deleteBankController,
    

} = require('../controllers/bankController');




// Bank route

// view bank        -get method 
route.get('/bank', listBankController)
// create a bank    -post method
route.post('/bank',
body('name').trim().not().isEmpty().withMessage('name cannot be empty'),
body('location').trim().not().isEmpty(),
body('branch').trim().not().isEmpty(),
body('phone').isMobilePhone('en-GH').custom((value,{req})=>{
    return bankModel.findOne({"phone" : value}).then(
        bankDoc=>{
           if( bankDoc)
           return Promise.reject(
               'phone number already taken'
           )
        }
    )
}),
 createBankController)
// update bank      - put method/patch method
route.patch('/bank', updateBankController)
// delete a bank    -delete method
route.delete('/bank', deleteBankController)

module.exports=route
