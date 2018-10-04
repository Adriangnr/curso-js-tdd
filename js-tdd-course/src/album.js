import { API_URL, HEADERS} from "../configs/configs";
import { toJson } from "../utils/utils";

const getAlbum = (albumId) => fetch(`${API_URL}/albums/${albumId}`, HEADERS).then( toJson )
const getAlbums = (albumsIds) => fetch(`${API_URL}/albums/?ids=${albumsIds}`, HEADERS).then( toJson )
const getAlbumTracks = (albumId) => fetch(`${API_URL}/albums/${albumId}/tracks`, HEADERS).then( toJson )

module.exports = {
  getAlbum,
  getAlbums,
  getAlbumTracks
}
