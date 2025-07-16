const router = require('express').Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const url = require('url');
const UserAuth = require('../helpers/checkAuth')
// Load models
const User = require('../models/User');

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body

        // validate parameters 
        if (!email || !password || email == "" || password == "") {
            res.status(400).json({
                error: "Email and password is required"
            })
            return;
        }

        // check uniqueness of user
        var user = await User.findOne({ email })
        if (user) {
            res.status(400).json({
                error: "Email Already exist. Please Login"
            })
            return;
        }

        // create new user
        user = new User({ email, password });

        // encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        user = await user.save();

        // generate token or optionally direct login after registration
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // send final response
        res.json({
            message: "User Register Successfully",
            // token,
            user: {
                id: user._id,
                email: user.email,
            }
        });

    } catch (error) {
        return res.status(500).json({
            error: 'Something wrong, Try again later'
        })
    }

})



router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        // validate parameters 
        if (!email || !password || email == "" || password == "") {
            res.status(400).json({
                error: "Email and password is required"
            })
            return;
        }

        // find user with email
        var user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({
                error: "This email is not exist. Please Register First"
            })
        } else {

            // compare passwords
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return res.status(400).json({
                        error: 'Something went wrong in password hashing'
                    })
                } else if (result) {

                    // password matched successfully and generate token
                    const token = jwt.sign(
                        { id: user._id, email: user.email },
                        process.env.JWT_SECRET,
                        { expiresIn: "1h" }
                    );

                    res.json({
                        message: "User Login Successfully",
                        token,
                        user: {
                            id: user._id,
                            email: user.email,
                        }
                    });
                }
                else {
                    return res.status(400).json({
                        error: 'Passwords don\'t match'
                    })
                }
            })
        }
    } catch (error) {
        return res.status(500).json({
            error: 'Something wrong, Try again later'
        })
    }
})


module.exports = router

