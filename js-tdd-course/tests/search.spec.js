/* eslint-disable no-trailing-spaces,semi */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)
global.fetch = require('node-fetch')

import { search, searchAlbums, searchArtists, searchPlaylists, searchTracks } from '../src/search'
import { API_URL } from "../configs/configs"

describe('Search', () => {

  let fetchStub
  let promise

  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch')
    promise = fetchStub.returns(new Promise((resolve, reject) => {
      resolve({
        json() {
          return {}
        }
      })
    }))
  })

  afterEach(() => {
    fetchStub.restore()
  })

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
    it('Should call fetch function', () => {
      search('Incubus', 'artist')
      expect(fetchStub).to.have.been.calledOnce
    })

    it('Should recieve the correct url to fetch', (done) => {
      context('Passing one type', () => {
        search('Incubus', 'artist')
        expect(fetchStub).to.have.been.calledWith(`${API_URL}/search?q=Incubus&type=artist`)

        search('Incubus', 'album')
        expect(fetchStub).to.have.been.calledWith(`${API_URL}/search?q=Incubus&type=artist`)
      })

      context('Passing more than one type', () => {
        search('Incubus', ['artist', 'album'])
        expect(fetchStub).to.have.been.calledWith(`${API_URL}/search?q=Incubus&type=artist,album`)
      })

      done()
    })

    it('Should return the JSON DATA from the promise', (done) => {
      search('Incubus', 'artist').then(response => {
        expect(response).to.be.equal({})
      }).catch(err => err)

      done()
    })
  })

  describe('Search Artists', () => {
    it('Should fetch function', (done) => {
      searchArtists('Incubus')
      expect(fetchStub).to.have.been.calledOnce
      done()
    })

    it('Should call fetch with the correct URL', (done) => {
      searchArtists('Incubus')
      expect(fetchStub).to.have.been.calledWith(`${API_URL}/search?q=Incubus&type=artist`)

      searchArtists('Muse')
      expect(fetchStub).to.have.been.calledWith(`${API_URL}/search?q=Muse&type=artist`)
      done()
    })
  })

  describe('Search Albums', () => {
    it('Should fetch function', (done) => {
      searchAlbums('Incubus')
      expect(fetchStub).to.have.been.calledOnce
      done()
    })

    it('Should call fetch with the correct URL', (done) => {
      searchAlbums('Incubus')
      expect(fetchStub).to.have.been.calledWith(`${API_URL}/search?q=Incubus&type=album`)

      searchAlbums('Muse')
      expect(fetchStub).to.have.been.calledWith(`${API_URL}/search?q=Muse&type=album`)
      done()
    })
  })

  describe('Search Tracks', () => {
    it('Should fetch function', (done) => {
      searchTracks('Incubus')
      expect(fetchStub).to.have.been.calledOnce
      done()
    })

    it('Should call fetch with the correct URL', (done) => {
      searchTracks('Incubus')
      expect(fetchStub).to.have.been.calledWith(`${API_URL}/search?q=Incubus&type=tracks`)

      searchTracks('Muse')
      expect(fetchStub).to.have.been.calledWith(`${API_URL}/search?q=Muse&type=tracks`)
      done()
    })
  })

  describe('Search Playlists', () => {
    it('Should fetch function', (done) => {
      searchPlaylists('Incubus')
      expect(fetchStub).to.have.been.calledOnce
      done()
    })

    it('Should call fetch with the correct URL', (done) => {
      searchPlaylists('Incubus')
      expect(fetchStub).to.have.been.calledWith(`${API_URL}/search?q=Incubus&type=playlist`)

      searchPlaylists('Muse')
      expect(fetchStub).to.have.been.calledWith(`${API_URL}/search?q=Muse&type=playlist`)
      done()
    })
  })
})
