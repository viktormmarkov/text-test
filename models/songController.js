const Song = require('./song')

function getSongs(req, res) {
    Song.find({}).then(function (songs) {
        res.send(songs);
    });
}

function getSong(req, res) {
    const {id} = req.params;
    Song.findById(id).then(function (song) {
        res.send(song);
    });
}

function addSong(req, res) {
    const song = new Song({ name: req.body && req.body.name });
    return song.save(function(err, data) {
        if(err) {
            console.log(err, 'errorr');
        }
        res.send(data); 
    });
}

function updateSong(req, res) {
    const id = req.params.id;
    const update = req.body;
    return Song.update({_id: id}, update, function(err, data) {
        if(err) {
            console.log(err, 'errorr');
        }
        res.send(data); 
    });
}

function deleteSong(req, res) {
    const id = req.params.id;
    return Song.remove({_id: id}, function (err, data) {
        if(err) {
            console.log(err, 'errorr');
        }
        res.send(data); 
    });
}

module.exports = function (rootApp) {
    rootApp.get('/songs/:id', getSong);
    rootApp.put('/songs/:id', updateSong);    
    rootApp.delete("/songs/:id", deleteSong);    
    rootApp.get('/songs', getSongs);
    rootApp.post('/songs', addSong);
}