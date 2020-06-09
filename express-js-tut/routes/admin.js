const express = require('express');
const path = require('path');

const productController = require("../controllers/products");

const router = express.Router();


/**
 * add-product GET
 */
router.get('/add-product', productController.getAddProduct);

/**
 * add-product POST
 */
router.post('/add-product',productController.postAddProduct);

module.exports = router
