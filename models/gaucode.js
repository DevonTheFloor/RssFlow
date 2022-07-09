const mongoose = require('mongoose');

const gaucodeSchema = mongoose.Schema({
  title: {type: String, required: true},
  link: {type: String, required: true},
  contentSnippet: {type: String},
  pubDate: {type: Number, require: false}
});

module.exports = mongoose.model('gaucode', gaucodeSchema);
