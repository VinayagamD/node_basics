const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

/**
 * add-product GET
 */
router.get('/add-product', (req, res, next) => {
    return res.render('add-product', {pageTitle : "Add Product", path: "/admin/add-product" })
});

/**
 * add-product POST
 */
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    return res.redirect('/');
});

exports.routes = router
exports.products = products
