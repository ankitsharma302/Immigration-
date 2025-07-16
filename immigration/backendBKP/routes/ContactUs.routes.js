const router = require('express').Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const url = require('url');
const UserAuth = require('../helpers/checkAuth')
// Load models
const ContactUs = require('../models/ContactUs');

router.post('/new', async (req, res) => {
    try {
        const { fname, lname, email, phone, message } = req.body

        // create new user
        var contactForm = new ContactUs({ fname, lname, email, phone, message });
        await contactForm.save();
        
        // send final response
        res.json({
            message: "Message Send Successfully, We will reply within 24 Hours",
            contactForm
        });

    } catch (error) {
        return res.status(500).json({
            error: 'Something wrong, Try again later'
        })
    }

})



module.exports = router

