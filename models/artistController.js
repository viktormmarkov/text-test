const Artist = require('./artist')

function getArtists(req, res) {
    Artist.find({}).then(function (artists) {
        console.log(artists);
        res.send(artists);
    });
}

function getArtist(req, res) {
    const {id} = req.params;
    Artist.findById(id).then(function (artist) {
        res.send(artist);
    });
}

module.exports = function (rootApp) {
    rootApp.get('/artists/:id', getArtist);    
    rootApp.get('/artists', getArtists);
}