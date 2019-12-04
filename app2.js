const express = require('express');

var app = express();

// Custom middleware
function myMiddleware1(req, res, next) {
    req.newProperty = 'my custom property';
    next();
}

// Another custom middleware
function myMiddleware2(req, res, next) {
    req.newProperty = 'updated value';
    next();
}

app.use(myMiddleware2);

app.get('/', myMiddleware1, (req, res, next) => {
    res.send(`<h1>Custom Property Value: ${req.newProperty}`);
});

// Server listens on http://localhost:3000
app.listen(3000);