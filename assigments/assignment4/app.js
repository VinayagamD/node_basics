const http = require('http');
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const userRoute = require("./routes/users");


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(adminData.router);
app.use('/users',userRoute);



app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: "Page Not Found", path: ''});
});

app.listen(3000);
