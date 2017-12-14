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
}

const artistService = new ArtistService;

export default artistService;