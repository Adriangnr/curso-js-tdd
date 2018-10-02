"use strict";

var _configs = require("../configs/configs");

var _utils = require("../utils/utils");

var getAlbum = function getAlbum(albumId) {
  return fetch(_configs.API_URL + "/albums/" + albumId).then(_utils.toJson);
};
var getAlbums = function getAlbums(albumsIds) {
  return fetch(_configs.API_URL + "/albums/?ids=" + albumsIds).then(_utils.toJson);
};
var getAlbumTracks = function getAlbumTracks(albumId) {
  return fetch(_configs.API_URL + "/albums/" + albumId + "/tracks").then(_utils.toJson);
};

module.exports = {
  getAlbum: getAlbum,
  getAlbums: getAlbums,
  getAlbumTracks: getAlbumTracks
};