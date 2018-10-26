const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = Schema({
    name: String,
    lyrics: String,
    wordCount: Number,
    artist: {
        type: mongoose.Schema.ObjectId,
        ref: 'Artist'
    }
});

const SongModel = mongoose.model('Song', SongSchema) 

module.exports = SongModel;