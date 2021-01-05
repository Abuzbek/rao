const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  img: String,
  name:String
});
module.exports = mongoose.model('back', Post);
