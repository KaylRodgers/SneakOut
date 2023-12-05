const config = require("./config/config.js");
const app = require("./server/express.js");
const mongoose = require("mongoose");
const userSchema = require("./server/models/user.model.js");
const express = require('express');
const router = express.Router();
const User = require('./models/User');

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

const user = userSchema;

user.createCollection().then((collection) => {
    console.log("User collection is created.");
});

app.get('/', (req, res) => {
  res.json({message: "Welcome to User application!"});
});

app.listen(config.port, (err) => {
  if (err) {
      console.log(err);
  }
  console.info("Server started on port %s.", config.port)
});

router.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

router.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
router.put('/api/users/:userId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

router.delete('/api/users/:userId', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

router.get('/api/users/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});