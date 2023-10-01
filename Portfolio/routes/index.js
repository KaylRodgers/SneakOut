const express = require('express');
const router = express.Router();

// Define routes for different pages, renders and passes data as needed
router.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Home' });
});

router.get('/about', (req, res) => {
    res.render('about', { pageTitle: 'About' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { pageTitle: 'Contact' });
});

router.get('/projects', (req, res) => {
    res.render('projects', { pageTitle: 'Projects' });
});

router.get('/services', (req, res) => {
    res.render('services', { pageTitle: 'Services' });
});

// Handle the POST request from the contact form
router.post('/contact', (req, res) => {
    const { firstName, lastName, contactNumber, email, message } = req.body;

    // Do something with the form data (e.g., send an email, store in a database)

    // Redirect back to the home page
    res.redirect('/');
});
// Define routes for other pages

module.exports = router;