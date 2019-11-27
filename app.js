const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);





/**
 * -------------- GENERAL SETUP ----------------
 */

// Gives us access to variables set in the .env file
require('dotenv').config();

var app = express();





/**
 * -------------- DATABASE ----------------
 */

// Connect to MongoDB Server.  Options are included to remove errors from terminal
const connection = mongoose.createConnection(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true } );

// Creates simple schema for a User.  The hash and salt are derived from the user's given password at register
const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String
});

// Defines the model that we will use in the app
mongoose.model('User', UserSchema);





/**
 * -------------- SESSION SETUP ----------------
 */

// Use the MongoDB connection that we setup above to store session data
const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' })

// Add the session middleware to our application
app.use(session({
    secret: 'my insecure secret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore 
}));





/**
 * -------------- ROUTES ----------------
 */

// Returns "YES" if user is logged in, "NO" if not
app.get('/login', (req, res, next) => {

    res.send('<h1>Login Page</h1>');

});

app.post('/login', (req, res, next) => {



});

app.get('/register', (req, res, next) => {

    res.send('<h1>Register Page</h1>');
    
});

app.post('/register', (req, res, next) => {



});







/**
 * -------------- SERVER ----------------
 */

app.listen(3000);