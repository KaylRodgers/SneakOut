const config = require("./config/config.js");
const app = require("./server/express.js");
const mongoose = require("mongoose");
const userSchema = require("./server/models/user.model.js");

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