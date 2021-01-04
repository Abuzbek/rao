const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  img: String,
});
module.exports = mongoose.model('carousel', Post);
