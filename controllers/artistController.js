const Artist = require('../models/artist')

function getArtists(req, res) {
    Artist.find({}).then(function (artists) {
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

function updateArtist(req, res) {
    const id = req.params.id;
    const update = req.body;
    return Artist.update({_id: id}, update, function(err, data) {
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
    rootApp.put('/artists/:id', updateArtist);    
    rootApp.delete('/artists/:id', deleteArtist);    
    rootApp.get('/artists', getArtists);
    rootApp.post('/artists', addArtist);
}