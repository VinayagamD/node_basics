const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("In the middleware");
    next(); // Allows the request to continue to the next middleware in Line
});

app.use((req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>Hello From the Server</h1>');
});
/*
const server = http.createServer(app);

server.listen(3000);

Equivalent Express
*/
app.listen(3000);