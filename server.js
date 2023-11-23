const config = require("./config/config.js");
const app = require("./server/express.js");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const express = require("express");
const path = require("path");

app.get('/', (req, res) => {
  res.json({message: "Welcome to User applicaiton!"});
})

/*
// app.engine('html', require('js').renderFile);
app.set('view engine', 'js');

app.get('/signupreact', (req, res) => {
    const fileName = path.join(__dirname, "./views/signup.js");
    res.render(fileName);
});

app.get('/signinreact', (req, res) => {
  const fileName = path.join(__dirname, "./views/signin.ejs");
  res.render(fileName);
});
*/

app.listen(config.port, (err) => {
  if (err) {
      console.log(err);
  }
  console.info("Server started on port %s.", config.port)
});