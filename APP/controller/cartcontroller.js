const express = require('express');
const router = express.Router();

const Cart = require('../models/cart');

router.get('/get_cart_items/:identity', (req, res, next) => {

    Cart.find({identity: req.params.identity}, function(err, cartitems){
        if(err)
        {
            res.json({msg: 'there is some error' + err})
            
        }
        else
        {
            res.json(cartitems);
        }        
    })
});


router.post('/save_cart', (req, res, next) => {
    let newCartItem = new Cart({
        customer_identity: req.body.customer_identity,
        name: req.body.name,
        description: req.body.description,
        image_url: req.body.image_url,
        unit_price: req.body.unit_price,
        total_quantity: req.body.total_quantity,
        total_price: req.body.total_price,
        counter: req.body.counter
    });
    console.log(newCartItem)
    newCartItem.save((err, cartitem) => {
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