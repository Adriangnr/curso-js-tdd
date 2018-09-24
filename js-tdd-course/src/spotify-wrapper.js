module.exports = {
  search: (query, type) => fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`).then(data => data.json())
  ,
  searchAlbums: () => {},
  searchArtists: () => {},
  searchTracks: () => {},
  searchPlaylists: () => {}
}
