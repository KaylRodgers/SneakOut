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