import { API_URL } from "../configs/configs";

const search = (query, type) => fetch(`${API_URL}/search?q=${query}&type=${type}`).then(data => data.json())
const searchAlbums = (query) => search(query, 'album')
const searchArtists = (query) => search(query, 'artist')
const searchTracks = (query) => search(query, 'tracks')
const searchPlaylists = (query) => search(query, 'playlist')

module.exports = {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
}
