//adding libraries used on the app
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compress = require('compression')
const cors  = require('cors')
const helmet  = require('helmet')
const ejs = require('ejs')
const productRoutes  = require('./routes/users.js')

const app = express();

//using the libraries
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', productRoutes)

app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

module.exports = app;