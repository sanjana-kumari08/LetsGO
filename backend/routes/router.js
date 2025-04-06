const express = require('express');
// const books = require('./models/Userschema'); // Importing Model
const books = require('../models/Userschema')
const router = express.Router();

// GET API
router.get('/g', (req, res) => {
    res.send("This is GET API");
    console.log("GET method called");
});

// POST API
router.post('/api/signup', async (req, res) => {
    const { username, phone, email, password, cpassword } = req.body;

    // Validate password confirmation
    if (password !== cpassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
        const newUser = new books({ username, phone, email, password, cpassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
