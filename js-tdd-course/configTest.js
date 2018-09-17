const decache = require('decache')
let config = {}

const loadConfigs = () => {
  decache('./requireTest')
  config.requireTest = require('./requireTest')
}

loadConfigs()

config.reloadConfigs = loadConfigs

module.exports = config
