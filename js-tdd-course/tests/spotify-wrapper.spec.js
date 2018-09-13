import { expect } from 'chai'
import { search, searchAlbums, searchArtists, searchPlaylists, searchTracks } from '../src/spotify-wrapper'

describe('Spotify Wrapper', () => {
  describe('Smoke tests', () => {
    //search generico. se puede buscar por mas de un tipo
    //searchAlbums
    //searchArtists
    //searchTrack
    //searchPlaylists

    it('Should exist the seach method', () => {
      expect(search).to.exists
    })

    it('Should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exists
    })

    it('Should exist the searchArtists method', () => {
      expect(searchArtists).to.exists
    })

    it('Should exist the searchTracks method', () => {
      expect(searchTracks).to.exists
    })

    it('Should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exists
    })
  })
})
