"use strict";

var _configs = require("../configs/configs");

var _utils = require("../utils/utils");

var search = function search(query, type) {
  return fetch(_configs.API_URL + "/search?q=" + query + "&type=" + type).then(_utils.toJson);
};
var searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};
var searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};
var searchTracks = function searchTracks(query) {
  return search(query, 'tracks');
};
var searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

module.exports = {
  search: search,
  searchAlbums: searchAlbums,
  searchArtists: searchArtists,
  searchTracks: searchTracks,
  searchPlaylists: searchPlaylists
};