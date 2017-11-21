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

function addArtist(req, res) {
    const artist = new Artist({ name: req.body && req.body.name });
    return artist.save(function(err, data) {
        if(err) {
            console.log(err, 'errorr');
        }
        res.send(data); 
    });
}

function deleteArtist(req, res) {
    const id = req.params.id;
    return Artist.remove({_id: id}, function (err, data) {
        if(err) {
            console.log(err, 'errorr');
        }
        res.send(data); 
    });
}

module.exports = function (rootApp) {
    rootApp.get('/artists/:id', getArtist);    
    rootApp.delete('/artists/:id', deleteArtist);    
    rootApp.get('/artists', getArtists);
    rootApp.post('/artists', addArtist);
}