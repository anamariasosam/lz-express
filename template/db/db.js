const mongoose = require('mongoose')
const keys = require('../config/keys')

mongoose.Promise = global.Promise

// register:new:model

const db = mongoose.connect(keys.mongoURI)

module.exports = db