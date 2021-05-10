
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const Usermodel = require('../Models/user')




const { signupController,signinController } = require('../controllers/signupController')

router.put('/signup', [
    body('name').trim().not().isEmpty().withMessage('user name is required'),
    body('email')
        .isEmail()
        .withMessage('your email is required')
        .custom((value, { req }) => {
            //todo : checks if email is already taken

            return Usermodel.findOne({ "email": value })
                .then(
                    userDoc => {
                        if (userDoc)
                            return Promise.reject(
                                'email  already taken'
                            )
                    }
                );
        }),
    body('password').isPassportNumber().withMessage('password required').custom((value, { req }) => {

    })

],

    signupController);


    router.post('/signin',[body('email')])
    .isEmail()
    .withMessage('email is valid')
    body('passowrd').trim().isLength({min:5})
    ,signinController

module.exports = router;