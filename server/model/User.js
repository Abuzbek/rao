const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    phone:String,
    telegram:String,
    name:String,
    product:Array,
    allPrice:Number
})
module.exports = mongoose.model('UserProduction', ProductSchema)