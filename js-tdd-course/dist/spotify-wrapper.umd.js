(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SpotifyWrapper"] = factory();
	else
		root["SpotifyWrapper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const API_URL = 'https://api.spotify.com/v1'
/* harmony export (immutable) */ __webpack_exports__["API_URL"] = API_URL;


const TOKEN_API = "BQCiU105dNyjf0gPuaZSmuiixeo5qKax6qUuELQJyL827jywk2j5wctuqXJqLrRK5PlGFOjKwjlUWFbF2vCiCbLRG08NSeIbVagRJhf2aTHlEoldKT2G56igxBlBhqr2fp1w7jnCIusQ5Qjf_G0"

const HEADERS = {
  headers: {
    Authorization: 'Bearer ' + TOKEN_API
  }
}
/* harmony export (immutable) */ __webpack_exports__["HEADERS"] = HEADERS;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const toJson = data => data.json()
/* harmony export (immutable) */ __webpack_exports__["toJson"] = toJson;



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _configs = __webpack_require__(0);

var _utils = __webpack_require__(1);

var getAlbum = function getAlbum(albumId) {
  return fetch(_configs.API_URL + "/albums/" + albumId, _configs.HEADERS).then(_utils.toJson);
};
var getAlbums = function getAlbums(albumsIds) {
  return fetch(_configs.API_URL + "/albums/?ids=" + albumsIds, _configs.HEADERS).then(_utils.toJson);
};
var getAlbumTracks = function getAlbumTracks(albumId) {
  return fetch(_configs.API_URL + "/albums/" + albumId + "/tracks", _configs.HEADERS).then(_utils.toJson);
};

module.exports = {
  getAlbum: getAlbum,
  getAlbums: getAlbums,
  getAlbumTracks: getAlbumTracks
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _configs = __webpack_require__(0);

var _utils = __webpack_require__(1);

var search = function search(query, type) {
  return fetch(_configs.API_URL + "/search?q=" + query + "&type=" + type, _configs.HEADERS).then(_utils.toJson);
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _search = __webpack_require__(3);

var _album = __webpack_require__(2);

module.exports = {
  search: _search.search,
  searchArtists: _search.searchArtists,
  searchAlbums: _search.searchAlbums,
  searchPlaylists: _search.searchPlaylists,
  getAlbum: _album.getAlbum,
  getAlbums: _album.getAlbums,
  getAlbumTracks: _album.getAlbumTracks
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=spotify-wrapper.umd.js.map