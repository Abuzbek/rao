const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const Admin = new Schema({
    username:String,
    password:String
})
module.exports = mongoose.model('admin', Admin)