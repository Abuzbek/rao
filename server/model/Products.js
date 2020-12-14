const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name:String,
    price:String,
    sale:String,
    description:String,
    img:String,
    category:String
})
module.exports = mongoose.model('user', ProductSchema)