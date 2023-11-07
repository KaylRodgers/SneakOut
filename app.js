const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 5500;

// Configured EJS 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware
app.use(cors());
app.use(express.json());

// Connecction to MongoDB database


// routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sever start 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});