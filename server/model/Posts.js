const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  img: String,
  name: String,
  description: String,
});
module.exports = mongoose.model('kunuz', Post);
