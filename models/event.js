const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  title: {type: String, required: true},
  link: {type: String, required: true},
  contentSnippet: {type: String},
  pubDate: {type: Number, require: false}
});

module.exports = mongoose.model('event', eventSchema);
