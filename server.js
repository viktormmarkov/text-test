const wordcount = require('./wordcount');
const fs = require('fs');
const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = mongoose.connection;
const artists = require('./models/artistController');

artists(app);

mongoose.connect('mongodb://localhost/rapstats');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    app.listen(3001, function () {
        console.log('Listening 3001');
    })
});