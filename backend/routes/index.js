'use strict';

const express = require('express');
const router = express.Router();

// Basic route structure
router.get('/', (req, res) => {
    res.send('Welcome to the Job Searching API!');
});

// Add more routes here

module.exports = router;
