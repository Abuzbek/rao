const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const Admin = new Schema({
    username:String,
    password:String,
    img:{
        type:String,
        default:'https://techcanvass.com/forum/uploads/avataradmin.png'
    }
})
module.exports = mongoose.model('admin', Admin)