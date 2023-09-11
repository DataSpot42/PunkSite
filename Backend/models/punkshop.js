// to define what the Item will look like
const mongoose = require('mongoose')

// get schema from mongoose object
const Schema = mongoose.Schema
// what the data will look like
const punkSchema = new Schema({
    item: {
        type: Int32Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type:Int32Array,
        required: true
    }
    

})

module.exports = mongoose.model('punk', punkSchema)