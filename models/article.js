const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: {type: String, required: true},
  link: {type: String, required: true},
  contentSnippet: {type: String},
  pubDate: {type: Number, require: false},
  page: {type: String, require: true},
  login: {type: String, require: true}
});

module.exports = mongoose.model('article', articleSchema);