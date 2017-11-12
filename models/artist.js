const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = Schema({
    name: String
});

const ArtistModel = mongoose.model('Artist', ArtistSchema) 

module.exports = ArtistModel;