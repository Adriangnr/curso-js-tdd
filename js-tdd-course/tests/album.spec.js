//getAlbum
//getAlbumTracks
import chai, { expect} from 'chai'
import {getAlbum, getAlbums, getAlbumTracks} from '../src/album'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
global.fetch = require('node-fetch')
import { API_URL } from "../configs/configs";

describe('Album', () => {
  let stubedFetch
  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch')
    stubedFetch.returns(new Promise((resolve, reject) => {
      resolve({
        json() {
          return {}
        }
      })
    }))
  })

  afterEach(() => {
    stubedFetch.restore()
  })

  describe('Smoke Tests', () => {
    it('Should have getAlbum method', () => {
      expect(getAlbum).to.exist
    })

    it('Should have getAlbums method', () => {
      expect(getAlbums).to.exist
    })

    it('Should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist
    })
  })

  describe('Get Album', () => {
    //verify if fetch is called
    it('Should call fetch  method', (done) => {
      const album = getAlbum()
      expect(stubedFetch).to.have.been.calledOnce
      done()
    })
    //verify if fetch is called with correct url
    it('Should call fetch with correct url', (done) => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTy`)
      done()
    })
    //verify if data of promise is recived
    it('Should return data of promise', (done) => {
      const album = getAlbum('unId')
      album.then(response => {
        expect(response).to.be.eql({})
      })
      done()
    })

  })

  describe('Get Albums', () => {
    //verify if fetch is called
    it('Should call fetch  method', (done) => {
      const album = getAlbums()
      expect(stubedFetch).to.have.been.calledOnce
      done()
    })
    //verify if fetch is called with correct url
    it('Should call fetch with correct url', (done) => {
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk'])
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk')
      done()
    })
    //verify if data of promise is recived
    it('Should return data of promise', (done) => {
      const albums = getAlbums(['unId', 'otroId'])
      albums.then(response => {
        expect(response).to.be.eql({})
      })
      done()
    })

  })

  describe('Get Album Tracks', () => {
    //verify if fetch is called
    it('Should call fetch  method', (done) => {
      const album = getAlbumTracks()
      expect(stubedFetch).to.have.been.calledOnce
      done()
    })
    //verify if fetch is called with correct url
    it('Should call fetch with correct url', (done) => {
      const albums = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy')
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks`)
      done()
    })
    //verify if data of promise is recived
    it('Should return data of promise', (done) => {
      const albums = getAlbumTracks('unId')
      albums.then(response => {
        expect(response).to.be.eql({})
      })
      done()
    })

  })
})
