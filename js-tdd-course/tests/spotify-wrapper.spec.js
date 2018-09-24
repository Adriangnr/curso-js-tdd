/* eslint-disable no-trailing-spaces,semi */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)
global.fetch = require('node-fetch')

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

  describe('Generic Search', () => {
    let fetchStub
    let promise

    beforeEach(() => {
      fetchStub = sinon.stub(global, 'fetch')
      promise = fetchStub.returns(Promise.resolve({
        'body': 'json',
        json(){

        }
      }))
    })

    afterEach(() => {
      fetchStub.restore()
    })

    it('Should call fetch function', () => {
        search('Incubus', 'artist').then(response => {})
        expect(fetchStub).to.have.been.calledOnce
    })

    it('Should recieve the correct url to fetch', () => {
      context('Passing one type', () => {
        search('Incubus', 'artist').then(response => {})
        expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

        search('Incubus', 'album').then(response => {})
        expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')
      })

      context('Passing more than one type', () => {
        search('Incubus', ['artist', 'album']).then(response => {})
        expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album')
      })
    })

    it('Should return the JSON DATA from the promise', () => {
      search('Incubus', 'artist').then( value => {
        expect(value).to.be.eql({})
      })

    })
  })
})
