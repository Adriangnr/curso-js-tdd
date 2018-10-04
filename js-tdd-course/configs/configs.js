const API_URL = 'https://api.spotify.com/v1'

const TOKEN_API = "un token"

const HEADERS = {
  headers: {
    'Authorization': `'Bearer ${TOKEN_API}'`
  }
}

module.exports = {
  API_URL,
  HEADERS
}
