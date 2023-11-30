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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());

app.get('/', (req, res) => {
    res.status(200).send(template());
});

try {
    app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));
} catch (err) {
    console.log(err.message);
}

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

export default app;