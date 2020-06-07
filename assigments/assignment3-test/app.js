const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const homeRoute = require('./routes/home');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRoute);

app.listen(3000)
