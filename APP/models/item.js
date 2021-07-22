const mongoose = require('mongoose');
const ItemCategory = require('../models/item_category') 


const ItemSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name:{
        type: String ,
        required: true 
    },
    description:{
        type: String ,
        required: true 
    },
    image_url:{
        type: String ,
        required: true 
    },
    unit_price:{
        type: Number ,
        required: true 
    },
    category_id:{
        type: Number,
        required: true
    }


});

const Item = module.exports = mongoose.model('Item', ItemSchema) 

