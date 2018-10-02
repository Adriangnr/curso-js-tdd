global.fetch = require('node-fetch')

import { searchAlbums } from '../src/search'

searchAlbums('Incubus').then(response => console.log(response))
