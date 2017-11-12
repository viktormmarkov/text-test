const Artist = require('./artist')

function getArtists(req, res) {
    Artist.find({}).then(function (artists) {
        console.log(artists);
        res.send(artists);
    });
}

module.exports = function (rootApp) {
    rootApp.get('/artists', getArtists);
}