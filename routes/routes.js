const express = require('express');
const router = express.Router();    
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt');
const bcryptjs = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

router.get(
    '/',
    auth,
    async (req, res) => {
        try {
            const user = await signUpTemplateCopy.findById(req.body.id).select('-password');
            res.json(user);
        } catch (error) {
            console.log(error.msg);
            return res.status(500).json({msg: "Server Error..."});
        }
    }
);

router.post('/signup', 
    [

        check('email', 'Type proper e-mail').isEmail(),
        check('password', 'Password is required').not().isEmpty()
    ],
    
    async (request,response) => {
  
    const fullname = request.body.fullname;
    const username = request.body.username;
    const email = request.body.email;
    const password = request.body.password;

    let user = await signUpTemplateCopy.findOne({email});
    const errors = validationResult(request.body);

    


    if (!errors.isEmpty()) {
        return response.status(401).json({errors: errors.array()});
        
    }

    if (user) {
        return response.status(401).json({msg:"There is already user with this e-mail"})
    }


    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(password,  saltPassword)

    const signedUpUser = new signUpTemplateCopy ({
        fullName: fullname,
        username: username,
        email: email,
        password: securePassword
    });

    await signedUpUser.save()

    const payload = {
        user: {
            id : signedUpUser.id
        }
    }
    jwt.sign(
        payload,
        config.get('jwtSecret'),
        (err, token) => {
            if (err) throw err;
            response.json({token});
        }
    )


});


router.post(
    '/signin',
    [
        check('email', 'Type proper e-mail').isEmail(),
        check('password', 'Password is required').not().isEmpty()
    ],
    async (request, response) => {
        try{
            const email = request.body.email;
            const password = request.body.password;

            let user = await signUpTemplateCopy.findOne({email});
            const errors = validationResult(request.body);

            if (!errors.isEmpty()) {
                return response.status(401).json({errors: errors.array()});
            }

            if (!user){
                return response.status(401).json({ msg: "There is no user with this e-mail"});
            }

            let isPasswordMatch = await bcryptjs.compare(password, user.password);

            if (isPasswordMatch) {

            const payload = {
                user: {
                    id : user.id
                }
            }
            jwt.sign(
                payload,
                config.get('jwtSecret'),
                (err, token) => {
                    if (err) throw err;
                    response.json({token});

                }
            )
            
            } else return response.status(401).json({msg: "wrong password"});
            

        } catch (error) {
            console.log(error.msg);
            return response.status(500).json({msg: "Server Error..."});
        }
});


module.exports = router;