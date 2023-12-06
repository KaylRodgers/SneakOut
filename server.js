<<<<<<< HEAD
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
=======
const config = require("./config/config.js");
const app = require("./server/express.js");
const mongoose = require("mongoose");
const User = require("./server/models/user.model.js");
const Sneaker = require("./server/models/shoe.model.js")

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {} )
   .then(() => {
  console.log("Connected to the database!");
  });

const database = mongoose.connection;

database.on(
    'error', () => {
        throw new Error(`Unable to connect to database: ${config.mongoUri}`);
    }
);
>>>>>>> tristanMbugua

app.get('/signinreact', (req, res) => {
  const fileName = path.join(__dirname, "./views/signin.ejs");
  res.render(fileName);
});
*/

<<<<<<< HEAD
app.get("/api", (req, res) => {
  res.json({ "users": ["userOne", "userTwo", "userThree"] } );
=======
User.createCollection().then((collection) => {
    console.log("User collection is connected.");
});

Sneaker.createCollection().then((collection) => {
  console.log("Sneaker collection is connected.");
});

app.get('/', (req, res) => {
  res.json({message: "Welcome to SneakOut!"});
>>>>>>> tristanMbugua
});

app.listen(config.port, (err) => {
  if (err) {
      console.log(err);
  }
  console.info("Server started on port %s.", config.port)
});