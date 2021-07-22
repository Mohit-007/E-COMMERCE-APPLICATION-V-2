const express = require('express');
const router = express.Router();

const Item = require('../models/item');

router.get('/items/findbycategoryid/:id', (req, res, next) => {

    Item.find({category_id: req.params.id}, function(err, items){
        if(err)
        {
            res.json({msg: 'there is some error' + err})
            
        }
        else
        {
            // console.log(category_id)
            // console.log(req.params.id)
            // console.log(items);
            res.json(items);
        }        
    })
});

router.get('/items/findbysearchkeyword/:keyword', (req, res, next) => {

    Item.find({name: req.params.keyword}, function(err, items){
        if(err)
        {
            res.json({msg: 'there is some error' + err})
            
        }
        else
        {
            res.json(items);
        }        
    })
});


router.get('/add_item', (req, res, next) => {
    let newItem = new Item({
        _id: 3,
        name: "ITEM_3",
        description: " ",
        image_url: " ",
        unit_price: 100,
        category_id: 1,
    });
    newItem.save((err, item) => {
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


router.delete('/item/:id', (req, res, next) => {
    Item.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});


module.exports = router;