import config from "./config/config.js"
import app  from "./server/express.js"
import crypto from "crypto"
import jwt  from "jsonwebtoken"
import express from "express"
import path from "path"

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

app.get("/api", (req, res) => {
  res.json({ "users": ["userOne", "userTwo", "userThree"] } );
});

app.listen(config.port, (err) => {
  if (err) {
      console.log(err);
  }
  console.info("Server started on port %s.", config.port)
});