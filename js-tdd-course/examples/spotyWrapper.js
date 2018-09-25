global.fetch = require('node-fetch')

import { searchAlbums } from '../src/spotify-wrapper'

searchAlbums('Incubus').then(response => console.log(response))
