const dotenv = require('dotenv');
/**
 * Load ENV files
 */
dotenv.config();

const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const userRoutes = require('./routes/user.routes');
const cors = require('cors');
var app = express();

/**
 * Handle cors
 */
app.use(cors());
app.options('*', cors());

/**
 * Parsers
 */
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(cookieParser());


/**
 * Session & Passport initialization
 */
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.JWT_SECRET
}));
require('./config/passport.config');
app.use(passport.initialize());
app.use(passport.session());

/**
 * Routes
 */
app.use('/users', userRoutes());

app.listen(process.env.PORT);
console.log(`Server is listening on port ${process.env.PORT}`);