const mongoose  = require('mongoose');

const mylinkSchema = mongoose.Schema({
  title: {type: String, required: true},
  link: {type: String, required: true},
  contentSnippet: {type: String},
  pubDate:{type: Number, required: false}
});

module.exports = mongoose.model('mylink',mylinkSchema);