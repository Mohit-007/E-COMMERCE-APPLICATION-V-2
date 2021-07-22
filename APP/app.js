var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

// port no. (local machine)
// const port = 3000

// port no. (live server)
const port = process.env.PORT || 8000


const customer_route = require('./controller/customercontroller');
const item_route = require('./controller/itemcontroller');
const item_category_route = require('./controller/itemcategorycontroller');
const cart_route = require('./controller/cartcontroller');
const buy_cart_route = require('./controller/buycartcontroller');


// connect to mongodb
mongoose.connect('mongodb+srv://root:Mohit2516@e-commerce.qg49d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

// successfull connection
mongoose.connection.on('connected', () => {
    console.log('connected to database mongodb @ 61783');
})

// error connection
mongoose.connection.on('error', (err) => {
    if(err)
    {
        console.log('error in database connection:' + err)
    }
})

// adding middleware - cors
app.use(cors());

// body-parser
app.use(bodyparser.json());

app.use('/api', item_route)
app.use('/api', item_category_route)
app.use('/api', customer_route)
app.use('/api', cart_route)
app.use('/api', buy_cart_route)

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


// testing server
app.get('/', (req, res) => {
    res.send("hello world"); 
})


app.get('/', (req, res) => {
    res.send("hello world"); 
})



 
app.listen(port, () => { 
    console.log('server started at port:' + port); 
})

