const mongosse = require('mongoose')

const ProjectSchema = mongosse.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed']
  },
  clientId: {
    type: mongosse.Schema.Types.ObjectId,
    ref: "Client",
  }
}, {timestamps: true})

module.exports = mongosse.model('Project', ProjectSchema)