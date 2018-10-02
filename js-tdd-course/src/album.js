import { API_URL} from "../configs/configs";

const getAlbum = (albumId) => fetch(`${API_URL}/albums/${albumId}`).then(data => data.json())
const getAlbums = (albumsIds) => fetch(`${API_URL}/albums/?ids=${albumsIds}`).then(data => data.json())
const getAlbumTracks = (albumId) => fetch(`${API_URL}/albums/${albumId}/tracks`).then(data => data.json())

module.exports = {
  getAlbum,
  getAlbums,
  getAlbumTracks
}
