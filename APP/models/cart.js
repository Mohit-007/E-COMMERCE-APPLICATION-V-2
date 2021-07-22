const mongoose = require('mongoose');

 
const CartSchema = mongoose.Schema({
    customer_identity:{
        type: String ,
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
    total_quantity:{
        type: Number ,
        required: true 
    },
    total_price:{
        type: Number ,
        required: true 
    },
    counter:{
        type: Number ,
        required: true 
    },



});

const Cart = module.exports = mongoose.model('Cart', CartSchema) 

