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
        item: {type: Number, required: true},    
        productID: {type: Number, required: true},
        productName: {type: String, required: true},
        quantity: {type: Number, required: true},
        price: {type: Number, required: true},
        
        
            }]   
          
         
    }
)

module.exports = mongoose.model('Punk', punkSchema)