const mongoose = require('mongoose');

 
const ItemCategorySchema = mongoose.Schema({
    _id:{
        type: Number,
        required: true
    },
    category_name:{
        type: String ,
        required: true 
    }

});

const ItemCategory = module.exports = mongoose.model('ItemCategory', ItemCategorySchema) 

