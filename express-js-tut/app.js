const http = require('http');

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine("hbs",
    expressHbs({
        extname: "hbs",
        layoutsDir: "views/layouts/",
        defaultLayout: 'main-layout'
    }));
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: "Page Not Found"});
});


app.listen(3000);
