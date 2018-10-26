const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = mongoose.connection;
const controllers = require('./controllers');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

controllers.initControllers(app);

mongoose.connect('mongodb://localhost/rapstats');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    app.listen(3001, function () {
        console.log('Listening 3001');
    })
});