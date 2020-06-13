const http = require('http');

const path = require('path');

const errorController = require("./controllers/error");

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');


const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1)
        .then(user=> {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err)
        })
});

app.use('/admin', adminRoute);
app.use(shopRoute);

app.use(errorController.get404);

Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
});
User.hasMany(Product);


sequelize
    // .sync({force: true})
    .sync()
    .then(result => {
        return User.findByPk(1);
        // console.log(result);

    }).then(user => {
    if (!user) {
        return User.create({name: 'Vinay', email: 'vinay@test.com'})
    }
    return Promise.resolve(user);
}).then(user => {
    // console.log(user);
    app.listen(3000);
}).catch(err => {
    console.log(err);
});


