const express = require('express');
const customer = require('../models/customer');
const router = express.Router();

const Customer = require('../models/customer');

const autoincr = 1;

router.get('/retrieve_customer_details/:identity', (req, res, next) => {

    Customer.find({identity: req.params.identity}, function(err, customer){
        if(err)
        {
            res.json({msg: 'there is some error' + err})
            
        }
        else
        {
            console.log(customer)
            res.json(customer);
        }        
    })
});


router.post('/login', (req, res, next) => {
    let customer = new Customer();

    Customer.find({identity: req.body.identity}, function(err, customer){
        if(err)
        {
            res.json({msg: 'there is some error' + err})
            
        }
        else
        {
            
            res.json(true)
            if(customer.password === req.body.password)
            {    
                 console.log(customer.password)
                 res.json(true)
            }        
        }        
    })
});

router.post('/add_customer', (req, res, next) => {
    let newCustomer = new Customer({
        name: req.body.name,
        identity: req.body.identity,
        password: req.body.password,
        contact: req.body.contact,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city,
        country: req.body.country
    });
    console.log(newCustomer)
    newCustomer.save((err, customer) => {
        if(err)
        {
            res.json({msg: 'Failed to add contacts' + err});
        }
        else
        {
            res.json({msg: 'added successfully'});
        }
    })
});

router.post('/add', (req, res, next) => {
    let newCustomer = new Customer({
        name: "Mohit Agarwal",
        identity: "mohitpitti007@gmail.com",
        password: "Mohit@007",
        contact: "7790870740",
        address: "Sarita Vihar",
        state: "Delhi",
        city: "Haryana",
        country: "India"
    });
    console.log(newCustomer)
    newCustomer.save((err, customer) => {
        if(err)
        {
            res.json({msg: 'Failed to add contacts' + err});
        }
        else
        {
            res.json({msg: 'added successfully'});
        }
    })
});


module.exports = router;