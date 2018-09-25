//getAlbum
//getAlbumTracks
import chai, { expect} from 'chai'
import {getAlbum} from '../src/album'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
global.fetch = require('node-fetch')

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
  })

  describe('Get Album', () => {
    //verify if fetch is called
    it('Should call fetch  method', () => {
      const album = getAlbum()
      expect(stubedFetch).to.have.been.calledOnce
    })
    //verify if fetch is called with correct url
    it('Should call fetch with correct url', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy')
    })
    //verify if data of promise is recived
    it('Should return data of promise', () => {
      const album = getAlbum('unId')
      album.then(response => {
        expect(response).to.be.eql({})
      })
    })

  })

})
