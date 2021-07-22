const express = require('express');
const router = express.Router();

const BuyCart = require('../models/buycart');

router.get('/get_buy_cart_items/:identity', (req, res, next) => {

    BuyCart.find({identity: req.params.identity}, function(err, buycartitems){
        if(err)
        {
            res.json({msg: 'there is some error' + err})
            
        }
        else
        {
            res.json(buycartitems);
        }        
    })
});






router.post('/purchase_buy_cart', (req, res, next) => {

    //noteeootett
    console.log(req.body[0].customer_identity)
    for(var i = 0; i < req.body.length ; i++)
    {
        let newBuyCartItem = new BuyCart({
            customer_identity: req.body[i].customer_identity,
            name: req.body[i].name,
            description: req.body[i].description,
            image_url: req.body[i].image_url,
            unit_price: req.body[i].unit_price,
            total_quantity: req.body[i].total_quantity,
            total_price: req.body[i].total_price,
            counter: req.body[i].counter
        });
        console.log(newBuyCartItem)
        newBuyCartItem.save()
    }
    res.json(true)

});

/*
router.get('/insert_buy_cart', (req, res, next) => {


    let newBuyCartItem = new BuyCart({
        customer_identity: "mohitpitti007@gmail.com",
        name: "ITEM_1",
        description: " ",
        image_url: " ",
        unit_price: 100,
        total_quantity: 1,
        total_price: 100,
        counter: 0
    });
    console.log(newBuyCartItem)
    newBuyCartItem.save((err, buycartitems) => {
        if(err)
        {
            res.json({msg:  'Failed to add contacts' + err});
        }
        else
        {
            res.json({msg: 'added successfully'});
        }
    })

});
*/

module.exports = router;