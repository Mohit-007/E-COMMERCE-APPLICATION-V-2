const mongoose = require('mongoose');

 
const CustomerSchema = mongoose.Schema({
    name:{
        type: String ,
        required: true 
    },
    identity:{
        type: String ,
        required: true 
    },
    password:{
        type: String ,
        required: true 
    },
    contact:{
        type: String ,
        required: true 
    },
    address:{
        type: String ,
        required: true 
    },
    city:{
        type: String ,
        required: true 
    },
    state:{
        type: String ,
        required: true 
    },
    country:{
        type: String ,
        required: true 
    }



});

const Customer = module.exports = mongoose.model('Customer', CustomerSchema) 

