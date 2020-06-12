const http = require('http');

const path = require('path');

const errorController = require("./controllers/error");

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/database');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
db.execute("SELECT * FROM products")
    .then(result =>{
        console.log(result[0], result[1]);
    })
    .catch(error =>{
        console.log(error);
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoute);
app.use(shopRoute);

app.use(errorController.get404);


app.listen(3000);
