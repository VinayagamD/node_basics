const http = require('http');

const path = require('path');

const errorController = require("./controllers/error");

const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoute);
app.use(shopRoute);

app.use(errorController.get404);


app.listen(3000);
