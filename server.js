const config = require('./config/config.js')
const app = require('./server/express.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

//test connection with database
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('connection to the mongo db is successful')
})

mongoose.connection.on("error", (error) => {
  console.log(error)
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});


//route to root
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SneakOut application" });
});

//creating listen to port 8080
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});