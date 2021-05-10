const Usermodel = require('../Models/user')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')



    const signupController = (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors)
        return res.json({ message: errors.array()[0].msg })
    }
    const { name, email, password } = req.body;
    bcrypt.hash(password, 7).then(hashedPassword => {

        const user = new Usermodel({ name, email, password: hashedPassword })
        user.save().then(user => {
            res.json({ 'message': 'signup successfuly', data: { name: user.name, email: user.email } })
        }).catch(err => console.log(err));
    })
        .catch(err => console.log(err));


}



    const signinController =async (req, res) => {
       try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        
        return res.json({ message: errors.array()[0].msg })
    }
    const { email, password } = req.body

    //find the user module
    const user = await Usermodel.findOne({ email });
    
     if(!user){
        return res.json({ message: 'user not found' });
     }

    //compare password
    const isAuth = await  bcrypt.compare(password, user.password);
   if(!isAuth){
    return res.json({ message: 'email and password conbination is incorrect ' });

   }

     const token  = jwt.sign({name:user.name ,emil:user,email,UserId:user._id},
    'supersecretkeythatcanotbeeasilyguessed',
    {expiresIn:'1hr'}

)
     return res.json({ message: 'user signin ',token });

} 
    catch (error) {
    res.json({ message: 'server error. plaese try again' })
}

   

    

    
               
        


}

module.exports = {
    signupController,
    signinController
}