class ArtistService {
    query() {
        return fetch('/artists', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(async res => {
            const artists = await res.json();
            return artists;
        })
    }
    get(artist) {
        return fetch(`/artists/${artist}`, {
            method: 'GET',
        }).then(async res => {
            const artists = await res.json();
            return artists;
        });
    }
    add(artist) {
        return fetch('/artists', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(artist)
        });
    }
    update(artist) {
        return fetch(`/artists/${artist._id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(artist)
        });
    }
    remove(artist) {
        return fetch(`/artists/${artist}`, {
            method: 'DELETE'
        });
    }
}

const artistService = new ArtistService();

export default artistService;