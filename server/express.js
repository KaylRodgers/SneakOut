<<<<<<< HEAD
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const userRoutes = require('./routes/user.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const prodRoutes = require('./routes/products.routes.js');
=======
<<<<<<< HEAD
import express from "express";
import bodyParser  from "body-parser";
import cookieParser  from 'cookie-parser';
import compress  from 'compression';
import cors  from 'cors';
import helmet  from 'helmet';
import template  from '../template.js';
import userRoutes  from './routes/user.routes.js';
import authRoutes  from './routes/auth.routes.js';
import path  from 'path';
import config  from "../config/config.js";
import mongoose  from "mongoose";
import userSchema  from './models/user.model.js';
// import React  from 'react';
// import ReactDomServer  from 'react-dom/server';
// import pkg from 'react-router-dom/dist/main.js';
// const { StaticRouter } = pkg;
// import MainRouter from './../client/MainRouter.js';
// import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
// import theme from '../client/theme.js';

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

>>>>>>> bdfa40613b0dd3014693d057973f2a3df751cb22

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "DELETE", "PUT"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
<<<<<<< HEAD
=======
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
            res.status(401).json({ "error": err.name + ": " + err.message });
        } else if (err) {
            res.status(400).json({ "error": err.name + ": " + err.message });
            console.log(err)
        }
    }
);


// app.get('*', (req, res) => {
//     const sheets = new ServerStyleSheets();
//     const context = {};

    
//     const markup = ReactDomServer.renderToString(
//         sheets.collect(
//             <StaticRouter location={req.url} context={context}>
//                 <ThemeProvider theme={theme}>
//                     <MainRouter />
//                 </ThemeProvider>
//             </StaticRouter>
//         )
//     )
//     ;

//     if (context.url) {
//         return res.redirect(303, context.url)
//     }

//     const css = sheets.toString();
//     res.status(200).send(Template({
//         markup: markup,
//         css: css
//     }));
// });


    

export default app;
=======
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const userRoutes = require('./routes/user.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const prodRoutes = require('./routes/products.routes.js');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "DELETE", "PUT"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
>>>>>>> bdfa40613b0dd3014693d057973f2a3df751cb22
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', prodRoutes)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use((err, req, res, next) => {
if (err.name === 'UnauthorizedError') {
res.status(401).json({"error" : err.name + ": " + err.message}) 
}else if (err) {
res.status(400).json({"error" : err.name + ": " + err.message}) 
console.log(err)
} 
})
<<<<<<< HEAD
module.exports = app;
=======
module.exports = app;
>>>>>>> tristanMbugua
>>>>>>> bdfa40613b0dd3014693d057973f2a3df751cb22
