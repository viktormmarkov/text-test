class SongService {
    query() {
        return fetch('/songs', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(async res => {
            const songs = await res.json();
            return songs;
        })
    }
    get(artist) {
        return fetch(`/songs/${artist}`, {
            method: 'GET',
        }).then(async res => {
            const songs = await res.json();
            return songs;
        });
    }
    add(song) {
        return fetch('/songs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(song)
        });
    }
    update(song) {
        return fetch(`/songs/${song._id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(song)
        });
    }
    remove(song) {
        return fetch(`/songs/${song}`, {
            method: 'DELETE'
        });
    }
}

const songService = new SongService();

export default songService;