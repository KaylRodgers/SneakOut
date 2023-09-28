const express = require('express');
const router = express.Router();

// Define routes for different pages
router.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Home' });
});

router.get('/about', (req, res) => {
    res.render('about', { pageTitle: 'About' });
});

// Define routes for other pages

module.exports = router;