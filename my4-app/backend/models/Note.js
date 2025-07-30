const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

module.exports = mongoose.model('Note', noteSchema)