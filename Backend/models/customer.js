// to define what the Item will look like
const mongoose = require('mongoose')

// get schema from mongoose object
const Schema = mongoose.Schema
// what the data will look like
const customerSchema = new Schema({
    custID: {
        type: Number,
        required: true
    },
    
    items: [{
        item: String,     
        quantity: Number,
        price: Number,
        required: true
        
    }], 
    total: {
        type: Number,
        required: true
    }
    
})

module.exports = mongoose.model('Punk', punkSchema)