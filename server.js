'use strict';

const express = require('express'),
    app = express(),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
 
require('mongoose').Promise = require('q').Promise;
mongoose.connect('mongodb://172.17.0.2:27017/battleblind');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

const port = process.env.PORT || 3001;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use(require('./routes'));

process.on('uncaughtException', function (err) {
    console.log(err);
});

app.listen(port, function () {
    console.log(`Express server listening on port ${port}`);
});