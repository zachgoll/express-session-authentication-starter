const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

// Package documentation - https://www.npmjs.com/package/connect-mongo
const MongoStore = require('connect-mongo')(session);

// Create the Express application
var app = express();
// <user>:<password>@
const dbString = 'mongodb://localhost:27017/tutorial_db';
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const connection = mongoose.createConnection(dbString, dbOptions);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const sessionStore = new MongoStore({ 
    mongooseConnection: connection, 
    collection: 'sessions' 
});

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    }
}));

app.get('/', (req, res, next) => {
    
    if (req.session.viewCount) {
        req.session.viewCount = req.session.viewCount + 1;
    } else {
        req.session.viewCount = 1;
    }

    res.send(`<h1>You have visited this page ${req.session.viewCount} times.</h1>`)
});

app.listen(3000);