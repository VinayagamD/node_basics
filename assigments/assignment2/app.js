const http = require('http');
const express = require('express');
const app = express();

app.use("/", (req, res, next) => {
    console.log("This always runs");
    next();
});

app.use("/users", (req, res, next) => {
    res.send(`
        <ul>
        <li>user1</li>
        <li>user2</li>
        <li>user3</li>
        <li>user4</li>
        </ul>
    `);
});

app.use("/", (req, res, next) => {
    res.send('<p>Welcome to the app</p>');
});

app.listen(3000);