const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    phone:String,
    telegram:Number,
    name:Number,
    product:Array,
    img:String,
    category:String
})
module.exports = mongoose.model('UserProduction', ProductSchema)