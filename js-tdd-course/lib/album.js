import { API_URL } from "../configs/configs";
import { toJson } from "../utils/utils";

const getAlbum = albumId => fetch(`${API_URL}/albums/${albumId}`).then(toJson);
const getAlbums = albumsIds => fetch(`${API_URL}/albums/?ids=${albumsIds}`).then(toJson);
const getAlbumTracks = albumId => fetch(`${API_URL}/albums/${albumId}/tracks`).then(toJson);

module.exports = {
  getAlbum,
  getAlbums,
  getAlbumTracks
};