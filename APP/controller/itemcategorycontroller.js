const express = require('express');
const router = express.Router();

const ItemCategory = require('../models/item_category');

router.get('/item-category', (req, res, next) => {

    ItemCategory.find(function(err, itemcategories){
        if(err)
        {
            res.json({msg: 'there is some error' + err})
            
        }
        else
        {
            res.json(itemcategories);
        }        
    })
});


router.get('/add-category', (req, res, next) => {
    let newCategory = new ItemCategory({
        _id: 1,
        category_name: "ITEM_CATEGORY_1"
    });
    newCategory.save((err, category) => {
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