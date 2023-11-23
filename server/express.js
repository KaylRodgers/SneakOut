const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const template = require('../template.js');
const userRoutes = require('./routes/user.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const path = require('path');
const config = require("../config/config.js");
const mongoose = require("mongoose");
const userSchema = require('./models/user.model.js');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri
    , {}).then(() => {
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


const app = express();

app.get('/', (req, res) => {
    res.status(200).send(template());
});

try {
    app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));
} catch (err) {
    console.log(err.message);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use('/', userRoutes);
app.use('/', authRoutes);
app.use(
    (err, req, res, next) => {
        if (err.name === 'UnauthorizedError') {
            res.status(401).json({"error" : err.name + ": " + err.message});
        } else if (err) {
            res.status(400).json({"error" : err.name + ": " + err.message});
            console.log(err)
        }
    }
);

module.exports = app;