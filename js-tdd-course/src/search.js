import { API_URL, HEADERS } from "../configs/configs";
import { toJson } from "../utils/utils";

const search = (query, type) => fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS).then(toJson)
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
