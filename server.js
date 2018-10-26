const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = mongoose.connection;
const artists = require("./models/artistController");
const songs = require('./models/songController');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
artists(app);
songs(app);

mongoose.connect('mongodb://localhost/rapstats');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    app.listen(3001, function () {
        console.log('Listening 3001');
    })
});