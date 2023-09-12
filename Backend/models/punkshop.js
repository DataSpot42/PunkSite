// to define what the Item will look like
const mongoose = require('mongoose')

// get schema from mongoose object
const Schema = mongoose.Schema
// what the data will look like
const punkSchema = new Schema({
    orderNum: {
        type: Number,
        required: true
    },
    custID: {
        type: Number,
        required: true
    },
    items: [{
        item: String,     
        type: Number,
        quantity: Number,
        price: Number,
        required: true
        
    }] 
    
})

module.exports = mongoose.model('Punk', punkSchema)