const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get("/",(req, res, next) => {
    return res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = router;
