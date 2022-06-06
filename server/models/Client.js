const mongosse = require('mongoose')

const ClientSchema = mongosse.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  }
}, {timestamps: true})

module.exports = mongosse.model('Client', ClientSchema)